(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8256],{93768:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-style",function(){return e(9846)}])},9846:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var s=e(85893),a=e(11151),l=e(72788),i=e(25324),o=e(44894),c=e(99773);let p=l.L,r=i.X_;function u(n){let t=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr"},(0,a.ah)(),n.components),{Heading:e,Example:l}=t;return l||g("Example",!0),e||g("Heading",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,s.jsx)(e,{level:3,id:"italicizing-text",children:"Italicizing text"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"italic"})," utility can be used to make text italic. Likewise, the ",(0,s.jsx)(t.code,{children:"not-italic"})," utility can be used to display text normally — typically to reset italic text at different breakpoints."]}),"\n",(0,s.jsx)(l,{containerClassName:"mt-4 -mb-3",html:'<div class="flex flex-col gap-8">\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">italic</span>\n    <p class="italic text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n  <div>\n    <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">not-italic</span>\n    <p class="not-italic text-lg font-medium text-slate-900 dark:text-slate-200">\n      The quick brown fox jumps over the lazy dog.\n    </p>\n  </div>\n</div>'}),"\n",(0,s.jsx)(t.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">italic</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">not-italic</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(e,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,s.jsx)(e,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,s.jsx)(c.k,{defaultClass:"italic",featuredClass:"not-italic",element:"p"}),"\n",(0,s.jsx)(e,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,s.jsx)(o.p,{defaultClass:"italic",featuredClass:"not-italic",element:"p"})]})}function d(n={}){return(0,s.jsx)(r,Object.assign({},n,{children:(0,s.jsx)(u,n)}))}var h=d;function g(n,t){throw Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}d.layoutProps={Layout:p,classes:{utilities:{".italic":{"font-style":"italic"},".not-italic":{"font-style":"normal"}}},meta:{title:"Font Style",description:"Utilities for controlling the style of text."},slug:"font-style",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Italicizing text",slug:"italicizing-text",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]}},44894:function(n,t,e){"use strict";e.d(t,{p:function(){return a}});var s=e(85893);function a({defaultClass:n,featuredClass:t,element:e="div",children:a}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,s.jsxs)("code",{children:["md:",t]})," to apply the ",(0,s.jsx)("code",{children:t})," utility at only medium screen sizes and above."]}),a||(0,s.jsx)("pre",{className:"language-html",children:(0,s.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,e).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",t)}})}),(0,s.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,s.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,s.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,s.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-and-feature-queries",children:"other media query modifiers"}),"."]})]})}},99773:function(n,t,e){"use strict";e.d(t,{k:function(){return a}});var s=e(85893);function a({property:n,utility:t,variant:e="hover",defaultClass:a,featuredClass:l,element:i="div",children:o}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,s.jsxs)("code",{children:[e,":",l]})," ","to only apply the ",(0,s.jsx)("code",{children:l})," utility on ",e,"."]}),o||(0,s.jsx)("pre",{className:"language-html",children:(0,s.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,i).replace("{defaultClass} ",a?`${a} `:"").replace("{variant}",e).replace("{featuredClass}",l)}})}),(0,s.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,s.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},72788:function(n,t,e){"use strict";e.d(t,{L:function(){return o}});var s=e(85893),a=e(97903),l=e(77929),i=e(87308);function o(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,s.jsx)(a.C,{nav:i.u,...n})]})}o.nav=i.u},11151:function(n,t,e){"use strict";e.d(t,{Zo:function(){return o},ah:function(){return l}});var s=e(67294);let a=s.createContext({});function l(n){let t=s.useContext(a);return s.useMemo(()=>"function"==typeof n?n(t):{...t,...n},[t,n])}let i={};function o({components:n,children:t,disableParentContext:e}){let o;return o=e?"function"==typeof n?n({}):n||i:l(n),s.createElement(a.Provider,{value:o},t)}}},function(n){n.O(0,[3430,6595,9495,224,7308,9774,2888,179],function(){return n(n.s=93768)}),_N_E=n.O()}]);