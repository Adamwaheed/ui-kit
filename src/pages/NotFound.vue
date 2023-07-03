<template>
	<div class="po-grid po-gap-5 po-grid-cols-1">
		<div>
			<PoCard class="po-p-5">
				<template v-slot:content>
					<PoEmpty
						label="Nothing to show"
						description="No show for show, Write a helpful message. Maybe suggest something to do when it's empty."
						:icon="BeakerIcon"
					/>
				</template>
			</PoCard>
		</div>
	</div>
</template>

<script setup>
import { PoCard, PoEmpty } from "../components";
import { BeakerIcon } from "@heroicons/vue/24/outline";
</script>
