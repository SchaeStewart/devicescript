"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3742],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),h=i,d=u["".concat(p,".").concat(h)]||u[h]||b[h]||l;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},51078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(25773),i=(r(27378),r(35318));const l={description:"Mounts a light bulb server",title:"Light bulb"},a="Light bulb",o={unversionedId:"api/servers/lightbulb",id:"api/servers/lightbulb",title:"Light bulb",description:"Mounts a light bulb server",source:"@site/docs/api/servers/lightbulb.md",sourceDirName:"api/servers",slug:"/api/servers/lightbulb",permalink:"/devicescript/api/servers/lightbulb",draft:!1,tags:[],version:"current",frontMatter:{description:"Mounts a light bulb server",title:"Light bulb"},sidebar:"tutorialSidebar",previous:{title:"HID Mouse",permalink:"/devicescript/api/servers/hidmouse"},next:{title:"Light Level",permalink:"/devicescript/api/servers/lightlevel"}},p={},s=[{value:"Options",id:"options",level:2},{value:"pin",id:"pin",level:3},{value:"dimmable",id:"dimmable",level:3},{value:"activeLow",id:"activelow",level:3}],c={toc:s},u="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"light-bulb"},"Light bulb"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"startLightBulb")," function starts a ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/services/lightbulb"},"light bulb")," server on the device\nand returns a ",(0,i.kt)("a",{parentName:"p",href:"/api/clients/lightbulb"},"client"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\nimport { startLightBulb } from "@devicescript/servers"\n\nconst bulb = startLightBulb({\n    pin: gpio(20),\n    dimmable: true,\n})\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"pin"},"pin"),(0,i.kt)("p",null,"The pin hardware identifier on which to mount the light bulb."),(0,i.kt)("h3",{id:"dimmable"},"dimmable"),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," you can set the intensity of the light (it will use a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pulse-width_modulation"},"PWM")," signal at a few kHz)."),(0,i.kt)("h3",{id:"activelow"},"activeLow"),(0,i.kt)("p",null,"Indicates that the light is on when the pin ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\nBy default, the light is on when the pin is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."))}b.isMDXComponent=!0}}]);