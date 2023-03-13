<template>
	<Popover v-slot="{ open }">
		<PopoverButton class="po-flex po-items-center po-outline-none">
			<span
				class="
					po-hidden
					lg:po-block
					po-text-sky-50
					po-text-sm
					po-shrink-0
					po-pr-3
					po-truncate
					po-max-w-[140px]
					po-overflow-hidden
				"
				>{{ currentProfileFullLabel }}</span
			>
			<div
				:class="open ? '' : 'text-opacity-90'"
				class="
					po-select-none
					po-rounded-full
					po-w-10
					po-h-10
					po-bg-[#2e5266]
					po-flex
					po-items-center
					po-justify-center
					genie-effect
					po-z-50
				"
			>
				<span class="po-text-xs po-text-white po-font-semibold">{{
					currentProfileLabel
				}}</span>
			</div>
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
					po-space-y-1
					po-z-10
					po-absolute
					po-right-0
					po-top-16
					po-opacity-0
					po-bg-white
					po-shadow-lg
					po-rounded-b-xl
					po-rounded-t-0
					po-w-96
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
				<div class="po-pb-5">
					<img
						class="
							po-w-20
							po-h-20
							po-mx-auto
							po-rounded-full
							po-overflow-hidden
							po-saturate-50
							po-opacity-90
						"
						src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
						alt=""
					/>
					<span
						class="po-text-sm po-text-slate-600 po-font-medium po-block po-mt-4"
						>Claire Hussain</span
					>
					<span class="po-block po-text-xs po-text-slate-500 po-italic"
						>Manager at Jacobs Cement Pvt Ltd</span
					>
				</div>
				<div
					class="
						po-space-y-2
						po-pt-2
						po-border-t
						po-border-slate-200
						po-max-h-[190px]
						po-overflow-y-scroll
					"
				>
					<a
						v-for="profile in profileSwitcherData.profiles"
						href="#"
						@click.prevent="$emit('button-click', profile)"
						class="
							po-flex
							po-items-center
							po-space-x-3
							po-p-3
							po-text-slate-600
							po-rounded-lg
							po-bg-white
							hover:po-bg-slate-100
							po-border po-border-slate-100
						"
						role="button"
					>
						<span class="po-w-5">
							<UserIcon
								v-if="profile.isPersonal"
								:class="[
									'po-stroke-current',
									{ 'po-stroke-mpao-orange': profile.current },
								]"
							/>
							<BriefcaseIcon
								v-if="!profile.isPersonal"
								:class="[
									'po-stroke-current',
									{ 'po-stroke-mpao-orange': profile.current },
								]"
							/>
						</span>
						<span class="po-flex po-flex-col po-space-y-1">
							<span class="po-text-sm po-font-normal">{{ profile.name }}</span>
							<span
								v-if="0 !== profile.identifier.length"
								class="po-text-xs po-text-slate-400"
								>{{ profile.identifier }}</span
							>
						</span>
					</a>
				</div>
				<!--
                    Emits profile object value when profile is clicked, emits 'current-profile' when current profile link is clicked, emits 'logout' when logout button is clicked
                    @event button-click
                -->
				<!-- <a
					v-for="profile in profileSwitcherData.profiles"
					href="#"
					@click.prevent="$emit('button-click', profile)"
					class="
						po-flex
						po-items-center
						po-space-x-3
						po-p-3
						po-text-slate-600
						po-rounded-lg
						po-bg-white
						hover:po-bg-slate-100
						po-border po-border-slate-100
					"
					role="button"
				>
					<span class="po-w-5">
						<UserIcon
							v-if="profile.isPersonal"
							:class="[
								'po-stroke-current',
								{ 'po-stroke-mpao-orange': profile.current },
							]"
						/>
						<BriefcaseIcon
							v-if="!profile.isPersonal"
							:class="[
								'po-stroke-current',
								{ 'po-stroke-mpao-orange': profile.current },
							]"
						/>
					</span>
					<span class="po-flex po-flex-col po-space-y-1">
						<span class="po-text-sm po-font-normal">{{ profile.name }}</span>
						<span
							v-if="0 !== profile.identifier.length"
							class="po-text-xs po-text-slate-400"
							>{{ profile.identifier }}</span
						>
					</span>
				</a>
				<div class="md:po-grid po-grid-cols-2 po-space-x-1">
					<a
						href="#"
						@click.prevent="$emit('button-click', 'current-profile')"
						class="
							po-flex
							po-items-center
							po-space-x-3
							po-p-3
							po-text-slate-600
							po-rounded-lg
							po-bg-white
							hover:po-bg-slate-100
							po-border po-border-slate-100
						"
						role="button"
					>
						<span class="po-w-5">
							<UserIcon class="po-stroke-current" />
						</span>
						<span class="po-text-sm po-font-normal">Profile</span>
					</a>
					<a
						href="#"
						@click.prevent="$emit('button-click', 'logout')"
						class="
							po-flex
							po-items-center
							po-space-x-3
							po-p-3
							po-text-slate-600
							po-rounded-lg
							po-bg-white
							hover:po-bg-slate-100
							po-border po-border-slate-100
						"
						role="button"
					>
						<span class="po-w-5">
							<ArrowRightOnRectangleIcon class="po-stroke-current" />
						</span>
						<span class="po-text-sm po-font-normal">Logout</span>
					</a>
				</div> -->
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script>
export default {
	name: "PoProfileSwitcher",
};
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
	UserIcon,
	BriefcaseIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
const props = defineProps({
	profileSwitcherData: {
		type: Object,
		default: null,
	},
});

const currentProfileFullLabel = ref("");

const currentProfileLabel = computed(() => {
	const currProfile = props.profileSwitcherData.profiles.filter(
		(profile) => profile.current === true
	)[0];
	currentProfileFullLabel.value = currProfile ? currProfile.name : "";
	return currProfile
		? currProfile.name
				.match(/\b[A-Z]/g)
				.join("")
				.substr(0, 2)
		: "";
});
</script>
