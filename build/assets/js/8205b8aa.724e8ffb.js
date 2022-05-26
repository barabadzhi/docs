"use strict";(self.webpackChunkmy_website_001=self.webpackChunkmy_website_001||[]).push([[6707],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13307:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={id:"NovoRender.Highlight",title:"Interface: Highlight",sidebar_label:"Highlight",custom_edit_url:null},c=void 0,p={unversionedId:"webgl-api/interfaces/NovoRender.Highlight",id:"webgl-api/interfaces/NovoRender.Highlight",title:"Interface: Highlight",description:"NovoRender.Highlight",source:"@site/docs/webgl-api/interfaces/NovoRender.Highlight.md",sourceDirName:"webgl-api/interfaces",slug:"/webgl-api/interfaces/NovoRender.Highlight",permalink:"/docs/webgl-api/interfaces/NovoRender.Highlight",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"NovoRender.Highlight",title:"Interface: Highlight",sidebar_label:"Highlight",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"HierarcicalObjectReference",permalink:"/docs/webgl-api/interfaces/NovoRender.HierarcicalObjectReference"},next:{title:"ImageEncodeOptions_",permalink:"/docs/webgl-api/interfaces/NovoRender.ImageEncodeOptions_"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"rgbaTransform",id:"rgbatransform",level:3}],m={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/webgl-api/namespaces/NovoRender"},"NovoRender"),".Highlight"),(0,o.kt)("p",null,"Visual highlighting for a group of objects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nHighlighting is done using a linear transformation matrix per group, which allows for various visual effects in addition to simply assigning a single color.\nThis can be useful to preserve at least some aspects of the original material colors, by, e.g. making certain objects semi-transparent, darker/brighter or color/grayscale."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"rgbatransform"},"rgbaTransform"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"rgbaTransform"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"length"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"20"),"  } & readonly ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,o.kt)("p",null,"5x4 row-major matrix for color/opacity transform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nThis matrix defines the linear transformation that is applied to the original RGBA color before rendering.\nThe fifth column is multiplied by a constant 1, making it useful for translation.\nThe resulting colors are computed thus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"output_red = r*m[0] + g*m[1] + b*m[2] + a*m[3] + m[4]\noutput_green = r*m[5] + g*m[6] + b*m[7] + a*m[8] + m[9]\noutput_blue = r*m[10] + g*m[11] + b*m[12] + a*m[13] + m[14]\noutput_alpha = r*m[15] + g*m[16] + b*m[17] + a*m[18] + m[19]\n")),(0,o.kt)("p",null,"All input values are between 0 and 1 and output value will be clamped to this range.\nSetting this matrix directly offers the most amount of flexibility."))}g.isMDXComponent=!0}}]);