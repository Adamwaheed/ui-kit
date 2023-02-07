<template>
  <div>
    <section class="po-grid po-gap-5 po-grid-cols-1 md:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10 po-opacity-60 hover:po-opacity-100 po-transition-opacity po-duration-150 po-ease-out">
      <div>
        <img class="po-h-10 po-mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo">
        <p class="po-mt-3 po-text-xs po-text-slate-500">8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives</p>
        <p class="po-mt-1 po-text-xs po-text-slate-500">&copy; Pension Office, All Rights Reserved.</p>
        <p class="po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4">
          <a href="https://www.pension.gov.mv" target="_blank" class="po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue">
            <GlobeAltIcon class="po-w-3 po-h-3 po-fill-current" />
            <span>www.pension.gov.mv</span>
          </a>
          <a href="mailto:info@pension.gov.mv" target="_blank" class="po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue">
            <EnvelopeIcon class="po-w-3 po-h-3 po-fill-current" />
            <span>info@pension.gov.mv</span>
          </a>
          <a href="tel:1441" target="_blank" class="po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue">
            <PhoneIcon class="po-w-3 po-h-3 po-fill-current" />
            <span>1441</span>
          </a>
        </p>
  
      </div>
      <div class="po-flex po-justify-end po-items-end po-flex-col">
        <nav class="po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4">
          <a href="" class="hover:po-text-mpao-lightblue">Terms &amp; Conditions</a>
          <a href="" class="hover:po-text-mpao-lightblue">Privacy Policy</a>
          <a href="" class="hover:po-text-mpao-lightblue">Cookie Policy</a>
        </nav>
        <div class="po-flex po-space-x-2 po-mt-5 po-justify-end">
          <img class="po-h-6" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt="">
          <img class="po-h-6" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt="">
        </div>
      </div>
    </section>
    <!-- notifications -->
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
import { GlobeAltIcon, EnvelopeIcon, PhoneIcon }  from '@heroicons/vue/24/solid'
</script>