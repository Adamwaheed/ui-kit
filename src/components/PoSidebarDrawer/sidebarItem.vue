<template>
	<li v-if="item">
		<!--
			Emits the button url when it’s clicked
			@event button-click
		-->
		<span>
			<PoTooltip :text="genToolTip()" placement="right" strategy="fixed">
				<button
					v-if="!item.disabled"
					@click="sidebarItemClick(item.name || item.url)"
					class="po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-all po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0"
					:class="[
						{
							'po-text-mpao-lightblue po-bg-slate-100 hover:po-bg-slate-100/50':
								item.url == currRoute,
						},
						{
							'po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100':
								item.url !== currRoute,
						},
						{ 'po-justify-left': !hideSidebarItemLabel },
						{ 'po-justify-center': hideSidebarItemLabel },
					]"
				>
					<span
						class="po-shrink-0"
						:class="[
							{
								'po-w-5 po-h-5': type === 'tab',
							},
							{
								'po-w-4': type !== 'tab',
							},
						]"
					>
						<template v-if="type === 'app'">
							<span v-html="item.icon" class="po-text-slate-600 po-w-5"></span>
						</template>
						<template v-else>
							<component
								:is="item.icon"
								class="po-stroke-2"
								:class="[
									{
										'po-stroke-current group-hover:po-stroke-mpao-orange':
											item.url !== currRoute,
									},
									{
										'po-stroke-mpao-orange': item.url == currRoute,
									},
									{
										'po-w-5 po-h-5': type === 'tab',
									},
									{
										'po-w-4': type !== 'tab',
									},
								]"
							/>
						</template>
					</span>
					<span
						class="po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out"
						:class="[
							{ 'po-opacity-1': sidebarOpen },
							{ 'po-opacity-0': !sidebarOpen },
							{ 'po-hidden': hideSidebarItemLabel },
						]"
						>{{ item.name || item.label }}</span
					>
				</button>
			</PoTooltip>
		</span>
	</li>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from "../../../types/HeroIcon";
import { PoTooltip } from "../";

interface Item {
	label?: string;
	url?: string;
	name?: string;
	current?: boolean;
	disabled?: boolean;
	icon?: FunctionalComponent | string;
}
interface Props {
	item: Item | null;
	sidebarOpen: boolean;
	hideSidebarItemLabel: boolean;
	currRoute: string;
	type?: "app" | "tab";
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * App API code
	 */
	item: null,
	sidebarOpen: true,
	hideSidebarItemLabel: false,
	currRoute: "",
	type: "tab",
});

const emit = defineEmits(["item-click"]);

function sidebarItemClick(action: string | undefined = "") {
	const { type } = props;
	emit("item-click", {
		actionType: type === "tab" ? "button-click" : "app-click",
		action: action,
	});
}

function genToolTip(): string {
	// const tip = props.item?.label || props.item?.name || "";
	const tip = props.item?.name || props.item?.label || "";
	return !props.sidebarOpen ? tip : "";
}
</script>
