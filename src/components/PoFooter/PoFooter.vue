<template>
    <div>
        <div class="po-p-10 po-pb-5">
            <div class="po-flex po-space-x-2 po-mt-5 po-justify-end">
                <img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10 po-mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo">
                <img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt="">
                <img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt="">
            </div>
        </div>
        <div aria-live="assertive" class="po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50">
          <div class="po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]" id="po-notifications-alert">
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PoFooter",
};
</script>
<script setup>
</script>