<template>
	<li
		:class="[
			'po-flex po-px-5',
			{ 'po-justify-end po-items-end po-flex-col': 'first' === item.type },
		]"
	>
		<div
			v-if="'message' !== item.type"
			class="po-flex po-space-x-3 po-items-start"
		>
			<div
				v-if="'first' !== item.type && '' !== item.avatar"
				class="po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100"
				:style="{ 'background-image': `url(${item.avatar})` }"
			></div>
			<div
				:class="[
					{ 'po-pt-1': 'first' !== item.type },
					{
						'po-flex po-justify-end po-items-end po-flex-col':
							'first' === item.type,
					},
				]"
			>
				<span class="po-flex po-items-center po-space-x-2">
					<time
						v-if="'first' === item.type"
						:datetime="item.time"
						class="po-text-xs po-text-slate-400"
						>{{ item.time_human }}</time
					>
					<span class="po-text-sm po-font-medium po-text-slate-600">{{
						item.name
					}}</span>
					<time
						v-if="'second' === item.type"
						:datetime="item.time"
						class="po-text-xs po-text-slate-400"
						>{{ item.time_human }}</time
					>
				</span>
				<div
					:class="[
						'po-mt-2 po-space-y-1',
						{
							'po-flex po-justify-end po-items-end po-flex-col':
								'first' === item.type,
						},
					]"
				>
					<!--
                        @slot Message content goes here.
                    -->
					<slot name="message">
						<div v-for="msg in item.message" class="flex">
							<p
								:class="[
									'po-text-sm po-rounded-xl po-px-4 po-py-2',
									{
										'po-bg-slate-100 po-text-slate-600': 'first' !== item.type,
									},
									{
										'po-bg-mpao-lightblue po-text-sky-50':
											'first' === item.type,
									},
								]"
							>
								{{ msg }}
							</p>
						</div>
					</slot>
					<div class="po-flex po-pt-3 po-flex-wrap po-max-w-sm">
						<!--
                            Emits the button label when it’s clicked, You can listen to it and switch accordingly.
                            @event button-click
                        -->
						<button
							v-for="action in item.actions"
							@click="$emit('button-click', action.label)"
							class="po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
						>
							{{ action.label }}
						</button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="'message' === item.type" class="po-w-full po-text-center">
			<p
				v-for="msg in item.message"
				class="po-inline-block po-text-sm po-italic po-text-slate-500"
			>
				{{ msg }}
				<span class="po-text-lg po-text-slate-300 po-px-3 po-inline-block"
					>&mdash;</span
				>
				<time
					:datetime="item.time"
					class="po-text-xs po-text-slate-400 po-inline-block"
					>{{ item.time_human }}</time
				>
			</p>
		</div>
	</li>
</template>

<script lang="ts">
export default {
	name: "PoChatLogItem",
};
</script>
<script setup lang="ts">
interface Props {
	item: object | null;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	item: null,
});
</script>
