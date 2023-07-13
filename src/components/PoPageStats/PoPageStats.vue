<template>
	<div v-if="stats !== null" class="po-flex md:po-justify-end">
		<div
			class="po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex"
			:class="padding"
		>
			<!--
            Emits stat object when a stat is clicked
            @event stat-click
        -->
			<div
				v-for="stat in stats"
				class="po-px-4 po-group"
				:class="{ 'po-cursor-pointer': clickable }"
				@click="$emit('stat-click', stat)"
			>
				<span
					class="po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1"
				>
					<span
						v-if="stat.icon"
						class="po-w-5 po-h-5"
						:class="statIconColor(stat)"
						><component :is="stat.icon"
					/></span>
					<span
						class="po-text-xl po-font-medium po-text-slate-600"
						:class="{ 'group-hover:po-text-mpao-lightblue': clickable }"
						>{{ stat.value }}</span
					>
				</span>
				<span
					class="po-text-sm po-text-slate-500 po-block"
					:class="{ 'group-hover:po-text-mpao-lightblue': clickable }"
					>{{ stat.label }}</span
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoPageStats",
};
</script>
<script setup lang="ts">
const props = defineProps({
	/**
	 * Page stats
	 */
	stats: {
		type: Array,
		default: null,
	},
	/**
	 * True or false if it's clickable
	 */
	clickable: {
		type: Boolean,
		default: true,
	},
	/**
	 * Block padding. default: py-5 px-2
	 */
	padding: {
		type: String,
		default: "po-py-5 po-px-2",
	},
});

const emit = defineEmits(["stat-click"]);

function statIconColor(stat) {
	return stat.iconColor ? stat.iconColor : "po-slate-600";
}
</script>
