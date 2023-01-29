import{a as t,b as l,F as o,r as d,f as r,t as m,o as a,g as u,L as i,M as c}from"./vue.esm-bundler-d54c9e0f.js";const b={class:"table-responsive w-full"},f={key:1},p=["colspan"],h={class:"py-10 block normal-case"},g={name:"PoTable"},y=Object.assign(g,{props:{thead:{type:Array,default:null},tbody:{type:Array,default:null},emptyMessage:{type:String,default:"We couldn't find any content to display."}},setup(e){return(s,T)=>(a(),t("table",b,[l("thead",null,[l("tr",null,[(a(!0),t(o,null,d(e.thead,n=>(a(),t("th",null,[u(s.$slots,"th",i(c(n)))]))),256))])]),l("tbody",null,[e.tbody!==null||e.tbody!==null&&e.tbody.length!==0?(a(!0),t(o,{key:0},d(e.tbody,n=>(a(),t("tr",null,[u(s.$slots,"td",i(c(n)))]))),256)):r("",!0),e.tbody==null||e.tbody!==null&&e.tbody.length==0?(a(),t("tr",f,[l("td",{colspan:e.thead.length+1,class:"text-center"},[l("span",h,m(e.emptyMessage),1)],8,p)])):r("",!0)])]))}}),k=y;y.__docgenInfo={exportName:"default",displayName:"PoTable",description:"",tags:{},props:[{name:"thead",description:"Table head items array",type:{name:"array"},defaultValue:{func:!1,value:"null"}},{name:"tbody",description:"Table body items array",type:{name:"array"},defaultValue:{func:!1,value:"null"}},{name:"emptyMessage",description:"Message to display when the table is empty",type:{name:"string"},defaultValue:{func:!1,value:`"We couldn't find any content to display."`}}],slots:[{name:"th",scoped:!0,description:"Table header items format",bindings:[]},{name:"td",scoped:!0,description:"Table body items format",bindings:[]}]};export{k as P};
//# sourceMappingURL=PoTable-0e1913b2.js.map
