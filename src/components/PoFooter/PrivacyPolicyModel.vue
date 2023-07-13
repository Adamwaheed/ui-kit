<template>
	<a
		href="#"
		@click.prevent="showPolicyModal = true"
		role="button"
		class="hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
		>Privacy Policy</a
	>
	<PoModal
		:show="showPolicyModal"
		@modal-closed="showPolicyModal = false"
		modal-title="Privacy Policy"
		modal-width="sm:po-max-w-3xl"
		id="change-log-modal"
	>
		<template v-slot:content>
			<div class="po-prose-sm po-prose-slate po-p-5 po-opacity-80">
				<h2 class="po-text-red-500">Sample Privacy Policy</h2>

				<h3>1. Information Collection</h3>
				<p>
					We may collect personal information such as name, contact details, and
					pension-related data necessary for providing our services.
				</p>

				<h3>2. Use of Information</h3>
				<p>
					The collected information is used for the purpose of administering
					pensions, processing applications, and communicating with users.
				</p>

				<h3>3. Data Security</h3>
				<p>
					We implement appropriate security measures to protect personal
					information from unauthorized access, alteration, or disclosure.
				</p>

				<h3>4. Third-Party Disclosure</h3>
				<p>
					We may share personal information with trusted third parties only to
					the extent necessary for pension administration purposes.
				</p>

				<h3>5. Cookies and Tracking</h3>
				<p>
					We use cookies and similar technologies to enhance user experience and
					collect non-personal information about website usage.
				</p>

				<h3>6. Data Retention</h3>
				<p>
					We retain personal information for as long as necessary to fulfill the
					purposes outlined in this privacy policy, unless a longer retention
					period is required or permitted by law.
				</p>

				<h3>7. User Rights</h3>
				<p>
					Users have the right to access, update, and delete their personal
					information. Please contact us to exercise these rights.
				</p>

				<h3>8. Children's Privacy</h3>
				<p>
					This web app is not intended for children under the age of 13. We do
					not knowingly collect or store personal information from children.
				</p>

				<h3>9. Changes to Privacy Policy</h3>
				<p>
					We reserve the right to modify or update this privacy policy at any
					time. Users will be notified of any significant changes.
				</p>

				<h3>8. Contact Us</h3>
				<p>
					If you have any questions or concerns about our privacy policy, please
					contact us at
					<a href="mailto:info@pension.gov.mv">info@pension.gov.mv</a>.
				</p>
			</div>
		</template>
	</PoModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PoModal from "../PoModal/PoModal.vue";

const showPolicyModal = ref(false);
</script>
