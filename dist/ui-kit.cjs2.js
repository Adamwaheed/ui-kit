"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./FormatMoney-3dede8f6.js");function d(o,r){let t;return function(...a){clearTimeout(t),t=setTimeout(()=>{o.apply(this,a)},r)}}const l=async(o,r)=>{const t=useCookie("token"),a={key:o,async onRequest({options:e}){e.headers=e.headers||{},e.headers["Content-Type"]="application/json",t.value&&(e.headers.Authorization=`Bearer ${t.value}`)},async onRequestError({error:e}){console.log(e.message)},async onResponseError({response:e}){console.log(e._data.message)},...r},{data:s,pending:c,error:u,execute:i}=await useFetch(o,a);return{data:s,pending:c,error:u,execute:i}};exports.formatDate=n.formatDate;exports.formatMoney=n.formatMoney;exports.debounce=d;exports.useHttp=l;
