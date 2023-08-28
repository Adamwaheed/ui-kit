<template>
	<div>
		<dl
			:class="[
				'po-description-list',
				{ 'po-divide-y po-divide-slate-200': !striped },
				{ striped: striped },
				{ 'no-col': !columns },
			]"
		>
			<!-- 
                @slot Optionally you can pass data into description list through a slot
             -->
			<template v-if="!loading">
				<slot name="content">
					<div v-for="item in items">
						<dt>{{ item.title }}</dt>
						<dd class="">
							<span class="po-grow">{{ item.description }}</span>
							<!--
															Emits the button action when it’s clicked, You can listen to it and switch accordingly.
															@event button-click
													-->
							<span
								class="po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer"
								v-if="undefined !== item.action"
								@click="$emit('button-click', item.action)"
								>{{
									typeof item.action === "string"
										? item.action
										: item.action.label
								}}</span
							>
						</dd>
					</div>
				</slot>
			</template>
			<template v-else>
				<div v-for="n in itemsCount">
					<dt>
						<span class="po-block po-py-[6px]">
							<span
								class="po-block po-h-2 loading-placeholder po-rounded-full"
								:style="{ width: randomWidth() + '%' }"
							></span>
						</span>
					</dt>
					<dd>
						<span class="po-block po-py-[6px] po-w-full">
							<span
								class="po-block po-h-2 loading-placeholder po-rounded-full"
								:style="{ width: randomWidth() + '%' }"
							></span>
						</span>
					</dd>
				</div>
			</template>
		</dl>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoDescriptionList",
};
</script>
<script setup lang="ts">
import { computed, watch, ref, toRefs, onMounted } from "vue";

interface ActionObject {
	label: string;
	[key: string]: any;
}

interface Item {
	title: string;
	description: string;
	action?: string | ActionObject;
}

interface Props {
	items?: Item[] | null;
	striped?: boolean;
	columns?: boolean;
	itemsCount?: number | undefined;
	isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Items to display in the list.
	 */
	items: null,
	/**
	 * Add stripes
	 */
	striped: false,
	/**
	 * Display as columns,,, defautlt true
	 */
	columns: true,
	/**
	 * Number of items the list will have.. used for loading purposes. default 4
	 */
	itemsCount: 4,
	/**
	 * Is loading state true or false
	 */
	isLoading: false,
});

const emit = defineEmits(["button-click"]);

const { isLoading } = toRefs(props);
const loading = ref(false);

watch(isLoading, () => {
	checkIfLoading();
});

onMounted(() => {
	checkIfLoading();
});

function checkIfLoading() {
	loading.value = isLoading.value;
}

function randomWidth() {
	return Math.floor(Math.random() * 41) + 40; // Generates a random number between 60 and 100
}
</script>
