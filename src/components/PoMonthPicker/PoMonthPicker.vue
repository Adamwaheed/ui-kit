<template>
	<Popover class="po-relative">
		<PopoverButton>
			<div
				class="po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm po-w-40 po-flex po-justify-between po-items-center"
			>
				<div><CalendarIcon class="po-w-5 po-text-gray-400" /></div>
				<div>{{ currentMonth.name }} {{ currentyear }}</div>
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
				class="po-absolute po-left-1/2 po-z-10 po-mt-3 po-w-screen po-max-w-sm -po-translate-x-1/2 po-transform po-px-4 sm:po-px-0 lg:po-max-w-3xl"
			>
				<div
					class="po-m-4 po-w-80 po-rounded-md po-border po-bg-white po-p-2 po-shadow-lg"
				>
					<div
						class="po-grid po-grid-cols-3 po-items-center po-gap-1 po-border-b po-p-3"
					>
						<div class="po-text-center" @click="currentyear--">
							<ChevronLeftIcon class="po-w-5" />
						</div>
						<div class="po-text-center">{{ currentyear }}</div>
						<div
							@click="currentyear++"
							class="po-flex po-justify-end po-cursor-pointer"
						>
							<ChevronRightIcon class="po-w-5" />
						</div>
					</div>

					<div class="po-grid po-grid-cols-3 po-items-center po-gap-1 po-p-3">
						<div
							@click="selectMonth(month)"
							v-for="month in months"
							:class="{ 'po-bg-mpao-blue po-text-white': month.selected }"
							class="po-cursor-pointer po-rounded-md po-border po-p-1 po-text-center po-text-sm hover:po-bg-slate-100 hover:po-text-black"
						>
							{{ month.name }}
						</div>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script lang="ts">
export default {
	name: "PoMonthPicker",
};
</script>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { CalendarIcon } from "@heroicons/vue/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
const month_names_short = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
let months = ref([
	{ name: "Jan", selected: false },
	{ name: "Feb", selected: false },
	{ name: "Mar", selected: false },
	{ name: "Apr", selected: false },
	{ name: "May", selected: false },
	{ name: "Jun", selected: false },
	{ name: "Jul", selected: false },
	{ name: "Aug", selected: false },
	{ name: "Sep", selected: false },
	{ name: "Oct", selected: false },
	{ name: "Nov", selected: false },
	{ name: "Dec", selected: false },
]);

const currentyear = ref(new Date().getFullYear());
const d = new Date();
const currentMonth = ref({
	name: month_names_short[d.getMonth()],
	selected: true,
});

onMounted((res) => {
	selectMonth(currentMonth);
});
const selectMonth = (month) => {
	currentMonth.value = month;
	months.value = months.value.map((res) => {
		if (month.name === res.name) {
			return {
				name: res.name,
				selected: true,
			};
		} else {
			return {
				name: res.name,
				selected: false,
			};
		}
	});
};
</script>
