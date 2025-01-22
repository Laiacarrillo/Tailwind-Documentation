(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4995],{47701:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-template-rows",function(){return a(48982)}])},48982:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t=a(85893),e=a(11151),p=a(72788),i=a(25324),o=a(54108),l=a(44894),c=a(99773);let r=p.L,d=i.X_;function g(n){let s=Object.assign({p:"p",code:"code",em:"em",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Example:p,Editor:i}=s;return i||h("Editor",!0),p||h("Example",!0),a||h("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"specifying-the-rows-in-a-grid",children:"Specifying the rows in a grid"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"grid-rows-*"})," utilities to create grids with ",(0,t.jsx)(s.em,{children:"n"})," equally sized rows."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-rows-4 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-pink rounded-lg">\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">01</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">02</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">03</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">04</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">05</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">06</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">07</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">08</div>\n  <div class="p-4 rounded-lg shadow-lg bg-pink-500">09</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid <span class="code-highlight bg-code-highlight">grid-rows-4</span> grid-flow-col gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a,{level:3,id:"subgrid",children:"Subgrid"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"grid-rows-subgrid"})," utility to adopt the row tracks defined by the item’s parent."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="grid grid-rows-4 grid-flow-col gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">01</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">02</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">03</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">04</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">05</div>\n  <div class="row-span-3 grid grid-rows-subgrid gap-4">\n    <div class="rounded-lg bg-stripes-fuchsia h-14"></div>\n    <div class="rounded-lg bg-fuchsia-500 grid items-center justify-center h-14 shadow-lg">06</div>\n    <div class="rounded-lg bg-stripes-fuchsia h-14"></div>\n  </div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">07</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">08</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">09</div>\n  <div class="rounded-lg dark:bg-indigo-900 bg-indigo-300 grid items-center justify-center h-14 shadow-lg">10</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-rows-4 grid-flow-col gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>05<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid <span class="code-highlight bg-code-highlight">grid-rows-subgrid</span> gap-4 row-span-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row-start-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>06<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>07<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"grid grid-rows-2",featuredClass:"grid-rows-6"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(l.p,{defaultClass:"grid grid-rows-2",featuredClass:"grid-rows-6"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind includes ",(0,t.jsx)(s.code,{children:"grid-template-row"})," utilities for creating basic grids with up to 12 equal width rows. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.gridTemplateRows"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.gridTemplateRows"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsxs)(s.p,{children:["You have direct access to the ",(0,t.jsx)(s.code,{children:"grid-template-rows"})," CSS property here so you can make your custom rows values as generic or as complicated and site-specific as you like."]}),"\n",(0,t.jsx)(i,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token literal-property property">gridTemplateRows</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">        </span><span class="token comment">// Simple 16 row grid</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'16\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'repeat(16, minmax(0, 1fr))\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token plain language-js unchanged">\n</span><span class="token language-js unchanged"><span class="token plain">        </span><span class="token comment">// Complex site-specific row configuration</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'layout\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'200px minmax(900px, 1fr) 100px\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(o.k,{property:"grid-template-rows",defaultClass:"grid",featuredClass:"grid-rows-[200px_minmax(900px,_1fr)_100px]"})]})}function u(n={}){return(0,t.jsx)(d,Object.assign({},n,{children:(0,t.jsx)(g,n)}))}var k=u;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}u.layoutProps={Layout:r,classes:{utilities:{".grid-rows-1":{"grid-template-rows":"repeat(1, minmax(0, 1fr))"},".grid-rows-2":{"grid-template-rows":"repeat(2, minmax(0, 1fr))"},".grid-rows-3":{"grid-template-rows":"repeat(3, minmax(0, 1fr))"},".grid-rows-4":{"grid-template-rows":"repeat(4, minmax(0, 1fr))"},".grid-rows-5":{"grid-template-rows":"repeat(5, minmax(0, 1fr))"},".grid-rows-6":{"grid-template-rows":"repeat(6, minmax(0, 1fr))"},".grid-rows-7":{"grid-template-rows":"repeat(7, minmax(0, 1fr))"},".grid-rows-8":{"grid-template-rows":"repeat(8, minmax(0, 1fr))"},".grid-rows-9":{"grid-template-rows":"repeat(9, minmax(0, 1fr))"},".grid-rows-10":{"grid-template-rows":"repeat(10, minmax(0, 1fr))"},".grid-rows-11":{"grid-template-rows":"repeat(11, minmax(0, 1fr))"},".grid-rows-12":{"grid-template-rows":"repeat(12, minmax(0, 1fr))"},".grid-rows-none":{"grid-template-rows":"none"},".grid-rows-subgrid":{"grid-template-rows":"subgrid"}}},meta:{title:"Grid Template Rows",description:"Utilities for specifying the rows in a grid layout."},slug:"grid-template-rows",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Specifying the rows in a grid",slug:"specifying-the-rows-in-a-grid",children:[]},{title:"Subgrid",slug:"subgrid",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return o},ah:function(){return p}});var t=a(67294);let e=t.createContext({});function p(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let i={};function o({components:n,children:s,disableParentContext:a}){let o;return o=a?"function"==typeof n?n({}):n||i:p(n),t.createElement(e.Provider,{value:o},s)}}},function(n){n.O(0,[3430,6595,9495,224,7308,1275,9774,2888,179],function(){return n(n.s=47701)}),_N_E=n.O()}]);