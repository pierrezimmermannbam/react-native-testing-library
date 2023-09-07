"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[278],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3901:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(3743),i={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){var t=e.toc,n=e.minHeadingLevel,o=e.maxHeadingLevel;return r.createElement("div",{className:i.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7462),a=n(3366),i=n(7294),o=n(6668),l=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.Z)(e,l);n>=0?t[n].children.push(i):r.push(i)})),r}function s(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function d(e,t){var n,r,a=t.anchorTopOffset,i=e.find((function(e){return u(e).top>=a}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(n=e[e.length-1])?n:null}function m(){var e=(0,i.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,i.useRef)(void 0),n=m();(0,i.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=d(l,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function f(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?i.createElement("ul",{className:a?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var v=i.memo(f),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,d=void 0===u?"table-of-contents__link":u,m=e.linkActiveClassName,f=void 0===m?void 0:m,h=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,g),k=(0,o.L)(),N=null!=h?h:k.tableOfContents.minHeadingLevel,w=null!=y?y:k.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:N,maxHeadingLevel:w});return p((0,i.useMemo)((function(){if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:w}}),[d,f,N,w])),i.createElement(v,(0,r.Z)({toc:C,className:l,linkClassName:d},b))}},5374:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(3901),l=["components"],c={id:"troubleshooting",title:"Troubleshooting"},s=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"This guide describes common issues found by users when integrating React Native Test Library to their projects:",source:"@site/docs/Troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/react-native-testing-library/docs/troubleshooting",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/Troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"User Event",permalink:"/react-native-testing-library/docs/user-event"},next:{title:"How Should I Query?",permalink:"/react-native-testing-library/docs/how-should-i-query"}},d={},m=[{value:"Matching React Native, React &amp; React Test Renderer versions",id:"matching-react-native-react--react-test-renderer-versions",level:2},{value:"Example repository",id:"example-repository",level:2},{value:"Act warnings",id:"act-warnings",level:2}],p={toc:m},f="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide describes common issues found by users when integrating React Native Test Library to their projects:"),(0,i.kt)(o.Z,{toc:m,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"matching-react-native-react--react-test-renderer-versions"},"Matching React Native, React & React Test Renderer versions"),(0,i.kt)("p",null,"Check that you have matching versions of core dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Native"),(0,i.kt)("li",{parentName:"ul"},"React"),(0,i.kt)("li",{parentName:"ul"},"React Test Renderer")),(0,i.kt)("p",null,"React Native uses different versioning scheme from React, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://react-native-community.github.io/upgrade-helper/"},"React Native Upgrade Helper")," to find the correct matching between React Native & React versions. In case you use Expo, you should use dependency versions recommended by them and set by ",(0,i.kt)("inlineCode",{parentName:"p"},"expo upgrade")," command."),(0,i.kt)("p",null,"React Test Renderer usually has same major & minor version as React, as they are closely related and React Test Renderer is part of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react"},"React monorepo"),"."),(0,i.kt)("p",null,"Related issues: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/issues/1061"},"#1061"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/issues/938"},"#938"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/issues/920"},"#920")),(0,i.kt)("p",null,"Errors that might indicate that you are facing this issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TypeError: Cannot read property 'current' of undefined")," when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"render()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TypeError: Cannot read property 'isBatchingLegacy' of undefined")," when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"render()"))),(0,i.kt)("h2",{id:"example-repository"},"Example repository"),(0,i.kt)("p",null,"We maintain an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/tree/main/examples/basic"},"example repository")," that showcases a modern React Native Testing Library setup with TypeScript, Jest Native, etc."),(0,i.kt)("p",null,"In case something does not work in your setup you can refer to this repository for recommended configuration."),(0,i.kt)("h2",{id:"act-warnings"},"Act warnings"),(0,i.kt)("p",null,"When writing tests you may encounter warnings connected with ",(0,i.kt)("inlineCode",{parentName:"p"},"act()")," function. There are two kinds of these warnings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sync ",(0,i.kt)("inlineCode",{parentName:"li"},"act()")," warning - ",(0,i.kt)("inlineCode",{parentName:"li"},"Warning: An update to Component inside a test was not wrapped in act(...)")),(0,i.kt)("li",{parentName:"ul"},"async ",(0,i.kt)("inlineCode",{parentName:"li"},"act()")," warning - ",(0,i.kt)("inlineCode",{parentName:"li"},"Warning: You called act(async () => ...) without await"))),(0,i.kt)("p",null,"You can read more about ",(0,i.kt)("inlineCode",{parentName:"p"},"act()")," function in our ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-testing-library/docs/understanding-act"},"understanding ",(0,i.kt)("inlineCode",{parentName:"a"},"act")," function guide"),"."),(0,i.kt)("p",null,"Normally, you should not encounter sync ",(0,i.kt)("inlineCode",{parentName:"p"},"act()")," warnings, but if that happens this probably indicate an issue with your test and should be investigated."),(0,i.kt)("p",null,"In case of async ",(0,i.kt)("inlineCode",{parentName:"p"},"act()")," function this might happen more or less randomly, especially if your components contain async logic. So far this warning does not seem to affect test correctness."))}v.isMDXComponent=!0}}]);