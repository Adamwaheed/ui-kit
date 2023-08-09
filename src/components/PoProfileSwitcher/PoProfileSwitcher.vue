<template>
	<Popover v-slot="{ open }">
		<div>
			<PopoverButton class="po-flex po-items-center po-outline-none">
				<span
					v-if="!orgLogo"
					class="po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
					>{{ currentProfile.name }}</span
				>
				<span
					v-if="orgLogo"
					class="po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
				>
					<img class="po-h-8" :src="orgLogo" alt="" />
				</span>
				<div
					:class="[
						{
							'po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md':
								orgLogo,
						},
					]"
				>
					<div
						:class="[
							{ 'text-opacity-90': open },
							{
								'po-w-10 po-h-10': !orgLogo,
							},
							{ 'po-w-8 po-h-8': orgLogo },
						]"
						class="po-shrink-0 po-select-none po-rounded-full po-bg-white/10 po-flex po-items-center po-justify-center genie-effect po-z-50"
					>
						<img
							v-if="userAvatar"
							class="po-rounded-full po-border po-border-white"
							:src="userAvatar"
							:alt="currentProfile.name"
						/>
						<span class="po-text-xs po-text-white po-font-semibold" v-else>{{
							currentProfile.initials
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
					class="po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center"
				>
					<div class="po-pb-5">
						<img
							v-if="userAvatar"
							class="po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden"
							:src="userAvatar"
							alt=""
						/>
						<span
							v-if="userObject?.name"
							class="po-text-base po-text-slate-600 po-font-medium po-block"
							:class="[{ 'po-mt-4': userAvatar }]"
							>{{ userObject?.name }}</span
						>
						<span
							v-if="userObject?.name"
							class="po-block po-text-sm po-text-slate-400 po-italic"
						>
							<span v-if="currentProfile.name === userObject?.name">Self</span>
							<span v-else>User at {{ currentProfile.name }}</span>
						</span>
					</div>
					<div
						class="po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200"
					></div>
					<div class="po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto">
						<a
							v-for="(profile, index) in profilesList"
							href="#"
							@click.prevent="handleProfileClick(profile)"
							class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50"
							:class="[
								{
									' po-bg-white': !profile.current,
								},
								{
									' po-bg-blue-50 po-shadow-sm': profile.current,
								},
							]"
							role="button"
							:key="index"
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
									v-if="profile.identifier"
									class="po-text-left po-block po-text-xs po-text-slate-400"
									>{{ profile.identifier }}</span
								>
							</span>
						</a>
					</div>
					<div
						class="po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200"
					></div>
					<!--
							Emits profile object value when profile is clicked, emits 'current-profile' when current profile link is clicked, emits 'logout' when logout button is clicked
							@event button-click
					-->
					<div class="md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2">
						<a
							href="#"
							@click.prevent="$emit('button-click', 'current-profile')"
							class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out"
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
							class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out"
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
		</div>
	</Popover>
</template>

<script lang="ts">
export default {
	name: "PoProfileSwitcher",
};
</script>
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
	UserIcon,
	BriefcaseIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/vue/24/outline";
import {
	computed,
	ref,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	watch,
	toRefs,
} from "vue";
import type { UserObject } from "../../../types/UserObject";

interface Props {
	userObject: UserObject | null;
	avatar?: string;
	logo?: string;
}

const props = withDefaults(defineProps<Props>(), {
	userObject: null,
	avatar: "",
	logo: "",
});

const emit = defineEmits(["button-click"]);

function handleProfileClick(obj: object) {
	emit("button-click", obj);
}
const currentProfile = ref({
	name: "",
	initials: "",
	image: "",
});

/**
 * Helpers
 */

function nameToInisitals(name: string | null): string {
	return name
		? name
				.match(/\b[A-Z]/g)
				?.join("")
				?.substring(0, 2) ?? ""
		: "";
}

const profilesList = computed(() => {
	const profiles = [];
	const transactingAs = props.userObject?.transacting_as_organisation;
	const profileName = transactingAs?.name || props.userObject?.name;
	const profileImage = transactingAs?.logo || props.userObject?.avatar;

	currentProfile.value = {
		name: profileName,
		initials: nameToInisitals(profileName),
		image: profileImage,
	};

	profiles.push({
		id: props.userObject?.id,
		entity_id: props.userObject?.entity_id,
		name: props.userObject?.name,
		identifier: null,
		organisation_uuid: null,
	});

	if (props.userObject?.organisations?.length > 0) {
		profiles.push(...props.userObject?.organisations);
	}

	profiles.forEach((profile) => {
		profile.current =
			transactingAs &&
			Object.keys(transactingAs).length > 0 &&
			profile.entity_id === transactingAs.entity_id;
	});

	if (props.userObject?.transacting_as_organisation === null) {
		profiles[0].current = true;
	}

	return profiles;
});

const userAvatar = ref<string | null>(null);
const orgLogo = ref<string | null>(null);

const { avatar, logo } = toRefs(props);

watch(avatar, () => {
	userAvatar.value = avatar.value;
});
watch(logo, () => {
	orgLogo.value = logo.value;
});

onBeforeMount(() => {
	// console.log("beforeMount", profilesList.value);
	let one = profilesList.value;
});
onMounted(() => {
	// console.log("mounted", profilesList.value);
	let two = profilesList.value;
});
onBeforeUpdate(() => {
	// console.log("beforeUpdate", profilesList.value);
	let three = profilesList.value;
});
onUpdated(() => {
	// console.log("updated", profilesList.value);
	let four = profilesList.value;

	// userAvatar.value = props.userObject?.avatar;
});
</script>
