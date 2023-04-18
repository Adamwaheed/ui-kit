<template>
	<Popover v-if="!justApps" v-slot="{ open }">
		<PopoverButton
			:class="open ? '' : 'po-text-opacity-90'"
			class="
				po-block po-w-6 po-text-slate-100
				genie-effect
				po-z-50 po-outline-none
			"
		>
			<Squares2X2Icon />
		</PopoverButton>
		<transition
			enter-active-class="po-transition po-duration-200 po-ease-out"
			enter-from-class="po-translate-y-1 po-opacity-0"
			enter-to-class="po-translate-y-0 po-opacity-100"
			leave-active-class="po-transition po-duration-150 po-ease-in"
			leave-from-class="po-translate-y-0 po-opacity-100"
			leave-to-class="po-translate-y-1 po-opacity-0"
		>
			<PopoverPanel
				class="
					po-z-10
					po-absolute
					po-right-0
					po-top-[3.6rem]
					po-opacity-0
					po-bg-white
					po-shadow-lg
					po-rounded-xl
					po-w-[366px]
					po-p-4
					po-border
					po-border-slate-300
					po-pt-5
					po-transition-all
					po-duration-100
					po-ease-linear
					po-max-h-[calc(100vh-85px)]
					po-overflow-y-auto
					po-text-center
				"
			>
				<AppList :list="filterApps" :open-in-new-tab="openInNewTab" />
			</PopoverPanel>
		</transition>
	</Popover>
	<AppList v-else :list="filterApps" :open-in-new-tab="openInNewTab" />
</template>

<script>
export default {
	name: "PoAppTray",
};
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Squares2X2Icon } from "@heroicons/vue/24/outline";
import { ref, computed } from "vue";
import AppList from "./appList.vue";

const props = defineProps({
	/**
	 * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
	 */
	appList: {
		type: Array,
		default: null,
	},
	/**
	 * if true, it shows just the apps list, no popover menu
	 */
	justApps: {
		type: Boolean,
		default: false,
	},
	openInNewTab: {
		type: Boolean,
		default: false,
	},
});

const groups = ["", "Internal"];

const filterApps = computed(() => {
	let newAppList = [];
	groups.forEach((element) => {
		let filtered = props.appList.filter((x) => x.group == element);
		if (filtered.length > 0) {
			newAppList.push({
				groupName: element,
				apps: filtered,
			});
		}
	});
	return newAppList;
});
</script>
