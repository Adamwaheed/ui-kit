<template>
	<div class="sm:po-hidden">
		<label for="tabs" class="po-sr-only">Select a tab</label>
		<select
			id="tabs"
			name="tabs"
			class="po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
			@change="handleTabSelection"
		>
			<option
				v-for="(tab, index) in tabs"
				:key="tab.name"
				:value="index"
				:selected="tab.current"
			>
				{{ tab.name }}
			</option>
		</select>
	</div>
	<div class="po-hidden sm:po-block">
		<!--
        Emits tab object when tab is clicked
        @event button-click
    -->
		<nav class="po-flex po-space-x-4 po-pt-2" aria-label="Tabs">
			<span
				@click="$emit('button-click', tab)"
				role="button"
				v-for="tab in allTabs"
				:key="tab.name"
				:class="[
					tab.current
						? 'po-bg-white po-text-slate-600 po-shadow-md'
						: 'po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue',
					'po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2',
				]"
				:aria-current="tab.current ? 'page' : undefined"
			>
				<component
					v-if="tab.icon"
					:is="tab.icon"
					class="po-w-5 po-h-5"
					:class="[setIconColor(tab)]"
				/>
				<span
					><span>{{ tab.name }}</span
					><span
						v-if="tab.count && tab.count > 0"
						class="po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center"
						:class="[
							tab.current
								? 'po-bg-mpao-orange po-text-white'
								: 'po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white',
						]"
						><span>{{ tab.count }}</span></span
					></span
				>
			</span>
		</nav>
	</div>
</template>

<script>
export default {
	name: "PoTabs",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
	/**
	 * Page title
	 */
	tabs: {
		type: Array,
		default: null,
	},
	/**
	 * Current Tab name
	 */
	currentTab: {
		type: String,
		default: "",
	},
});

const emit = defineEmits(["button-click"]);

function setIconColor(tabObj) {
	return tabObj.iconColor ? tabObj.iconColor : "po-fill-current";
}

const allTabs = computed(() => {
	return props.tabs.map((tab) => {
		if (tab.name === props.currentTab) {
			return { ...tab, current: true };
		} else {
			return { ...tab, current: false };
		}
	});
});

function handleTabSelection(event) {
	const selectedIndex = event.target.value;
	const selectedTab = props.tabs[selectedIndex];
	emit("button-click", selectedTab);
}
</script>
