<template>
	<Popover v-slot="{ open }">
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
					po-top-16
					po-opacity-0
					po-bg-white
					po-shadow-lg
					po-rounded-b-xl
					po-rounded-t-0
					po-w-[366px]
					po-p-4
					po-border
					po-border-t-0
					po-border-slate-300
					po-pt-5
					po-transition-all
					po-duration-100
					po-ease-linear
					po-max-h-[calc(100vh-85px)]
					po-overflow-y-scroll
					po-text-center
				"
			>
				<div v-for="collection in filterApps">
					<span
						v-if="collection.groupName.length > 0"
						class="
							po-text-sm
							po-font-normal
							po-text-slate-400
							po-select-none
							po-block
							po-text-left
							po-pt-5
						"
						>{{ collection.groupName }}</span
					>
					<ul class="po-grid po-grid-cols-3 po-gap-2 po-py-2">
						<li
							v-for="app in collection.apps"
							class="
								po-bg-white
								hover:po-bg-slate-200
								po-rounded-xl
								po-p-2
								po-transition-colors
								po-duration-150
								po-ease-in
							"
						>
							<a
								:href="app.url"
								class="
									po-flex po-flex-col po-group po-justify-center po-items-center
								"
							>
								<span
									class="
										po-flex
										po-w-14
										po-h-14
										po-items-center
										po-justify-center
										po-duration-100
										po-ease-in-out
										po-overflow-hidden
									"
								>
									<span class="po-w-9" v-html="app.icon"></span>
								</span>
								<span
									class="
										po-text-slate-500 po-font-normal po-text-sm po-text-center
									"
									>{{ app.name }}</span
								>
							</a>
						</li>
					</ul>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
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
const props = defineProps({
	/**
	 * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
	 */
	appList: {
		type: Array,
		default: null,
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
