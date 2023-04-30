<template>
	<div class="po-flex po-pl-5">
		<div class="po-shrink-0 po-flex po-flex-col">
			<div class="po-w-[2px] po-shrink-0 po-h-10"></div>
			<div
				class="
					po-bg-gradient-to-t
					po-from-orange-400
					po-via-red-300
					po-to-blue-500
					po-w-[2px]
					po-grow
				"
			></div>
			<div class="po-w-[2px] po-shrink-0 po-h-12"></div>
		</div>
		<div class="po-grow po-pl-5 po-pt-5 po-space-y-3">
			<!--
        Emits timeline object when item is clicked
        @event button-click
    -->
			<div
				v-for="item in timeline"
				class="po-px-2 po-pt-2 po-pb-6 po-relative po-group"
				:class="[{ 'po-cursor-pointer': clickable }]"
				@click="$emit('button-click', item)"
			>
				<span
					class="
						po-rounded-full
						po-absolute
						po-flex
						po-items-center
						po-justify-center
					"
					:class="[
						{ 'po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400': item.current },
						{
							'po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400': !item.current,
						},
					]"
				>
					<span
						class="po-rounded-full po-bg-white"
						:class="[
							{ 'po-w-2 po-h-2': item.current },
							{ 'po-w-1 po-h-1': !item.current },
						]"
					>
					</span>
				</span>
				<div>
					<div class="-po-mt-1 po-flex po-space-x-3 po-items-center">
						<h4
							class="po-text-sm po-text-slate-600 po-font-medium"
							:class="[{ 'group-hover:po-text-mpao-lightblue': clickable }]"
						>
							{{ item.label }}
						</h4>
						<span class="po-block po-text-xs po-text-slate-400">{{
							formatDate(item.date)
						}}</span>
					</div>
					<p class="po-text-xs po-text-slate-500 po-pt-1">
						{{ item.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PoTimeline",
};
</script>

<script setup>
import { formatDate } from "../../shared/helper";

defineProps({
	/**
	 * array of timeline items [{current:Boolean, label:String, date:String, description:String}]
	 */
	timeline: {
		type: Array,
		default: null,
	},
	clickable: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["button-click"]);
</script>
