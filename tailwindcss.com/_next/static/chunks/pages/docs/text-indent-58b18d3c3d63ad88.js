(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1529],{22174:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-indent",function(){return a(53547)}])},53547:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var e=a(85893),t=a(11151),p=a(72788),i=a(25324),l=a(16484),o=a(54108),c=a(44894),r=a(99773);let d=p.L,u=i.X_;function g(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,t.ah)(),n.components),{Heading:a,Example:p,Editor:i}=s;return i||m("Editor",!0),p||m("Example",!0),a||m("Heading",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,e.jsx)(a,{level:3,id:"adding-a-text-indent",children:"Adding a text indent"}),"\n",(0,e.jsxs)(s.p,{children:["Use the ",(0,e.jsx)(s.code,{children:"indent-*"})," utilities to set the amount of empty space (indentation) that’s shown before text in a block."]}),"\n",(0,e.jsx)(p,Object.assign({containerClassName:"mt-4 -mb-3",html:'<div class="bg-white p-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto leading-6 dark:bg-slate-800 dark:text-slate-400">\n  <p class="indent-8">\n    So I started to walk into the water. I won\'t lie to you boys, I was\n    terrified. But I pressed on, and as I made my way past the breakers\n    a strange calm came over me. I don\'t know if it was divine intervention\n    or the kinship of all living things but I tell you Jerry at that moment,\n    I <em>was</em> a marine biologist.\n  </p>\n</div>'},{p:"none"})),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">indent-8</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  So I started to walk into the water. I won\'t lie to you boys, I was\n  terrified. But I pressed on, and as I made my way past the breakers\n  a strange calm came over me. I don\'t know if it was divine intervention\n  or the kinship of all living things but I tell you Jerry at that moment,\n  I <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>was<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span> a marine biologist.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(a,{level:3,id:"using-negative-values",children:"Using negative values"}),"\n",(0,e.jsx)(s.p,{children:"To use a negative text indent value, prefix the class name with a dash to convert it to a negative value."}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">-indent-8</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  So I started to walk into the water. I won\'t lie to...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,e.jsx)(r.k,{defaultClass:"indent-4",featuredClass:"indent-8"}),"\n",(0,e.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,e.jsx)(c.p,{defaultClass:"indent-4",featuredClass:"indent-8"}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,e.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(s.p,{children:["The default text indent scale is based on the ",(0,e.jsx)(s.a,{href:"/docs/customizing-spacing#default-spacing-scale",children:"default spacing scale"}),". You can customize your spacing scale by editing ",(0,e.jsx)(s.code,{children:"theme.spacing"})," or ",(0,e.jsx)(s.code,{children:"theme.extend.spacing"})," in your ",(0,e.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,e.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">spacing</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'128\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'32rem\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,e.jsxs)(s.p,{children:["Alternatively, you can customize just the text indent scale by editing ",(0,e.jsx)(s.code,{children:"theme.textIndent"})," or ",(0,e.jsx)(s.code,{children:"theme.extend.textIndent"})," in your ",(0,e.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,e.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">textIndent</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'128\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'32rem\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,e.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,e.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,e.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsx)(o.k,{property:"text-indent",featuredClass:"indent-[50%]"})]})}function k(n={}){return(0,e.jsx)(u,Object.assign({},n,{children:(0,e.jsx)(g,n)}))}var h=k;function m(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}k.layoutProps={Layout:d,classes:{utilities:{".indent-0":{"text-indent":"0px"},".indent-1":{"text-indent":"0.25rem"},".indent-2":{"text-indent":"0.5rem"},".indent-3":{"text-indent":"0.75rem"},".indent-4":{"text-indent":"1rem"},".indent-5":{"text-indent":"1.25rem"},".indent-6":{"text-indent":"1.5rem"},".indent-7":{"text-indent":"1.75rem"},".indent-8":{"text-indent":"2rem"},".indent-9":{"text-indent":"2.25rem"},".indent-10":{"text-indent":"2.5rem"},".indent-11":{"text-indent":"2.75rem"},".indent-12":{"text-indent":"3rem"},".indent-14":{"text-indent":"3.5rem"},".indent-16":{"text-indent":"4rem"},".indent-20":{"text-indent":"5rem"},".indent-24":{"text-indent":"6rem"},".indent-28":{"text-indent":"7rem"},".indent-32":{"text-indent":"8rem"},".indent-36":{"text-indent":"9rem"},".indent-40":{"text-indent":"10rem"},".indent-44":{"text-indent":"11rem"},".indent-48":{"text-indent":"12rem"},".indent-52":{"text-indent":"13rem"},".indent-56":{"text-indent":"14rem"},".indent-60":{"text-indent":"15rem"},".indent-64":{"text-indent":"16rem"},".indent-72":{"text-indent":"18rem"},".indent-80":{"text-indent":"20rem"},".indent-96":{"text-indent":"24rem"},".indent-px":{"text-indent":"1px"},".indent-0\\.5":{"text-indent":"0.125rem"},".indent-1\\.5":{"text-indent":"0.375rem"},".indent-2\\.5":{"text-indent":"0.625rem"},".indent-3\\.5":{"text-indent":"0.875rem"}},sort:n=>(0,l.nR)(n)},meta:{title:"Text Indent",description:"Utilities for controlling the amount of empty space shown before text in a block."},slug:"text-indent",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Adding a text indent",slug:"adding-a-text-indent",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},16484:function(n,s,a){"use strict";function e(n){return[...n].sort((n,s)=>{n=n.endsWith("-px")?n.replace(/-px$/,"-0.25"):n,s=s.endsWith("-px")?s.replace(/-px$/,"-0.25"):s;let a=n.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);a=null===a?NaN:parseFloat(a[1]);let e=s.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(e=null===e?NaN:parseFloat(e[1]),isNaN(a)&&isNaN(e))?0:isNaN(a)?1:isNaN(e)?-1:a-e})}function t(n){return[...n].sort((n,s)=>{n=n.endsWith("-px")?n.replace(/-px$/,"-0.25"):n,s=s.endsWith("-px")?s.replace(/-px$/,"-0.25"):s;let a=n.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);a=null===a?NaN:parseFloat(a[1]);let e=s.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(e=null===e?NaN:parseFloat(e[1]),isNaN(a)&&isNaN(e))?0:isNaN(a)?-1:isNaN(e)?1:a-e})}a.d(s,{Pg:function(){return t},nR:function(){return e}})},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return l},ah:function(){return p}});var e=a(67294);let t=e.createContext({});function p(n){let s=e.useContext(t);return e.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let i={};function l({components:n,children:s,disableParentContext:a}){let l;return l=a?"function"==typeof n?n({}):n||i:p(n),e.createElement(t.Provider,{value:l},s)}}},function(n){n.O(0,[3430,6595,9495,224,7308,1275,9774,2888,179],function(){return n(n.s=22174)}),_N_E=n.O()}]);