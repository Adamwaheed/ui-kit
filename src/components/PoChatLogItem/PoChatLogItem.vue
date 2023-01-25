<template>
    <li :class="['flex px-5', { 'justify-end items-end flex-col': 'user' === item.userType }]">
        <div v-if="'message' !== item.userType" class="flex space-x-3 items-start">
            <div v-if="'user' !== item.userType" :class="['shrink-0 w-8 h-8 rounded-full p-1 bg-contain', { 'bg-mpao-orange' : 'agent' === item.userType }, { 'bg-mpao-lightblue' : 'bot' === item.userType }]" :style="{'background-image': `url(${item.avatar})`}">
                <svg v-if="'agent' === item.userType && '' === item.avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M15 14.25h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5H15m0 4.5v-4.5m0 4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5M15 9.75V7.5a6 6 0 1 0-12 0v2.25m0 0v3a1.5 1.5 0 0 0 3 0v-1.5a1.5 1.5 0 0 0-1.5-1.5H3Z"/></svg>
                <svg v-if="'bot' === item.userType" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="none"><path fill="#fff" d="M14.054 11.083a1.78 1.78 0 0 1 1.782 1.782v.716a2.969 2.969 0 0 1-1.035 2.252c-1.24 1.064-3.013 1.585-5.301 1.585-2.288 0-4.06-.52-5.297-1.584a2.97 2.97 0 0 1-1.033-2.251v-.718a1.781 1.781 0 0 1 1.781-1.782h9.103Zm0 1.188H4.95a.594.594 0 0 0-.593.594v.718c0 .519.227 1.012.62 1.35.996.857 2.496 1.297 4.523 1.297 2.027 0 3.53-.44 4.527-1.298a1.781 1.781 0 0 0 .621-1.35v-.717a.594.594 0 0 0-.594-.594ZM9.421 1.589l.079-.006a.594.594 0 0 1 .588.514l.006.08v.594h2.77a1.781 1.781 0 0 1 1.782 1.781V8.12a1.781 1.781 0 0 1-1.782 1.78H6.135a1.781 1.781 0 0 1-1.78-1.78V4.552a1.781 1.781 0 0 1 1.78-1.781h2.771v-.594a.594.594 0 0 1 .515-.588Zm3.444 2.37h-6.73a.594.594 0 0 0-.593.593V8.12c0 .327.266.593.593.593h6.73a.594.594 0 0 0 .593-.593V4.552a.594.594 0 0 0-.594-.594ZM7.718 5.145a.99.99 0 1 1 .056 1.978.99.99 0 0 1-.056-1.978Zm3.556 0a.99.99 0 1 1 .056 1.979.99.99 0 0 1-.056-1.98Z"/></svg>
            </div>
            <div :class="[{ 'pt-1' : 'user' !== item.userType }, { 'flex justify-end items-end flex-col' : 'user' === item.userType }]">
                <span class="flex items-center space-x-2">
                    <time v-if="'user' === item.userType" :datetime="item.time" class="text-xs text-slate-400">{{ item.time_human }}</time>
                    <span class="text-sm font-medium text-slate-600">{{ item.name }}</span>
                    <time v-if="'agent' === item.userType || 'bot' === item.userType" :datetime="item.time" class="text-xs text-slate-400">{{ item.time_human }}</time>
                </span>
                <div :class="['mt-2 space-y-1', { 'flex justify-end items-end flex-col' : 'user' === item.userType }]">
                    <!--
                        @slot Message content goes here.
                    -->
                    <slot name="message">
                        <div v-for="msg in item.message" class="flex">
                            <p :class="['text-sm rounded-xl px-4 py-2', { 'bg-slate-100 text-slate-600' : 'user' !== item.userType }, { 'bg-mpao-lightblue text-sky-50' : 'user' === item.userType }]">{{ msg }}</p>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
        <div v-if="'message' === item.userType" class="flex justify-center items-center w-full">
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