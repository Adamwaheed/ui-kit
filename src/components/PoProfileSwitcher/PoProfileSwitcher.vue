<template>
	<Popover v-slot="{ open }">
		<PopoverButton class="po-flex po-items-center po-outline-none">
			<span
				v-if="'' === currentProfileLogo"
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
			<span
				v-if="'' !== currentProfileLogo"
				class="
					po-px-3
					po-bg-gradient-to-br
					po-from-slate-50
					po-to-blue-100
					po-py-1
					po-rounded-l-md
					po-w-[100px]
					po-flex
					po-items-center
					po-justify-center
					po-text-center
				"
			>
				<img class="po-h-8" :src="currentProfileLogo" alt="" />
			</span>
			<div
				:class="[
					{
						'po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md':
							'' !== currentProfileLogo,
					},
				]"
			>
				<div
					:class="[
						{ 'text-opacity-90': open },
						{ 'po-w-10 po-h-10': '' === currentProfileLogo },
						{ 'po-w-8 po-h-8': '' !== currentProfileLogo },
					]"
					class="
						po-shrink-0
						po-select-none
						po-rounded-full
						po-bg-[#2e5266]
						po-flex
						po-items-center
						po-justify-center
						genie-effect
						po-z-50
					"
				>
					<img
						v-if="currentUserPicture"
						class="po-rounded-full po-border po-border-white"
						:src="currentUserPicture"
						:alt="currentProfileLabel"
					/>
					<span class="po-text-xs po-text-white po-font-semibold" v-else>{{
						currentProfileLabel
					}}</span>
				</div>
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
					po-z-10
					po-absolute
					po-right-0
					po-top-16
					po-opacity-0
					po-bg-white
					po-shadow-lg
					po-rounded-b-xl
					po-rounded-t-0
					po-w-[366px]
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
						v-if="currentUserPicture"
						class="
							po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden
						"
						:src="currentUserPicture"
						alt=""
					/>
					<span
						v-if="currUserName"
						class="po-text-base po-text-slate-600 po-font-medium po-block"
						:class="[{ 'po-mt-4': currentUserPicture }]"
						>{{ currUserName }}</span
					>
					<span
						v-if="currUserName"
						class="po-block po-text-sm po-text-slate-400 po-italic"
					>
						<span v-if="currentProfileFullLabel === currUserName">Self</span>
						<span v-else
							>{{ currentProfileRole }} at {{ currentProfileFullLabel }}</span
						>
					</span>
				</div>
				<div
					class="
						po-h-[1px]
						po-w-full
						po-bg-gradient-to-l
						po-from-orange-200
						po-via-blue-300
						po-to-blue-200
					"
				></div>
				<div
					class="
						po-space-y-2 po-py-2
						-po-mx-5
						po-px-5 po-max-h-[250px] po-overflow-y-scroll
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
							po-shadow-sm
							po-transition-all
							po-duration-150
							po-ease-out
							hover:po-bg-blue-50
						"
						:class="[
							{
								' po-bg-white': !profile.current,
							},
							{
								' po-bg-blue-50 po-shadow-sm': profile.current,
							},
						]"
						role="button"
					>
						<span class="po-w-5">
							<UserIcon
								v-if="profile.isPersonal"
								:class="[
									'po-stroke-current',
									{ 'po-stroke-mpao-lightblue': profile.current },
								]"
							/>
							<BriefcaseIcon
								v-if="!profile.isPersonal"
								:class="[
									'po-stroke-current',
									{ 'po-stroke-mpao-lightblue': profile.current },
								]"
							/>
						</span>
						<span class="">
							<span class="po-block po-text-sm po-font-normal">{{
								profile.name
							}}</span>
							<span
								v-if="0 !== profile.identifier.length"
								class="po-text-left po-block po-text-xs po-text-slate-400"
								>{{ profile.identifier }}</span
							>
						</span>
					</a>
				</div>
				<div
					class="
						po-h-[2px]
						po-w-full
						po-bg-gradient-to-l
						po-from-orange-200
						po-via-blue-300
						po-to-blue-200
					"
				></div>
				<!--
                    Emits profile object value when profile is clicked, emits 'current-profile' when current profile link is clicked, emits 'logout' when logout button is clicked
                    @event button-click
                -->
				<div class="md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2">
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
							po-bg-slate-50
							hover:po-bg-blue-50
							po-transition-all po-duration-150 po-ease-out
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
							po-bg-slate-50
							hover:po-bg-blue-50
							po-transition-all po-duration-150 po-ease-out
						"
						role="button"
					>
						<span class="po-w-5">
							<ArrowRightOnRectangleIcon class="po-stroke-current" />
						</span>
						<span class="po-text-sm po-font-normal">Logout</span>
					</a>
				</div>
				<div class="po-text-xs po-space-x-3 po-text-center po-pt-3">
					<a href="" class="po-text-slate-500 hover:po-text-mpao-lightblue"
						>Privacy Policy</a
					>
					<a href="" class="po-text-slate-500 hover:po-text-mpao-lightblue"
						>Terms of Service</a
					>
				</div>
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
import { computed, ref, toRefs } from "vue";
const props = defineProps({
	profileSwitcherData: {
		type: Object,
		default: null,
	},
	userObject: {
		type: Object,
		default: null,
	},
});

console.log("pro", props.userObject);

const { userObject } = toRefs(props);

const currentProfileFullLabel = ref("");
const currentProfileLogo = ref("");
const currentProfileRole = ref("");

const currentProfileLabel = computed(() => {
	const currProfile = props.profileSwitcherData.profiles.filter(
		(profile) => profile.current === true
	)[0];
	currentProfileFullLabel.value = currProfile ? currProfile.name : "";
	currentProfileLogo.value = currProfile
		? currProfile.logo
			? currProfile.logo
			: ""
		: "";

	currentProfileRole.value = currProfile
		? currProfile.userRole
			? currProfile.userRole
			: "User"
		: "User";
	return currProfile
		? currProfile.name
				.match(/\b[A-Z]/g)
				.join("")
				.substr(0, 2)
		: "";
});

const currentUserPicture =
	props?.profileSwitcherData?.profiles?.[0]?.profilePic ?? null;

const currUserName = props?.profileSwitcherData?.profiles?.[0]?.name ?? null;

const emit = defineEmits(["button-click"]);
</script>
