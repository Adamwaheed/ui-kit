<template>
	<span>
		<!-- <svg
			class="po-inline-block po-relative -po-bottom-1"
			:class="[symbolWidth, symbolFillColor]"
			viewBox="0 0 855 545"
			xmlns="http://www.w3.org/2000/svg"
			xml:space="preserve"
		>
			<path
				d="M0-39.06c-5.735-2.868-7.581-5.385-7.581-11.833 0-7.073 4.094-12.315 11.368-12.315 3.46 0 10.057 1.753 19.883 5.259l26.895-14.024a20832.52 20832.52 0 0 0 22.282-11.626c1.2-.922 2.538-1.383 4.06-1.383 5.352 0 8.488 3.044 9.457 9.088.185 1.061.277 2.029.277 2.814 0 2.168-2.261 4.659-6.735 7.427-17.484 8.027-28.833 13.609-34.092 16.792 8.027 1.891 14.163 4.613 18.406 8.212 2.888 4.377 4.056 12.251.212 16.282-3.333 3.495-7.883 4.452-13.655 2.952-9.848-2.558-19.273-5.071-28.948-8.345-.689.453-5.449 4.494-9.747 7.41 6.186 1.889 11.595 3.912 15.447 7.832 4.031 4.104 3.888 12.169.012 16.226-3.336 3.492-7.888 4.475-13.655 2.953C7.935 3.138 3.968 2.077 2.03 1.57-2.952.186-8.488-1.521-14.623-3.597-33.999 9.689-50.855 20.568-61.477 26.867c-19.64 11.646-33.676 17.902-42.073 18.776-2.675.279-5.582-1.107-8.627-4.151-4.243-4.245-6.366-10.104-6.366-17.577 0-4.798 3.137-7.196 9.319-7.196 4.146 0 8.313.83 12.456.83 2.86 0 5.48-.15 7.566-1.061 9.645-4.215 16.852-8.05 21.912-10.98C-58.004.134-46.446-7.49-37.681-12.897c-2.722-1.799-4.954-3.863-5.453-5.001-2.91-6.648-.787-14.936 6.663-17.815 2.255-.871 5.607-1.144 7.994-.696 3.977.748 10.364 3.195 17.57 5.767L0-39.06Z"
				transform="translate(493.929 354.092) scale(4.16667)"
			></path>
		</svg> -->
		<span v-if="null !== amount">{{ formatNumber(amount) }}</span>
	</span>
</template>

<script lang="ts">
export default {
	name: "Rufiyaa",
};
</script>
<script setup lang="ts">
interface Props {
	symbolWidth?: string;
	symbolFillColor?: string;
	amount?: number | string | null;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Rufiyaa symbol width in tailwind w-[x] default w-3
	 */
	symbolWidth: "po-w-3",
	/**
	 * Rufiyaa symbol fill-color
	 */
	symbolFillColor: "po-fill-current",
	/**
	 * Amount
	 */
	amount: null,
});

function formatNumber(num: number | string) {
	const parsedNum =
		typeof num === "string" ? parseFloat(num.replace(/,/g, "")) : num;
	if (isNaN(parsedNum)) return "";

	const formattedNum = parsedNum.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return formattedNum;
}
</script>
