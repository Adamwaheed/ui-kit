<template>
  <ul
    class="po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative"
  >
    <li v-for="item in menuItems">
      <!--
                Emits the route of the clicked button
                @event link-click
            -->
      <span
        @click="$emit('link-click', item.link)"
        role="button"
        :class="[
          'po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2',
          {
            'po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue':
              item.link == currPageRoute,
          },
          {
            'po-border-slate-200 po-text-sm po-text-slate-600':
              item.link !== currPageRoute,
          },
        ]"
      >
        <component :is="item.icon" class="po-w-4 po-h-4 po-stroke-current" />
        <span>{{ item.label }}</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PoSectionMenu",
};
</script>
<script setup>
defineProps({
  /**
   * Current route name to highlight
   */
  currPageRoute: {
    type: String,
    default: "",
  },
  /**
   * list of menu items
   */
  menuItems: {
    type: Array,
    default: null,
  },
});
</script>
