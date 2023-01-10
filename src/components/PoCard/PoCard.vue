<template>
  <div class="shadow-md rounded-md bg-white overflow-hidden">
    <!--
            @slot Content of the card goes here.
        -->
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "POCard",
};
</script>
<script setup></script>
