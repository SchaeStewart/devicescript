"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3012],{35318:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(27378);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39439:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(25773),i=(r(27378),r(35318));const o={description:"Configuring pins for servers",title:"Pins",sidebar_position:9},s="Pins",a={unversionedId:"developer/servers/pins",id:"developer/servers/pins",title:"Pins",description:"Configuring pins for servers",source:"@site/docs/developer/servers/pins.mdx",sourceDirName:"developer/servers",slug:"/developer/servers/pins",permalink:"/devicescript/developer/servers/pins",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Configuring pins for servers",title:"Pins",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Servers",permalink:"/devicescript/developer/servers/"},next:{title:"Analog",permalink:"/devicescript/developer/servers/analog"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(u,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pins"},"Pins"),(0,i.kt)("p",null,"You can either use hardware GPIO numbers using ",(0,i.kt)("inlineCode",{parentName:"p"},"gpio()")," function, or you can import\na board definition file and use the labels present on the board."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins } from "@dsboard/adafruit_qt_py_c3"\n\n// highlight-next-line\nconst A2 = pins.A2\n')),(0,i.kt)("p",null,"The doc-string for ",(0,i.kt)("inlineCode",{parentName:"p"},"pins.A2")," will tell you GPIO number (",(0,i.kt)("inlineCode",{parentName:"p"},"1")," in this case).\nUsing named pins is also less error-prone since pins used for internal\nfunctions are not exposed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"pins")," object and the pins that are\nexposed are annotated with type (input, output, analog, etc.) which is then\nrequired by the ",(0,i.kt)("inlineCode",{parentName:"p"},"startSomething()")," functions."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gpio()")," function does not check for pin functions or usage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { gpio } from "@devicescript/core"\n\n// highlight-next-line\nconst P0 = gpio(0)\n')))}d.isMDXComponent=!0}}]);