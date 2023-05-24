"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3837],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const i={},s="SHTC3",o={unversionedId:"api/servers/shtc3",id:"api/servers/shtc3",title:"SHTC3",description:"Driver for SHTC3 temperature/humidity sensor at I2C address 0x70.",source:"@site/docs/api/servers/shtc3.mdx",sourceDirName:"api/servers",slug:"/api/servers/shtc3",permalink:"/devicescript/api/servers/shtc3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SHT30",permalink:"/devicescript/api/servers/sht30"},next:{title:"Soil Moisture",permalink:"/devicescript/api/servers/soilmoisture"}},c={},p=[{value:"Usage",id:"usage",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shtc3"},"SHTC3"),(0,a.kt)("p",null,"Driver for SHTC3 temperature/humidity sensor at I2C address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x70"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Services: ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/temperature/"},"temperature"),", ",(0,a.kt)("a",{parentName:"li",href:"/api/clients/humidity/"},"humidity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sensirion.com/products/catalog/SHTC3/"},"Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript/blob/main/packages/drivers/src/shtc3.ts"},"Source"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { startSHTC3 } from "@devicescript/drivers"\nconst { temperature, humidity } = await startSHTC3()\n')))}m.isMDXComponent=!0}}]);