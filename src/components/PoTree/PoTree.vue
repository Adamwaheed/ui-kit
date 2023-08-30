<template>
	<div v-if="node" class="po-space-x-6 po-space-y-2">
		<div
			class="po-inline-flex po-items-center po-space-x-1 po-rounded-md po-shadow-md po-group"
			:class="[
				{ 'po-bg-white': node.children?.length },
				{ 'bg-white/60': !node.children?.length },
			]"
		>
			<div
				class="po-flex po-items-center grow po-p-3 po-pr-2 po-space-x-1"
				:class="[
					{ 'po-cursor-pointer': node.children?.length },
					{
						'po-pr-4':
							!showAddBtn || !showViewBtn || !showEditBtn || !showDeleteBtn,
					},
				]"
				@click="isOpen = !isOpen"
			>
				<template v-if="node.children?.length">
					<ChevronRightIcon
						class="po-w-5 po-h-5 po-fill-slate-600 group-hover:po-fill-mpao-lightblue po-shrink-0 po-transition-all po-duration-75 po-ease-linear"
						:class="[{ 'po-rotate-90': isOpen }]"
					/>
				</template>

				<span
					class="po-grow po-text-sm po-text-slate-600 po-font-semibold po-select-none group-hover:po-text-mpao-lightblue po-transition-colors po-duration-75 po-ease-out"
					>{{ node.name }}</span
				>
			</div>
			<div
				v-if="showAddBtn || showViewBtn || showEditBtn || showDeleteBtn"
				class="po-shrink-0 po-flex po-items-center po-space-x-1 po-pl-2 po-pr-2 po-py-2 po-rounded-r-md po-bg-slate-50"
			>
				<PoTableAction
					v-if="showAddBtn"
					btn-type="icon"
					:btn-icon="PlusIcon"
					label="Add"
					icon-color="po-fill-cyan-600"
					@click="$emit('add-click', node)"
				/>
				<PoTableAction
					v-if="showViewBtn"
					btn-type="view"
					@click="$emit('view-click', node)"
				/>
				<PoTableAction
					v-if="showEditBtn"
					btn-type="edit"
					@click="$emit('edit-click', node)"
				/>
				<PoTableAction
					v-if="showDeleteBtn"
					btn-type="delete"
					@click="$emit('delete-click', node)"
				/>
			</div>
		</div>
		<template v-if="node.children?.length && isOpen">
			<PoTree
				v-for="(childNode, index) in node.children"
				:node="childNode"
				:key="generateKey(childNode.name, index)"
				:show-add-btn="showAddBtn"
				:show-view-btn="showViewBtn"
				:show-edit-btn="showEditBtn"
				:show-delete-btn="showDeleteBtn"
				@view-click="(clickNode) => $emit('view-click', clickNode)"
				@add-click="(clickNode) => $emit('add-click', clickNode)"
				@edit-click="(clickNode) => $emit('edit-click', clickNode)"
				@delete-click="(clickNode) => $emit('delete-click', clickNode)"
			/>
		</template>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoTree",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { ChevronRightIcon, PlusIcon } from "@heroicons/vue/20/solid";
import { PoTableAction, PoTree } from "../";

interface TreeNode {
	name: string;
	children?: TreeNode[];
	[key: string]: any; // Allow additional properties
}

interface Props {
	node: TreeNode | undefined;
	showAddBtn?: boolean;
	showViewBtn?: boolean;
	showEditBtn?: boolean;
	showDeleteBtn?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Node
	 */
	node: undefined,
	/**
	 * Show Add Button
	 */
	showAddBtn: false,
	/**
	 * Show View Button
	 */
	showViewBtn: false,
	/**
	 * Show Edit Button
	 */
	showEditBtn: false,
	/**
	 * Show Delete Button
	 */
	showDeleteBtn: false,
});

const isOpen = ref(false);

// Function to generate a unique key based on node.name and index
const generateKey = (name: string, index: number) => `${name}-${index}`;

const emit = defineEmits([
	"add-click",
	"view-click",
	"edit-click",
	"delete-click",
]);
</script>
