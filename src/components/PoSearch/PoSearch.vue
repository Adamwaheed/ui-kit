<template>
	<div class="po-grow po-flex po-items-end po-space-x-2">
		<div class="po-grow po-w-full po-max-w-lg lg:po-max-w-xs">
			<label for="search" class="po-sr-only">Search</label>
			<div class="po-relative po-group">
				<div
					class="po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-z-10 po-top-[5px]"
				>
					<MagnifyingGlassIcon
						class="po-h-5 po-w-5 po-text-gray-400 group-focus-within:po-text-mpao-lightblue"
						aria-hidden="true"
					/>
				</div>

				<PoInputField
					:placeholder="placeholder"
					styleClasses="po-py-2 po-pl-10 po-pr-3"
					:value="modelValue"
					@input="handleInput"
				/>
			</div>
		</div>
		<!-- 
						search button click
						@event button-click
				-->
		<div class="po-shrink-0">
			<PoButton
				action-type="ghost"
				@click.prevent="$emit('button-click', modelValue)"
			>
				<template v-slot:label>
					<span class="po-flex po-items-center po-space-x-2">
						<FunnelIcon class="-po-ml-1 po-w-4 po-h-4 po-stroke-current" />
						<span>{{ btnLabel }}</span>
					</span>
				</template>
			</PoButton>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoSearch",
};
</script>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/vue/24/outline";
import { useUniqueId } from "../../composables/useUniqueId";
import { PoButton, PoInputField } from "../index";

interface Props {
	modelValue: string | number;
	placeholder?: string;
	btnLabel?: string;
	showBtn?: boolean;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: "",
	/**
	 * Placeholder, screen reader label
	 */
	placeholder: "Search",
	/**
	 * Button Label
	 */
	btnLabel: "Search",
	/**
	 * Show hide card search button
	 */
	showBtn: false,
});

const emit = defineEmits(["update:modelValue", "button-click"]);

const handleInput: (event: Event) => void = (event) => {
	let val = (event.target as HTMLInputElement).value;

	emit("update:modelValue", val);
};

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>("card-search-field");
onMounted(() => {
	// if there is no id set, create a unique random id
	generateUniqueId();
	uniqueID.value = uniqueId.value;
});
</script>
