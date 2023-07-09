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
		</dl>
	</div>
</template>

<script>
export default {
	name: "PoDescriptionList",
};
</script>
<script setup>
defineProps({
	/**
	 * Items to display in the list.
	 */
	items: {
		type: Array,
		default: null,
	},
	striped: {
		type: Boolean,
		default: false,
	},
	columns: {
		type: Boolean,
		default: true,
	},
});

const emit = defineEmits(["button-click"]);
</script>
