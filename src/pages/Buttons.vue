<template>
	<PoPageTitle label="Buttons" />
	<PoCard class="po-p-5" title="PoButton">
		<template v-slot:content>
			<div class="po-flex po-items-center po-space-x-5 po-flex-wrap">
				<PoButton :is-loading="true" type="button" label="Button" />
				<PoTooltip>
					<PoButton type="button" label="Button" />
				</PoTooltip>
				<PoButton type="submit" label="Submit" />
				<PoButton type="link" label="Link" to="/home" />
				<PoButton type="button" label="Button Disabled" :disabled="true" />
				<PoButton type="submit" label="Submit Disabled" :disabled="true" />
				<PoButton
					type="button"
					label="Button"
					:override-colors="true"
					size="sm"
					class="po-bg-cyan-600 hover:po-bg-cyan-700 po-text-white"
				/>
				<PoButton
					type="button"
					label="Button"
					:override-colors="true"
					size="lg"
					class="po-bg-rose-600 hover:po-bg-rose-700 po-text-white"
				/>
				<PoButton @click="handleDialClick" to="a">
					<template v-slot:label>
						<span class="po-flex po-items-center po-space-x-2">
							<PhoneIcon class="po-w-4 po-h-4 po-fill-current" />
							<span>Dial</span>
						</span>
					</template>
				</PoButton>
				<PoButton type="simple" label="I am a button" to="/home" />
				<PoButton type="simple" to="/home" @button-click="handleButtonClick">
					<template v-slot:label>
						<span class="po-flex po-items-center po-space-x-1">
							<BoltIcon class="po-w-4 po-h-4 po-stroke-current" />
							<span>File a dispute.</span>
						</span>
					</template>
				</PoButton>
				<PoButton type="button" label="Danger" action-type="danger" />
				<PoButton type="button" label="Ghost" action-type="ghost" />
				<PoButton type="button" label="Success" action-type="success" />
			</div>
		</template>
	</PoCard>
</template>

<script setup>
import { PoPageTitle, PoCard, PoButton, PoTooltip } from "../components";

import { PhoneIcon, BoltIcon } from "@heroicons/vue/24/outline";

function handleButtonClick(to) {
	alert(to);
}

function handleDialClick(to) {
	alert(to);
}
</script>
