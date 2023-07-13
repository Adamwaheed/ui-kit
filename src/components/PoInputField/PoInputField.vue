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
			<abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
				<InformationCircleIcon class="po-fill-current" />
			</abbr>
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
			@blur="formatInput($event.target.value)"
			:class="[
				'po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default',
				getBorderColor(),
			]"
		/>
		<p
			class="po-mt-2 po-text-sm po-text-slate-500"
			:id="`${id}-description`"
			v-if="null !== message"
		>
			{{ message }}
		</p>
		<p
			class="po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
			:id="`${id}-error`"
			v-if="formHasError && null !== errorMessage"
		>
			<span>{{ errorMessage }}</span>
		</p>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoInputField",
};
</script>
<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/20/solid";
import { watch, ref, toRefs, onMounted } from "vue";
import type { FormEventHandler } from "react";
import formatMoney from "../../shared/helper/FormatMoney";

interface Props {
	modelValue?: string | number;
	label?: string;
	type?: string;
	display?: "vertical" | "horizontal";
	id?: string;
	info?: string | null;
	message?: string | null;
	errorMessage?: string | null;
	hasError?: boolean;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | undefined;
	borderColor?: string;
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
	info: null,
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
});

function getBorderColor() {
	return props.hasError
		? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600"
		: props.borderColor;
}

const { errorMessage } = toRefs(props);

const formHasError = ref(null !== errorMessage.value ? true : false);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});

let inputType = "currency" === props.type ? "text" : props.type;

const inputValue = ref<string | number | undefined>(undefined);

const emit = defineEmits(["update:modelValue"]);

const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
	let val = (event.target as HTMLInputElement).value;

	inputValue.value = val;

	let outputValue =
		"currency" === props.type ? cleanInputForModalValue(val) : val;

	emit("update:modelValue", outputValue);
};

// onUpdated(() => {
// });

/**
 * This whole mambo jambo is cos input doesn't update if v-modal changes after page load,
 * this bug was introduced after props.type === currency was added and how input value handling was changed after that.
 * So for now this is a walkaround to fix it.
 */
watch(props, (newVal, oldVal) => {
	if ("currency" === props.type && inputValue.value !== oldVal.modelValue) {
		inputValue.value = "" + formatMoney(props.modelValue);
	} else {
		inputValue.value = props.modelValue;
	}
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

const uniqueID = ref("");
onMounted(() => {
	if ("" === props.id) {
		uniqueID.value = props.id
			? props.id
			: `${props.label.replace(
					/\s/g,
					""
			  )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9000)}`;
	} else {
		uniqueID.value = props.id;
	}
});
</script>
