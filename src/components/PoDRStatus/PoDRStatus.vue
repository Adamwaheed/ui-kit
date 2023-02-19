<template>
  <span class="po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-1">
    <span class="po-font-bold po-text-lime-700">Pending Verification</span>
    <span>Death was reported by RedSquare Hospital</span>
    <span class="po-space-x-1 po-pt-4"
      ><span
        class="po-font-medium po-border-l-2 po-border-lime-600 po-pl-2 po-py-1"
        >Reported Date of death:</span
      ><span>10th December 2022</span></span
    >
    <span class="po-space-x-1"
      ><span
        class="po-font-medium po-border-l-2 po-border-lime-600 po-pl-2 po-py-1"
        >Source:</span
      ><span>RedSquare Hospital</span></span
    >
    <span class="po-pt-5">
      <PoButton type="simple" to="/deathreporting/dispute">
        <template v-slot:label>
          <span class="po-flex po-items-center po-space-x-1">
            <BoltIcon class="po-w-4 po-h-4 po-stroke-current" />
            <span>File a dispute.</span>
          </span>
        </template>
      </PoButton>
    </span>
  </span>
</template>

<script>
export default {
  name: "PoDRStatus",
};
</script>
<script setup>
defineProps({
  /**
   * Member Object { name, identifier, dob }
   */
  member: {
    type: Object,
    default: null,
  },
  /**
   * Record Object { id, institution, date_of_death }
   */
  record: {
    type: Object,
    default: null,
  },
  /**
   * Request Object { id, type, state, dispute_type, institution, date_of_death }
   */
  request: {
    type: Object,
    default: null,
  },
});
</script>
