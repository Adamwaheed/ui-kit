"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./FormatDate-c700699d.js");function d(o,a){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{o.apply(this,r)},a)}}const l=async(o,a)=>{const t=useCookie("token"),r={key:o,async onRequest({options:e}){e.headers=e.headers||{},e.headers["Content-Type"]="application/json",t.value&&(e.headers.Authorization=`Bearer ${t.value}`)},async onRequestError({error:e}){console.log(e.message)},async onResponseError({response:e}){console.log(e._data.message)},...a},{data:s,pending:c,error:u,execute:i}=await useFetch(o,r);return{data:s,pending:c,error:u,execute:i}};exports.formatDate=n.formatDate;exports.formatMoney=n.formatMoney;exports.debounce=d;exports.useHttp=l;
