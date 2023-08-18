<template>
	<a
		href="#"
		@click.prevent="showPolicyModal = true"
		role="button"
		class="hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
		>Terms &amp; Conditions</a
	>
	<PoModal
		:show="showPolicyModal"
		@modal-closed="showPolicyModal = false"
		modal-title="Terms & Conditions"
		modal-width="sm:po-max-w-3xl"
		id="change-log-modal"
	>
		<template v-slot:content>
			<PoliciesBody>
				<h2 class="po-text-red-500">Sample Terms and Conditions</h2>

				<h3>1. Acceptance of Terms</h3>
				<p>
					By accessing and using this web app, you agree to be bound by these
					terms and conditions.
				</p>

				<h3>2. User Responsibilities</h3>
				<p>
					Users are responsible for maintaining the confidentiality of their
					account information and complying with all applicable laws.
				</p>

				<h3>3. Privacy Policy</h3>
				<p>
					Our privacy policy outlines how we collect, use, and protect your
					personal information. Please review our
					<a href="privacy.html">Privacy Policy</a> for more details.
				</p>

				<h3>4. Intellectual Property</h3>
				<p>
					All content and materials provided on this web app are protected by
					intellectual property laws. Unauthorized use is prohibited.
				</p>

				<h3>5. Limitation of Liability</h3>
				<p>
					We are not liable for any damages or losses incurred from the use of
					this web app, including but not limited to, errors, omissions, or
					interruptions.
				</p>

				<h3>6. Modification of Terms</h3>
				<p>
					We reserve the right to modify or update these terms and conditions at
					any time without prior notice. It is your responsibility to review
					them periodically.
				</p>

				<h3>7. Governing Law</h3>
				<p>
					These terms and conditions shall be governed by and construed in
					accordance with the laws of your jurisdiction.
				</p>

				<h3>8. Contact Us</h3>
				<p>
					If you have any questions or concerns about these terms and
					conditions, please contact us at
					<a href="mailto:info@pension.gov.mv">info@pension.gov.mv</a>.
				</p>
			</PoliciesBody>
		</template>
	</PoModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PoModal from "../PoModal/PoModal.vue";
import PoliciesBody from "./policiesBody.vue";

const showPolicyModal = ref(false);
</script>
