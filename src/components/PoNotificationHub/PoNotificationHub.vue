<template>
	<Popover v-slot="{ open }">
		<PopoverButton
			:class="open ? '' : 'text-opacity-90'"
			class="po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"
		>
			<span
				v-if="hasNewNotifications"
				class="po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
			></span>
			<BellIcon class="po-stroke-current" />
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
				class="po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center"
			>
				<ul
					v-if="notifications !== null && notifications.length > 0"
					class="po-space-y-2"
				>
					<!--
                        Emits name when clicked
                        @event button-click
                    -->
					<li
						role="button"
						class="po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100"
						v-for="notification in notifications"
						@click.prevent="$emit('button-click', notification.name)"
					>
						<span class="po-flex po-items-center po-justify-between">
							<p
								class="po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center"
							>
								<span class="po-grow">{{ notification.name }}</span
								><span
									v-if="!notification.seen"
									class="po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
								></span>
							</p>
							<span
								class="po-text-xs po-font-normal po-text-slate-400 po-shrink-0"
								>{{ notification.time }}</span
							>
						</span>
						<span
							class="po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left"
						>
							{{ notification.text }}
						</span>
					</li>
				</ul>
				<span
					v-else
					class="po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
				>
					No notifications to show at the moment. We'll keep you informed.</span
				>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script>
export default {
	name: "PoNotificationHub",
};
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/24/outline";
defineProps({
	/**
	 * List of notifications to display
	 */
	notifications: {
		type: Array,
		default: null,
	},
	/**
	 * True or False if there is/are a new notification/s
	 */
	hasNewNotifications: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["button-click"]);
</script>
