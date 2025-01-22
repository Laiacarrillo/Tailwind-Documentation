(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7375],{44085:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-invert",function(){return s(13295)}])},13295:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return h}});var e=s(85893),t=s(11151),o=s(72788),p=s(25324),r=s(54108),l=s(44894),c=s(99773),i=s(1165);let d=o.L,u=p.X_;function k(n){let a=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,t.ah)(),n.components),{Heading:s,Example:o,Editor:p}=a;return p||v("Editor",!0),o||v("Example",!0),s||v("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(s,{level:3,id:"inverting-an-elements-backdrop",children:"Inverting an element’s backdrop"}),"\n",(0,e.jsxs)(a.p,{children:["Use the ",(0,e.jsx)(a.code,{children:"backdrop-invert"})," and ",(0,e.jsx)(a.code,{children:"backdrop-invert-0"})," utilities to control whether an element should be rendered with inverted backdrop colors or normally."]}),"\n",(0,e.jsx)(o,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">\n<div class="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-invert-0</p>\n    <div class="relative">\n      <div class="absolute inset-6 backdrop-invert-0 h-20 w-20 bg-white/30"></div>\n      <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n      <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n    </div>\n  </div>\n  <div class="flex flex-col items-center shrink-0">\n    <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-invert</p>\n    <div class="relative">\n      <div class="absolute inset-6 backdrop-invert h-20 w-20 bg-white/30"></div>\n      <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n      <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n    </div>\n  </div>\n</div>\n</div>'},{p:"none"})),"\n",(0,e.jsx)(a.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">backdrop-invert-0</span> bg-white/30 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">backdrop-invert</span> bg-white/30 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s,{level:3,id:"removing-backdrop-filters",children:"Removing backdrop filters"}),"\n",(0,e.jsx)(i.I,{defaultClass:"backdrop-blur-md backdrop-invert"}),"\n",(0,e.jsx)(a.hr,{}),"\n",(0,e.jsx)(s,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(s,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(c.k,{defaultClass:"backdrop-invert",featuredClass:"backdrop-invert-0"}),"\n",(0,e.jsx)(s,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(l.p,{defaultClass:"backdrop-invert",featuredClass:"backdrop-invert-0"}),"\n",(0,e.jsx)(a.hr,{}),"\n",(0,e.jsx)(s,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(s,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(a.p,{children:["By default, Tailwind includes a handful of general purpose ",(0,e.jsx)(a.code,{children:"backdrop-invert"})," utilities. You can customize these values by editing ",(0,e.jsx)(a.code,{children:"theme.backdropInvert"})," or ",(0,e.jsx)(a.code,{children:"theme.extend.backdropInvert"})," in your ",(0,e.jsx)(a.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,e.jsx)(p,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">backdropInvert</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token number">25</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'.25\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token number">75</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'.75\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,e.jsxs)(a.p,{children:["Learn more about customizing the default theme in the ",(0,e.jsx)(a.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,e.jsx)(s,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(r.k,{property:"backdrop-invert",featuredClass:"backdrop-invert-[.25]"})]})}function g(n={}){return(0,e.jsx)(u,Object.assign({},n,{children:(0,e.jsx)(k,n)}))}var h=g;function v(n,a){throw Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:d,classes:{utilities:{".backdrop-invert-0":{"--tw-backdrop-invert":"invert(0)","-webkit-backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-invert":{"--tw-backdrop-invert":"invert(100%)","-webkit-backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}},transformProperties:({properties:n})=>({"backdrop-filter":n["--tw-backdrop-invert"]})},meta:{title:"Backdrop Invert",description:"Utilities for applying backdrop invert filters to an element."},slug:"backdrop-invert",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Inverting an element's backdrop",slug:"inverting-an-elements-backdrop",children:[]},{title:"Removing backdrop filters",slug:"removing-backdrop-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},1165:function(n,a,s){"use strict";s.d(a,{I:function(){return t}});var e=s(85893);function t({defaultClass:n,element:a="div",children:s}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:["To remove all of the backdrop filters on an element at once, use the"," ",(0,e.jsx)("code",{children:"backdrop-filter-none"})," utility:"]}),s||(0,e.jsx)("pre",{className:"language-html",children:(0,e.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:backdrop-filter-none</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,a).replace("{defaultClass} ",n?`${n} `:"")}})}),(0,e.jsx)("p",{children:"This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint."})]})}},11151:function(n,a,s){"use strict";s.d(a,{Zo:function(){return r},ah:function(){return o}});var e=s(67294);let t=e.createContext({});function o(n){let a=e.useContext(t);return e.useMemo(()=>"function"==typeof n?n(a):{...a,...n},[a,n])}let p={};function r({components:n,children:a,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||p:o(n),e.createElement(t.Provider,{value:r},a)}}},function(n){n.O(0,[3430,6595,9495,224,7308,1275,9774,2888,179],function(){return n(n.s=44085)}),_N_E=n.O()}]);