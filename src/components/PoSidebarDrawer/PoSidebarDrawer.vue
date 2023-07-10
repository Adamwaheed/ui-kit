<template>
	<input
		type="checkbox"
		name=""
		class="po-hidden shell-sidebar--toggle"
		role="none"
		id="sidebar-drawer-toggle"
		checked
		aria-checked="true"
		ref="sidebarToggle"
		@click="handleSidebarToggleClick"
	/>
	<aside class="shell-sidebar" :key="sidebarOpen">
		<div class="po-grow">
			<div
				v-for="(group, groupIndex) in content"
				:key="`sidebar-group-${groupIndex}`"
			>
				<Disclosure v-slot="{ open }" :defaultOpen="true">
					<DisclosureButton
						v-if="group.groupName"
						:class="open ? '' : 'po-mb-3'"
						class="shell-sidebar--section po-w-full po-text-left"
					>
						{{ group.groupName }}
					</DisclosureButton>
					<transition
						enter-active-class="po-transition po-duration-100 po-ease-out"
						enter-from-class="po-transform po-scale-95 po-opacity-0"
						enter-to-class="po-transform po-scale-100 po-opacity-100"
						leave-active-class="po-transition po-duration-75 po-ease-out"
						leave-from-class="po-transform po-scale-100 po-opacity-100"
						leave-to-class="po-transform po-scale-95 po-opacity-0"
					>
						<DisclosurePanel>
							<ul class="shell-sidebar--menu">
								<li v-for="item in group.items" :key="item.label">
									<!--
                      Emits the button url when it’s clicked
                      @event button-click
                  -->
									<span>
										<PoTooltip
											:text="genToolTip(item.label)"
											placement="right"
											strategy="fixed"
										>
											<button
												v-if="!item.disabled"
												@click="sidebarItemClick('button-click', item.url)"
												:class="[
													'shell-sidebar--item',
													{ active: item.url == currRoute },
												]"
											>
												<span class="shell-sidebar--icon">
													<component
														:is="item.icon"
														class="po-stroke-current po-w-5 po-h-5 po-stroke-2"
													/>
												</span>
												<span
													class="shell-sidebar--label po-font-medium po-text-left"
													>{{ item.label }}</span
												>
											</button>
										</PoTooltip>
									</span>
								</li>
							</ul>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
			<div v-if="filterApps.length > 0">
				<Disclosure v-slot="{ open }" :defaultOpen="true">
					<DisclosureButton
						v-if="appsLabel"
						:class="open ? '' : 'po-mb-3'"
						class="shell-sidebar--section po-w-full po-text-left"
					>
						{{ appsLabel }}
					</DisclosureButton>
					<transition
						enter-active-class="po-transition po-duration-100 po-ease-out"
						enter-from-class="po-transform po-scale-95 po-opacity-0"
						enter-to-class="po-transform po-scale-100 po-opacity-100"
						leave-active-class="po-transition po-duration-75 po-ease-out"
						leave-from-class="po-transform po-scale-100 po-opacity-100"
						leave-to-class="po-transform po-scale-95 po-opacity-0"
					>
						<DisclosurePanel>
							<ul class="shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0">
								<li v-for="(app, index) in filterApps">
									<!-- <button @click="$emit('button-click', 'feedback-button')" class="shell-sidebar--item" title="Go to feedback"> -->
									<PoTooltip
										:text="genToolTip(app.name)"
										placement="right"
										strategy="fixed"
									>
										<button
											@click="sidebarItemClick('app-click', app.name)"
											class="shell-sidebar--item"
											:class="[{ active: app.current }]"
											title="Go to feedback"
										>
											<span class="shell-sidebar--icon">
												<span
													v-html="app.icon"
													class="po-text-slate-600 po-w-5"
												></span>
											</span>
											<span
												class="shell-sidebar--label po-font-medium po-text-left"
												>{{ app.name }}</span
											>
										</button>
									</PoTooltip>
								</li>
							</ul>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
		</div>
		<ul
			v-if="hasFeedback"
			class="shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
		>
			<li>
				<!-- <button @click="$emit('button-click', 'feedback-button')" class="shell-sidebar--item" title="Go to feedback"> -->
				<FeedbackForm />
			</li>
		</ul>
	</aside>
</template>

<script>
export default {
	name: "PoSidebarDrawer",
};
</script>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ref, computed, onMounted } from "vue";
import FeedbackForm from "./feedbackForm.vue";
import { PoTooltip } from "..";

const props = defineProps({
	/**
	 * Array of  sidebar menu items
	 */
	content: {
		type: Array,
		default: null,
	},
	/**
	 * Current route path
	 */
	currRoute: {
		type: String,
		default: "/",
	},
	/**
	 * Show/hide feedback button
	 */
	hasFeedback: {
		type: Boolean,
		default: false,
	},
	/**
	 * Related apps label. default Related apps
	 */
	appsLabel: {
		type: String,
		default: "Related apps",
	},
	/**
	 * List of related apps
	 */
	apps: {
		type: Array,
		default: null,
	},
	/**
	 * App API code
	 */
	appCode: {
		type: String,
		default: "",
	},
});

const emit = defineEmits(["button-click", "app-click"]);

const filterApps = computed(() => {
	let newAppList = [];
	const currentAppObj = props.apps.filter((x) => x.code == props.appCode)[0];
	if (currentAppObj) {
		let related = props.apps.filter((x) =>
			currentAppObj.related.includes(x.code)
		);
		related.forEach((x) => {
			newAppList.push(x);
		});
	}
	return newAppList;
});

// Get a reference to the checkbox element using `ref`
const sidebarToggle = ref(null);
const sidebarOpen = ref(null);

// Define a function to uncheck the checkbox
function toggleSidebar() {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 1024) {
		sidebarToggle.value.checked = !sidebarToggle.value.checked;
		sidebarOpen.value = sidebarToggle.value.checked;
	}
}

onMounted(() => {
	sidebarOpen.value = sidebarToggle.value.checked;
});

function sidebarItemClick(emitName, action) {
	emit(emitName, action);
	toggleSidebar();
}

function handleSidebarToggleClick() {
	// console.log("I'm toggling");
	sidebarOpen.value = sidebarToggle.value.checked;
}

function genToolTip(tip) {
	return !sidebarOpen.value ? tip : "";
}
</script>
