<template>
	<span
		v-if="src"
		class="po-inline-flex po-rounded-full po-bg-cover po-bg-center"
		:class="[imgSize]"
		:style="`background-image:url(${src})`"
	></span>
	<span
		v-else
		class="po-inline-flex po-items-center po-justify-center po-rounded-full"
		:class="[imgSize, randomColorClass]"
		><span class="po-font-semibold po-text-white">{{ shortName }}</span></span
	>
</template>

<script lang="ts">
export default {
	name: "PoAvatar",
};
</script>
<script setup lang="ts">
import { computed } from "vue";

interface Props {
	src?: string;
	name?: string;
	avatarSize?: "xs" | "sm" | "md" | "lg" | "xl";
	bgColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Image source url
	 */
	src: "",
	/**
	 * Name of the person
	 */
	name: "",
	/**
	 * Width of the avatar
	 */
	avatarSize: "sm",
});

const shortName = computed(() => {
	const firstLetter = props.name?.match(/\b[A-Z]/g)?.join("") || "";

	return firstLetter.length === 1 ? props.name.substring(0, 2) : firstLetter;
});

const imgSize = computed(() => {
	if (props.avatarSize === "xs") {
		return "po-h-6 po-w-6 po-text-xs";
	} else if (props.avatarSize === "sm") {
		return "po-h-8 po-w-8 po-text-sm";
	} else if (props.avatarSize === "md") {
		return "po-h-10 po-w-10 po-font-medium";
	} else if (props.avatarSize === "lg") {
		return "po-h-12 po-w-12 po-text-lg";
	} else if (props.avatarSize === "xl") {
		return "po-h-14 po-w-14 po-text-xl";
	} else {
		return null;
	}
});

const colorClasses = [
	"po-bg-green-500",
	"po-bg-yellow-500",
	"po-bg-teal-500",
	"po-bg-cyan-500",
	"po-bg-sky-500",
	"po-bg-blue-500",
	"po-bg-rose-500",
	"po-bg-stone-500",
];

const randomColorClass = computed(() => {
	const randomIndex = Math.floor(Math.random() * colorClasses.length);
	return colorClasses[randomIndex];
});
</script>
