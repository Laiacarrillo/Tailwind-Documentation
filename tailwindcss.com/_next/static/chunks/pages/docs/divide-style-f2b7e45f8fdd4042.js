(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2680],{25622:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/divide-style",function(){return s(8407)}])},8407:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var a=s(85893),t=s(11151),l=s(72788),i=s(25324),o=s(44894),d=s(99773);let c=l.L,p=i.X_;function r(n){let e=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr"},(0,t.ah)(),n.components),{Heading:s,Example:l}=e;return l||g("Example",!0),s||g("Heading",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,a.jsx)(s,{level:3,id:"set-the-divide-style",children:"Set the divide style"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"divide-*"})," utilities to control the border style between elements."]}),"\n",(0,a.jsx)(l,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-cols-1 divide-dashed divide-y font-mono text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto dark:divide-slate-700">\n  <div class="p-4 text-slate-400 bg-white dark:bg-slate-800">01</div>\n  <div class="p-4 text-slate-400 bg-white dark:bg-slate-800">02</div>\n  <div class="p-4 text-slate-400 bg-white dark:bg-slate-800">03</div>\n</div>'},{p:"none"})),"\n",(0,a.jsx)(e.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>divide-y <span class="code-highlight bg-code-highlight">divide-dashed</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,a.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,a.jsx)(d.k,{defaultClass:"divide-y divide-dashed",featuredClass:"divide-solid"}),"\n",(0,a.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,a.jsx)(o.p,{defaultClass:"divide-y divide-dashed",featuredClass:"divide-solid"})]})}function u(n={}){return(0,a.jsx)(p,Object.assign({},n,{children:(0,a.jsx)(r,n)}))}var h=u;function g(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}u.layoutProps={Layout:c,classes:{utilities:{".divide-solid > :not([hidden]) ~ :not([hidden])":{"border-style":"solid"},".divide-dashed > :not([hidden]) ~ :not([hidden])":{"border-style":"dashed"},".divide-dotted > :not([hidden]) ~ :not([hidden])":{"border-style":"dotted"},".divide-double > :not([hidden]) ~ :not([hidden])":{"border-style":"double"},".divide-none > :not([hidden]) ~ :not([hidden])":{"border-style":"none"}},transformSelector:n=>{let e=Object.assign({span:"span"},(0,t.ah)());return(0,a.jsxs)(a.Fragment,{children:[n.split(">").shift().trim().replace(/^\./,"").replace(/\\/g,"")," ",(0,a.jsx)(e.span,{className:"ml-1 text-purple-300",children:"> * + *"})]})}},meta:{title:"Divide Style",description:"Utilities for controlling the border style between elements."},slug:"divide-style",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Set the divide style",slug:"set-the-divide-style",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},44894:function(n,e,s){"use strict";s.d(e,{p:function(){return t}});var a=s(85893);function t({defaultClass:n,featuredClass:e,element:s="div",children:t}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,a.jsxs)("code",{children:["md:",e]})," to apply the ",(0,a.jsx)("code",{children:e})," utility at only medium screen sizes and above."]}),t||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,s).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",e)}})}),(0,a.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,a.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,a.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},99773:function(n,e,s){"use strict";s.d(e,{k:function(){return t}});var a=s(85893);function t({property:n,utility:e,variant:s="hover",defaultClass:t,featuredClass:l,element:i="div",children:o}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,a.jsxs)("code",{children:[s,":",l]})," ","to only apply the ",(0,a.jsx)("code",{children:l})," utility on ",s,"."]}),o||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,i).replace("{defaultClass} ",t?`${t} `:"").replace("{variant}",s).replace("{featuredClass}",l)}})}),(0,a.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(n,e,s){"use strict";s.d(e,{L:function(){return o}});var a=s(85893),t=s(97903),l=s(77929),i=s(87308);function o(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,a.jsx)(t.C,{nav:i.u,...n})]})}o.nav=i.u},11151:function(n,e,s){"use strict";s.d(e,{Zo:function(){return o},ah:function(){return l}});var a=s(67294);let t=a.createContext({});function l(n){let e=a.useContext(t);return a.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let i={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||i:l(n),a.createElement(t.Provider,{value:o},e)}}},function(n){n.O(0,[3430,6595,9495,224,7308,9774,2888,179],function(){return n(n.s=25622)}),_N_E=n.O()}]);