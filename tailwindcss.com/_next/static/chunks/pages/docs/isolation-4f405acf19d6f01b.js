(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3794],{88160:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/isolation",function(){return t(81629)}])},81629:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var s=t(85893),a=t(11151),o=t(72788),l=t(25324),i=t(44894),c=t(99773);let r=o.L,p=l.X_;function u(n){let e=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr"},(0,a.ah)(),n.components),{Heading:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Heading",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,s.jsx)(t,{level:3,id:"setting-the-stacking-context",children:"Setting the stacking context"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.code,{children:"isolate"})," and ",(0,s.jsx)(e.code,{children:"isolation-auto"})," utilities to control whether an element should explicitly create a new stacking context."]}),"\n",(0,s.jsx)(e.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isolate ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(t,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,s.jsx)(t,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,s.jsx)(c.k,{defaultClass:"isolate",featuredClass:"isolation-auto"}),"\n",(0,s.jsx)(t,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,s.jsx)(i.p,{defaultClass:"isolate",featuredClass:"isolation-auto"})]})}function d(n={}){return(0,s.jsx)(p,Object.assign({},n,{children:(0,s.jsx)(u,n)}))}var h=d;d.layoutProps={Layout:r,classes:{utilities:{".isolate":{isolation:"isolate"},".isolation-auto":{isolation:"auto"}}},meta:{title:"Isolation",description:"Utilities for controlling whether an element should explicitly create a new stacking context."},slug:"isolation",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the stacking context",slug:"setting-the-stacking-context",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},44894:function(n,e,t){"use strict";t.d(e,{p:function(){return a}});var s=t(85893);function a({defaultClass:n,featuredClass:e,element:t="div",children:a}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,s.jsxs)("code",{children:["md:",e]})," to apply the ",(0,s.jsx)("code",{children:e})," utility at only medium screen sizes and above."]}),a||(0,s.jsx)("pre",{className:"language-html",children:(0,s.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,t).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",e)}})}),(0,s.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,s.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,s.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,s.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},99773:function(n,e,t){"use strict";t.d(e,{k:function(){return a}});var s=t(85893);function a({property:n,utility:e,variant:t="hover",defaultClass:a,featuredClass:o,element:l="div",children:i}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,s.jsxs)("code",{children:[t,":",o]})," ","to only apply the ",(0,s.jsx)("code",{children:o})," utility on ",t,"."]}),i||(0,s.jsx)("pre",{className:"language-html",children:(0,s.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,l).replace("{defaultClass} ",a?`${a} `:"").replace("{variant}",t).replace("{featuredClass}",o)}})}),(0,s.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,s.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(n,e,t){"use strict";t.d(e,{L:function(){return i}});var s=t(85893),a=t(97903),o=t(77929),l=t(87308);function i(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,s.jsx)(a.C,{nav:l.u,...n})]})}i.nav=l.u},11151:function(n,e,t){"use strict";t.d(e,{Zo:function(){return i},ah:function(){return o}});var s=t(67294);let a=s.createContext({});function o(n){let e=s.useContext(a);return s.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let l={};function i({components:n,children:e,disableParentContext:t}){let i;return i=t?"function"==typeof n?n({}):n||l:o(n),s.createElement(a.Provider,{value:i},e)}}},function(n){n.O(0,[3430,6595,9495,224,7308,9774,2888,179],function(){return n(n.s=88160)}),_N_E=n.O()}]);