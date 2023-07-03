<template>
	<div class="po-space-y-5">
		<div>
			<PoCard class="po-p-5" title="PoInputField">
				<template v-slot:content>
					<div
						class="po-pt-5 po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-5"
					>
						<PoInputField
							label="Input Field Label"
							id="form-inputfieldNormal"
							v-model="form.inputfieldNormal"
						/>

						<PoInputField
							label="Input with info"
							type="text"
							id="form-inputfieldInfo"
							v-model="form.inputfieldInfo"
							info="National ID card no."
						/>

						<PoInputField
							label="Input with message"
							type="text"
							id="form-inputfieldMessage"
							v-model="form.inputfieldMessage"
							message="Name of the house, street, village"
						/>

						<PoInputField
							label="Input with placeholder"
							type="email"
							id="form-inputfieldPlaceholder"
							v-model="form.inputfieldPlaceholder"
							placeholder="doe@example.com"
						/>

						<PoInputField
							label="Error State"
							type="text"
							id="form-inputfieldError"
							v-model="form.inputfieldError"
							error-message="Phone number is required"
						/>

						<PoInputField
							label="Currency Input"
							type="currency"
							id="form-inputfieldCurrency"
							v-model="form.inputfieldCurrency"
						/>

						<PoInputField
							label="Disabled"
							type="password"
							id="form-inputfieldDisabled"
							:disabled="true"
						/>

						<div class="lg:po-col-span-3">
							<PoInputField
								label="Input horizontal"
								type="text"
								id="form-inputfieldHorizontal"
								v-model="form.inputfieldHorizontal"
								display="horizontal"
							/>
						</div>
					</div>
				</template>
			</PoCard>
		</div>
		<div>
			<PoCard class="po-p-5" title="PoCheckbox">
				<template v-slot:content>
					<div class="po-pt-5 po-space-y-5">
						<PoCheckbox
							v-model="form.checkboxNormal"
							label="Checkbox Label"
							id="checkbox-normal"
							message="A short descriptive message"
						/>

						<PoCheckbox
							v-model="form.checkboxDisabled"
							label="Disabled Checkbox"
							id="checkbox-disabled"
							:disabled="true"
						/>
						<PoCheckbox
							v-model="form.checkboxError"
							label="Error State"
							id="checkbox-error"
							error-message="Unable to comply, building in progress."
						/>
					</div>
				</template>
			</PoCard>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { PoCard, PoCheckbox, PoInputField } from "../components";

const form = ref({
	inputfieldNormal: "",
	inputfieldInfo: "",
	inputfieldMessage: "",
	inputfieldPlaceholder: "",
	inputfieldError: "",
	inputfieldHorizontal: "",
	inputfieldCurrency: 0,
	checkboxNormal: false,
	checkboxDisabled: false,
	checkboxError: false,
});
</script>
