<template></template>

<script setup lang="ts">
import type { HeroIcon, AppListItem } from "../../../types/Types";

interface SidebarContentItem {
	label: string;
	url: string;
	icon: HeroIcon;
	disabled?: boolean;
}

interface SidebarContentGroup {
	groupName: string;
	items: SidebarContentItem[];
}

interface Props {
	content: SidebarContentGroup[] | null;
	currRoute?: string;
	hasFeedback?: boolean;
	appsLabel?: string;
	apps?: AppListItem[] | null;
	appCode?: string;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Array of  sidebar menu items
	 */
	content: null,
	/**
	 * Current route path
	 */
	currRoute: "/",
	/**
	 * Show/hide feedback button
	 */
	hasFeedback: false,
	/**
	 * Related apps label. default Related apps
	 */
	appsLabel: "Related apps",
	/**
	 * List of related apps
	 */
	apps: null,
	/**
	 * App API code
	 */
	appCode: "",
});
</script>
