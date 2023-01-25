<template>
    <li :class="['flex px-5', { 'justify-end items-end flex-col': 'first' === item.type }]">
        <div v-if="'message' !== item.type" class="flex space-x-3 items-start">
            <div v-if="'first' !== item.type" class="shrink-0 w-8 h-8 rounded-full p-1 bg-contain bg-slate-100" :style="{'background-image': `url(${item.avatar})`}"></div>
            <div :class="[{ 'pt-1' : 'first' !== item.type }, { 'flex justify-end items-end flex-col' : 'first' === item.type }]">
                <span class="flex items-center space-x-2">
                    <time v-if="'first' === item.type" :datetime="item.time" class="text-xs text-slate-400">{{ item.time_human }}</time>
                    <span class="text-sm font-medium text-slate-600">{{ item.name }}</span>
                    <time v-if="'second' === item.type" :datetime="item.time" class="text-xs text-slate-400">{{ item.time_human }}</time>
                </span>
                <div :class="['mt-2 space-y-1', { 'flex justify-end items-end flex-col' : 'first' === item.type }]">
                    <!--
                        @slot Message content goes here.
                    -->
                    <slot name="message">
                        <div v-for="msg in item.message" class="flex">
                            <p :class="['text-sm rounded-xl px-4 py-2', { 'bg-slate-100 text-slate-600' : 'first' !== item.type }, { 'bg-mpao-lightblue text-sky-50' : 'first' === item.type }]">{{ msg }}</p>
                        </div>
                    </slot>
                    <div class="flex pt-3 flex-wrap max-w-sm">
                        <!--
                            Emits the button label when it’s clicked, You can listen to it and switch accordingly.
                            @event button-click
                        -->
                        <button
                        v-for="action in item.actions"
                        @click="$emit('button-click', action.label)"
                        class="appearance-none border border-mpao-lightblue bg-white hover:bg-mpao-lightblue px-3 py-1 mb-2 mr-2 rounded-lg text-slate-500 hover:text-sky-100 transition-colors duration-150 ease-in-out text-sm ring-0 outline-none"
                        >{{ action.label }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="'message' === item.type" class="flex justify-center items-center w-full">
            <time :datetime="item.time" class="text-xs text-slate-400">{{ item.time_human }}</time>
            <span class="text-lg text-slate-300 px-3">&mdash;</span>
            <p v-for="msg in item.message" class="text-center text-sm italic text-slate-500">{{ msg }}</p>
        </div>
    </li>
</template>

<script>
export default {
  name: "PoChatLogItem",
};
</script>
<script setup>

const props = defineProps({
  /**
   * Model value
   */
   item: {
    type: Object,
    default: null,
  },
});
</script>