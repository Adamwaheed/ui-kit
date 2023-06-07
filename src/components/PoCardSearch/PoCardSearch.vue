<template>
	<div class="po-py-3 po-px-5 po-border-b po-border-slate-200">
		<form class="po-flex po-w-full md:po-ml-0" action="#" method="GET">
			<label for="search-field" class="po-sr-only">{{ placeholder }}</label>
			<div
				class="po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out"
			>
				<div
					class="po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center"
				>
					<MagnifyingGlassIcon class="po-h-5 po-w-5 po-flex-shrink-0" />
				</div>
				<!-- 
						v-model update
						@event update:modelValue
				-->
				<input
					name="search-field"
					id="desktop-search-field"
					:placeholder="placeholder"
					:value="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
					class="po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0"
					type="search"
				/>
				<!-- 
						search button click
						@event button-click
				-->
				<button
					class="po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out"
					:class="[
						{ 'po-bg-mpao-lightblue po-text-white': '' !== modelValue },
						{ 'po-bg-slate-100 po-text-slate-400': '' === modelValue },
					]"
					:disabled="'' === modelValue"
					@click.prevent="$emit('button-click', modelValue)"
				>
					Search
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "PoCardSearch",
};
</script>
<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

defineProps({
	/**
	 * Model value
	 */
	modelValue: {
		type: [String, Number],
		default: "",
	},
	/**
	 * Placeholder, screen reader label
	 */
	placeholder: {
		type: String,
		default: "Search",
	},
});

const emit = defineEmits(["update:modelValue", "button-click"]);
</script>
