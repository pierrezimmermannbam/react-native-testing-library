"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[381],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,v=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],l={id:"user-event",title:"User Event"},o=void 0,p={unversionedId:"user-event",id:"user-event",title:"User Event",description:"Table of contents",source:"@site/docs/UserEvent.md",sourceDirName:".",slug:"/user-event",permalink:"/react-native-testing-library/docs/user-event",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/UserEvent.md",tags:[],version:"current",frontMatter:{id:"user-event",title:"User Event"}},u={},c=[{value:"Table of contents",id:"table-of-contents",level:3},{value:"<code>userEvent.setup</code>",id:"usereventsetup",level:2},{value:"Options",id:"options",level:3},{value:"<code>press()</code>",id:"press",level:2},{value:"<code>longPress()</code>",id:"longpress",level:2}],m={toc:c},d="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#usereventsetup"},(0,s.kt)("inlineCode",{parentName:"a"},"userEvent.setup")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#options"},"Options"))))),(0,s.kt)("h2",{id:"usereventsetup"},(0,s.kt)("inlineCode",{parentName:"h2"},"userEvent.setup")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"userEvent.setup(options?: {\n  delay: number;\n  advanceTimers: (delay: number) => Promise<void> | void;\n})\n")),(0,s.kt)("p",null,"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const user = userEvent.setup();\n")),(0,s.kt)("p",null,"Creates User Event instances which can be used to trigger events."),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"delay")," - controls the default delay between subsequent events, e.g. keystrokes, etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"advanceTimers")," - time advancement utility function that should be used for fake timers. The default setup handles both real and Jest fake timers.")),(0,s.kt)("h2",{id:"press"},(0,s.kt)("inlineCode",{parentName:"h2"},"press()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"press(\n  element: ReactTestInstance,\n): Promise<void>\n")),(0,s.kt)("p",null,"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const user = userEvent.setup();\n\nawait user.press(element);\n")),(0,s.kt)("p",null,"This helper simulates a press on any pressable element, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"Pressable"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TextInput"),", etc. Unlike ",(0,s.kt)("inlineCode",{parentName:"p"},"fireEvent.press()")," which is a simpler API that will only call the ",(0,s.kt)("inlineCode",{parentName:"p"},"onPress")," prop, this simulates the entire press event in a more realistic way by reproducing what really happens when a user presses an interface view. This will trigger additional events like ",(0,s.kt)("inlineCode",{parentName:"p"},"pressIn")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"pressOut"),". "),(0,s.kt)("h2",{id:"longpress"},(0,s.kt)("inlineCode",{parentName:"h2"},"longPress()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"longPress(\n  element: ReactTestInstance,\n  options: { duration: number } = { duration: 500 }\n): Promise<void>\n")),(0,s.kt)("p",null,"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const user = userEvent.setup();\n\nawait user.longPress(element);\n")),(0,s.kt)("p",null,"Simulates a long press user interaction. In React Native the ",(0,s.kt)("inlineCode",{parentName:"p"},"longPress")," event is emitted when the press duration exceeds long press threshold (by default 500 ms). In other aspects this actions behaves similar to regular ",(0,s.kt)("inlineCode",{parentName:"p"},"press")," action, e.g. by emitting ",(0,s.kt)("inlineCode",{parentName:"p"},"pressIn")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"pressOut")," events. The press duration is customisable through the options. This should be useful if you use the ",(0,s.kt)("inlineCode",{parentName:"p"},"delayLongPress")," prop. When using real timers this will take 500 ms so it is highly recommended to use that API with fake timers to prevent test taking a long time to run."))}v.isMDXComponent=!0}}]);