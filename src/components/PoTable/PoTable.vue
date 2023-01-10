<template>
    <table class="table-responsive w-full">
        <thead>
            <tr>
                <th v-for="th in thead">
                    <!-- 
                        @slot Table header items format
                     -->
                    <slot name="th" v-bind="th"></slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="null !== tbody || null !== tbody && 0 !== tbody.length" v-for="td in tbody">
                <!-- 
                    @slot Table body items format
                 -->
                <slot name="td" v-bind="td"></slot>
            </tr>
            <tr v-if="null == tbody || null !== tbody && 0 == tbody.length">
                <td :colspan="thead.length + 1" class="text-center"><span class="py-10 block normal-case">{{ emptyMessage }}</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: "PoTable",
};
</script>
<script setup>
defineProps({
    /**
     * Table head items array
     */
    thead: {
        type: Array,
        default: null
    },
    /**
     * Table body items array
     */
    tbody: {
        type: Array,
        default: null
    },
    /**
     * Message to display when the table is empty
     */
    emptyMessage: {
        type: String,
        default: "We couldn't find any content to display."
    }
});
</script>