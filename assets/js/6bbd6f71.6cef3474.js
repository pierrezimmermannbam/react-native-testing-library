"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[951],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(v,o(o({ref:t},u),{},{components:n})):i.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(7294),a=n(3743),r={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){var t=e.toc,n=e.minHeadingLevel,o=e.maxHeadingLevel;return i.createElement("div",{className:r.tableOfContentsInline},i.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(7462),a=n(3366),r=n(7294),o=n(6668),l=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var i=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,i),n[e.level]=t}));var i=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,a.Z)(e,l);n>=0?t[n].children.push(r):i.push(r)})),i}function c(e){var t=e.toc,n=e.minHeadingLevel,i=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function d(e,t){var n,i,a=t.anchorTopOffset,r=e.find((function(e){return u(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(r))?r:null!=(i=e[e.indexOf(r)-1])?i:null:null!=(n=e[e.length-1])?n:null}function p(){var e=(0,r.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,r.useRef)(void 0),n=p();(0,r.useEffect)((function(){if(!e)return function(){};var i=e.linkClassName,a=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,i=[],a=t;a<=n;a+=1)i.push("h"+a+".anchor");return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=d(l,{anchorTopOffset:n.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function v(e){var t=e.toc,n=e.className,i=e.linkClassName,a=e.isChild;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:i}))}))):null}var f=r.memo(v),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,d=void 0===u?"table-of-contents__link":u,p=e.linkActiveClassName,v=void 0===p?void 0:p,h=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,g),k=(0,o.L)(),N=null!=h?h:k.tableOfContents.minHeadingLevel,C=null!=y?y:k.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,i=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})}),[t,n,i])}({toc:t,minHeadingLevel:N,maxHeadingLevel:C});return m((0,r.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:C}}),[d,v,N,C])),r.createElement(f,(0,i.Z)({toc:w,className:l,linkClassName:d},b))}},1670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(3901),l=["components"],s={id:"migration-v7",title:"Migration to 7.0"},c=void 0,u={unversionedId:"migration-v7",id:"migration-v7",title:"Migration to 7.0",description:'We renamed the react-native-testing-library npm package to @testing-library/react-native, officially joining the "Testing Library" family \ud83c\udf89.',source:"@site/docs/MigrationV7.md",sourceDirName:".",slug:"/migration-v7",permalink:"/react-native-testing-library/docs/migration-v7",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/MigrationV7.md",tags:[],version:"current",frontMatter:{id:"migration-v7",title:"Migration to 7.0"},sidebar:"docs",previous:{title:"Migration to 9.0",permalink:"/react-native-testing-library/docs/migration-v9"},next:{title:"Migration to 2.0",permalink:"/react-native-testing-library/docs/migration-v2"}},d={},p=[{value:"Guide for <code>react-native-testing-library</code> users",id:"guide-for-react-native-testing-library-users",level:2},{value:"Renaming the library",id:"renaming-the-library",level:3},{value:"New aliases",id:"new-aliases",level:3},{value:"Renaming <code>ByPlaceholder</code> queries",id:"renaming-byplaceholder-queries",level:3},{value:"<code>fireEvent</code> support for disabled components",id:"fireevent-support-for-disabled-components",level:3},{value:"Guide for <code>@testing-library/react-native</code> users",id:"guide-for-testing-libraryreact-native-users",level:2},{value:"Renaming &quot;wait&quot; helpers",id:"renaming-wait-helpers",level:3},{value:"Changes to <code>ByTestId</code> queries",id:"changes-to-bytestid-queries",level:3},{value:"No <code>ByTitle</code> queries",id:"no-bytitle-queries",level:3},{value:"No custom Jest configuration",id:"no-custom-jest-configuration",level:3},{value:"Cleanup is included by default",id:"cleanup-is-included-by-default",level:3},{value:"No NativeTestInstance abstraction",id:"no-nativetestinstance-abstraction",level:3},{value:"No <code>container</code> nor <code>baseElement</code> returned from <code>render</code>",id:"no-container-nor-baseelement-returned-from-render",level:3},{value:"Firing events changes",id:"firing-events-changes",level:3}],m={toc:p},v="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)(v,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We renamed the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-testing-library")," npm package to ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native"),', officially joining the "Testing Library" family \ud83c\udf89.')),(0,r.kt)("p",null,"As the version 7.0 involves merging two libraries together, there are two variants for migration guide, dependent on library you used previously:"),(0,r.kt)(o.Z,{toc:p,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"guide-for-react-native-testing-library-users"},"Guide for ",(0,r.kt)("inlineCode",{parentName:"h2"},"react-native-testing-library")," users"),(0,r.kt)("p",null,"This guide describes steps necessary to migrate from React Native Testing Library ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.x")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"v6.0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v7.0"),"."),(0,r.kt)("h3",{id:"renaming-the-library"},"Renaming the library"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"@testing-library/react-native"),"."),(0,r.kt)("li",{parentName:"ol"},"Uninstall ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-testing-library"),"."),(0,r.kt)("li",{parentName:"ol"},"Rename all references of ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-testing-library")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"@testing-library/react-native"),".")),(0,r.kt)("p",null,"You may have noticed a strange v2 to v7 upgrade, skipping versions 3, 4, 5 and 6. This is because we renamed the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-testing-library")," npm package to ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native"),', officially joining the "Testing Library" family \ud83c\udf89. We\'re merging existing two libraries into a single one. The ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/native-testing-library"},"native-testing-library")," repository, which had v6, will soon be archived and using ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," below v7, sourced from mentioned repository, is deprecated."),(0,r.kt)("p",null,'For branding purposes we keep the "React Native Testing Library" name, similar to "React Testing Library". Only the npm published package is changing. The code repository also stays the same under Callstack governance.'),(0,r.kt)("h3",{id:"new-aliases"},"New aliases"),(0,r.kt)("p",null,"To improve compatibility with React Testing Library, and ease the migration for ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," users using version below v7, we've introduced new aliases to our accessibility queries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ByLabelText")," aliasing ",(0,r.kt)("inlineCode",{parentName:"li"},"ByA11yLabel")," queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ByHintText")," aliasing ",(0,r.kt)("inlineCode",{parentName:"li"},"ByA11yHint")," queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ByRole")," aliasing ",(0,r.kt)("inlineCode",{parentName:"li"},"ByA11yRole")," queries")),(0,r.kt)("p",null,"We like the new names and consider removing the aliases in future releases."),(0,r.kt)("h3",{id:"renaming-byplaceholder-queries"},"Renaming ",(0,r.kt)("inlineCode",{parentName:"h3"},"ByPlaceholder")," queries"),(0,r.kt)("p",null,"To improve compatibility with React Testing Library, and to ease the migration for ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," users using version below v7, we've renamed following queries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ByPlaceholder")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ByPlaceholderText"))),(0,r.kt)("p",null,"Please replace all occurrences of these queries in your codebase."),(0,r.kt)("h3",{id:"fireevent-support-for-disabled-components"},(0,r.kt)("inlineCode",{parentName:"h3"},"fireEvent")," support for disabled components"),(0,r.kt)("p",null,"To improve compatibility with the real React Native environment ",(0,r.kt)("inlineCode",{parentName:"p"},"fireEvent"),' now performs checks whether the component is "disabled" before firing an event on it. It uses the Responder system to establish should the event fire, which resembles the actual React Native runtime closer than we used to.'),(0,r.kt)("p",null,"If your code contained any workarounds for preventing events firing on disabled events, you should now be able to remove them."),(0,r.kt)("h2",{id:"guide-for-testing-libraryreact-native-users"},"Guide for ",(0,r.kt)("inlineCode",{parentName:"h2"},"@testing-library/react-native")," users"),(0,r.kt)("p",null,"This guide describes steps necessary to migrate from ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"v6.0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v7.0"),". Although the name stays the same, this is a different library, sourced at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library"},"Callstack GitHub repository"),". We made sure the upgrade path is as easy for you as possible."),(0,r.kt)("h3",{id:"renaming-wait-helpers"},'Renaming "wait" helpers'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wait")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForElement")," helpers are replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"waitFor"),". Please rename all occurrences of these in your codebase."),(0,r.kt)("h3",{id:"changes-to-bytestid-queries"},"Changes to ",(0,r.kt)("inlineCode",{parentName:"h3"},"ByTestId")," queries"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ByTestId")," queries don't accept RegExps. Please use strings instead. We're happy to accept PRs adding this functionality :)."),(0,r.kt)("h3",{id:"no-bytitle-queries"},"No ",(0,r.kt)("inlineCode",{parentName:"h3"},"ByTitle")," queries"),(0,r.kt)("p",null,"Our library doesn't implement ",(0,r.kt)("inlineCode",{parentName:"p"},"ByTitle")," queries, which are targetting components with ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," prop, specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RefreshControl"),". If your tests only use ",(0,r.kt)("inlineCode",{parentName:"p"},"ByTitle")," to target ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," components, you can replace them with ",(0,r.kt)("inlineCode",{parentName:"p"},"ByText")," queries, since React Native renders ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," under the hood."),(0,r.kt)("p",null,"If you need to query ",(0,r.kt)("inlineCode",{parentName:"p"},"RefreshControl")," component and can't figure out other way around it, you can use e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"UNSAFE_getByProps({title})")," query."),(0,r.kt)("h3",{id:"no-custom-jest-configuration"},"No custom Jest configuration"),(0,r.kt)("p",null,"Use the official React Native preset for Jest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "jest": {\n-    "preset": "@testing-library/react-native"\n+    "preset": "react-native"\n  }\n}\n')),(0,r.kt)("p",null,"We're told this also speeds up your tests startup on cold cache. Using official preset has another benefit \u2013 the library is compatible with any version of React Native without introducing breaking changes."),(0,r.kt)("h3",{id:"cleanup-is-included-by-default"},"Cleanup is included by default"),(0,r.kt)("p",null,"Cleaning up (unmounting) components after each test is included by default in the same manner as in React Testing Library. Please remove this setup file from Jest config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "jest": {\n-    "setupFilesAfterEnv": ["@testing-library/react-native/cleanup-after-each"]\n  }\n}\n')),(0,r.kt)("p",null,"You can opt-out of this behavior by running tests with ",(0,r.kt)("inlineCode",{parentName:"p"},"RNTL_SKIP_AUTO_CLEANUP=true")," flag or importing from ",(0,r.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native/pure"),". We encourage you to keep the default though."),(0,r.kt)("h3",{id:"no-nativetestinstance-abstraction"},"No ",(0,r.kt)("a",{parentName:"h3",href:"https://www.native-testing-library.com/docs/api-test-instance"},"NativeTestInstance")," abstraction"),(0,r.kt)("p",null,"We don't provide any abstraction over ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," returned by queries, but allow to use it directly to access queried component's ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," for that example."),(0,r.kt)("h3",{id:"no-container-nor-baseelement-returned-from-render"},"No ",(0,r.kt)("inlineCode",{parentName:"h3"},"container")," nor ",(0,r.kt)("inlineCode",{parentName:"h3"},"baseElement")," returned from ",(0,r.kt)("inlineCode",{parentName:"h3"},"render")),(0,r.kt)("p",null,"There's no ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," function. If you must, use ",(0,r.kt)("inlineCode",{parentName:"p"},"react-test-renderer")," directly, although we advise against doing so. We also don't implement ",(0,r.kt)("inlineCode",{parentName:"p"},"baseElement")," because of that, since there's no ",(0,r.kt)("inlineCode",{parentName:"p"},"document.documentElement")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"container"),"."),(0,r.kt)("h3",{id:"firing-events-changes"},"Firing events changes"),(0,r.kt)("p",null,"There are slight differences in how ",(0,r.kt)("inlineCode",{parentName:"p"},"fireEvent")," works in both libraries:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Our library doesn't perform validation checks for events fired upon tested components."),(0,r.kt)("li",{parentName:"ol"},"Signature is different:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"-fireEvent[eventName](node: FiberRoot, eventProperties: NativeTestEvent)\n+fireEvent(element: ReactTestInstance, eventName: string, ...data: Array<any>)\n"))),(0,r.kt)("li",{parentName:"ol"},"There is no ",(0,r.kt)("inlineCode",{parentName:"li"},"NativeTestEvent")," - second and rest arguments are used instead."),(0,r.kt)("li",{parentName:"ol"},"There are only 3 short-hand events: ",(0,r.kt)("a",{parentName:"li",href:"api/#fireeventpress-element-reacttestinstance--void"},(0,r.kt)("inlineCode",{parentName:"a"},"fireEvent.press")),", ",(0,r.kt)("a",{parentName:"li",href:"api/#fireeventchangetext-element-reacttestinstance-data-arrayany--void"},(0,r.kt)("inlineCode",{parentName:"a"},"fireEvent.changeText"))," and ",(0,r.kt)("a",{parentName:"li",href:"api/#fireeventscroll-element-reacttestinstance-data-arrayany--void"},(0,r.kt)("inlineCode",{parentName:"a"},"fireEvent.scroll")),". For all other or custom events you can use the base signature.")))}f.isMDXComponent=!0}}]);