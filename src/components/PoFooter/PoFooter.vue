<template>
    <div>
        <div class="p-10 pb-5">
            <div class="flex space-x-2 mt-5 justify-end">
                <img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10 mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo">
                <img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt="">
                <img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt="">
            </div>
        </div>
        <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50">
          <div class="flex w-full flex-col items-center space-y-4 sm:items-end pt-[55px]" id="po-notifications-alert">
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