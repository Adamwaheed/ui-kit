<template>
	<div
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<!-- 
            v-model update
            @event update:modelValue
         -->
		<label
			:for="uniqueID"
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
		>
			<span class="po-capitalize">{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<FormInfo :info="info" />
		</label>
		<input
			:type="inputType"
			:name="`${uniqueID}-field`"
			:id="uniqueID"
			:value="inputValue"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:aria-describedby="`${uniqueID}-description`"
			:aria-required="required"
			:aria-disabled="disabled"
			v-bind="$attrs"
			@input="handleInput"
			@blur="handleBlur"
			:class="[
				'po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default',
				getBorderColor(),
				styleClasses,
			]"
		/>
		<FormMessage :message="message" />
		<FormErrorMessage :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
export default {
	name: "PoInputField",
};
</script>
<script setup lang="ts">
import { watch, ref, computed, onMounted } from "vue";
import formatMoney from "../../shared/helper/FormatMoney";
import { useUniqueId } from "../../composables/useUniqueId";

import FormErrorMessage from "./FormErrorMessage.vue";
import FormMessage from "./FormMessage.vue";
import FormInfo from "./FormInfo.vue";

interface Props {
	modelValue?: string | number;
	label?: string;
	type?: string;
	display?: "vertical" | "horizontal";
	id?: string;
	info?: string | undefined;
	message?: string | null;
	errorMessage?: string | null;
	hasError?: boolean;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | undefined;
	borderColor?: string;
	styleClasses?: string;
	modelModifiers?: {
		[key: string]: boolean;
	};
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: "",
	/**
	 * Input label text
	 */
	label: "",
	/**
	 * Input type
	 */
	type: "text",
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: "vertical",
	/**
	 * Input id text
	 */
	id: "",
	/**
	 * A tool tip, helper information
	 */
	info: "",
	/**
	 * Tip, description, information for the input
	 */
	message: null,
	/**
	 * Error message
	 */
	errorMessage: null,
	/**
	 * True or False has error.. NO LONGER HAVE TO USE THIS. JUST PASS AN errorMessage.
	 */
	hasError: false,
	/**
	 * True or false if required
	 */
	required: false,
	/**
	 * True or false if disabled
	 */
	disabled: false,
	/**
	 * True or false if required
	 */
	placeholder: undefined,
	/**
	 * True or false if required
	 */
	borderColor: "po-border-slate-300 focus:po-border-mpao-lightblue",
	/**
	 * If you want to add more classes to the internal <input> use this
	 */
	styleClasses: "",

	modelModifiers: () => ({}),
});

function getBorderColor() {
	return props.hasError
		? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600"
		: props.borderColor;
}

let inputType = "currency" === props.type ? "text" : props.type;

const inputValue = ref<string | number | undefined>(undefined);

const emit = defineEmits(["update:modelValue"]);

const handleInput: (event: Event) => void = (event) => {
	let val = (event.target as HTMLInputElement).value;

	inputValue.value = val;

	let outputValue =
		"currency" === props.type ? cleanInputForModalValue(val) : val;

	// console.log(props.modelModifiers);

	emit("update:modelValue", outputValue);
};

const handleBlur: (event: FocusEvent) => void = (event) => {
	formatInput((event.target as HTMLInputElement).value);
};

// onUpdated(() => {
// });

/**
 * This whole mambo jambo is cos input doesn't update if v-modal changes after page load,
 * this bug was introduced after props.type === currency was added and how input value handling was changed after that.
 * So for now this is a walkaround to fix it.
 */
// watch(props, (newVal, oldVal) => {
// 	if ("currency" === props.type && inputValue.value !== oldVal.modelValue) {
// 		inputValue.value = "" + formatMoney(props.modelValue);
// 	} else {
// 		inputValue.value = props.modelValue;
// 	}
// });

// fixed --- above commented code should be removed
const updateInputValue = computed(() => {
	if ("currency" === props.type && inputValue.value !== props.modelValue) {
		return "" + formatMoney(props.modelValue);
	} else {
		return props.modelValue;
	}
});

// Watch for changes in props.modelValue and update inputValue accordingly
watch(updateInputValue, (newVal) => {
	inputValue.value = newVal;
});

const formatInput = (val: string | number) => {
	let formattedInput: string | number = "";
	if ("currency" === props.type) {
		formattedInput = "" + formatMoney(cleanInputForModalValue("" + val));
	} else {
		formattedInput = val;
	}

	inputValue.value = formattedInput;
};

const cleanInputForModalValue = (input: string) => {
	let formattedValue = input.replace(/,/g, ""); // Remove commas

	const decimalIndex = formattedValue.indexOf(".");
	if (decimalIndex !== -1) {
		const decimalPart = formattedValue.substring(decimalIndex + 1);
		if (decimalPart === "00") {
			formattedValue = formattedValue.substring(0, decimalIndex); // Remove decimal part if it's "00"
		}
	}

	return formattedValue;
};

// initial page load if modalValue is passed, format it
if ("currency" === props.type) {
	formatInput(props.modelValue);
} else {
	inputValue.value = props.modelValue;
}

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}
});
</script>
