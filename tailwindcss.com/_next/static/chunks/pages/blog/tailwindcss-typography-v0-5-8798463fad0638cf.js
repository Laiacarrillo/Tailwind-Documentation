(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4681],{55060:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tailwindcss-typography-v0-5",function(){return a(22320)}])},22320:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t=a(85893),e=a(11151),o=a(15385),p=a(29688);let l=o.B,c={title:"Effortless Typography, Even in Dark Mode",description:"Today we're announcing the next version of the Tailwind CSS Typography plugin, which brings easy dark mode support and a brand new customization API.",date:"2021-12-17T18:50:00.000Z",authors:[p.Oq],image:{src:"/_next/static/media/card.a29ee6e2.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAAAAwECERIhUZH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKolbotljKWjqq9efZABYf/Z",blurWidth:8,blurHeight:5}};function i(n){let s=Object.assign({p:"p",a:"a",code:"code",pre:"pre",hr:"hr"},(0,e.ah)(),n.components),{Heading:a}=s;return a||function(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Today we’re announcing the next version of the ",(0,t.jsx)(s.a,{href:"/docs/typography-plugin",children:"Tailwind CSS Typography plugin"}),", which brings easy dark mode support, a brand new customization API, and the ",(0,t.jsx)(s.code,{children:"not-prose"})," class I wasn’t sure we’d ever figure out how to support."]}),"\n",(0,t.jsx)("div",{className:"aspect-w-16 aspect-h-9 my-12",children:(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/Aa2RjxU-BCw",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),"\n",(0,t.jsxs)(s.p,{children:["For a full tour of everything that’s new, check out ",(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GEYkwfYytAM",children:"the official release video"})," on our YouTube channel."]}),"\n",(0,t.jsx)(s.p,{children:"Tailwind CSS Typography v0.5 is designed for Tailwind CSS v3.0, so make sure you’re on the latest version of Tailwind, then install the new plugin release from npm:"}),"\n",(0,t.jsx)(s.pre,{className:"language-shell",dangerouslySetInnerHTML:{__html:'<code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @tailwindcss/typography@latest</code>'}}),"\n",(0,t.jsxs)(s.p,{children:["To learn more about everything the plugin provides, check out our update ",(0,t.jsx)(s.a,{href:"/docs/typography-plugin",children:"typography plugin"})," documentation."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"easy-dark-mode-support",children:"Easy dark mode support"}),"\n",(0,t.jsxs)(s.p,{children:["We’ve added a ",(0,t.jsx)(s.code,{children:"prose-invert"})," class you can use to easily swap out your typography colors in dark mode:"]}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white dark:bg-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prose <span class="code-highlight bg-code-highlight">dark:prose-invert</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    {{ markdown }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.p,{children:"The dark themes are hand-crafted by our expert design team, and automatically adapt to whatever gray scale you’re using."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"pick-your-gray-scale",children:"Pick your gray scale"}),"\n",(0,t.jsx)(s.p,{children:"Tailwind CSS v3.0 ships with five different sets of grays by default, and the updated typography plugin includes classes for each one, making it easy to match your typography to the rest of your site:"}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prose <span class="code-highlight bg-code-highlight">prose-slate</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  {{ markdown }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.p,{children:"We’ve simplified how we define color themes internally too, which makes it easier to add your own if you need to."}),"\n",(0,t.jsxs)(s.p,{children:["Check out the ",(0,t.jsx)(s.a,{href:"/docs/typography-plugin#choosing-a-gray-scale",children:"documentation"})," to learn more."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"html-based-customization-api",children:"HTML-based customization API"}),"\n",(0,t.jsx)(s.p,{children:"We’ve added tons of modifiers you can use to tweak specific elements in your prose styles, directly in your HTML:"}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prose <span class="code-highlight bg-code-highlight">prose-img:rounded-xl</span> <span class="code-highlight bg-code-highlight">prose-headings:underline</span> <span class="code-highlight bg-code-highlight">prose-a:text-blue-600</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  {{ markdown }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.p,{children:"This makes it easy to do things like style links to match your brand, add a border radius to images, and tons more."}),"\n",(0,t.jsxs)(s.p,{children:["Check out the ",(0,t.jsx)(s.a,{href:"/docs/typography-plugin#element-modifiers",children:"element modifiers"})," documentation to learn more."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"undo-prose-styles",children:"Undo prose styles"}),"\n",(0,t.jsxs)(s.p,{children:["Ever needed to stick some non-content HTML in the middle of your content? Now you can wrap that with ",(0,t.jsx)(s.code,{children:"not-prose"})," to make sure the prose styles don’t interfere with it:"]}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>My Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-prose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Some HTML that needs to be prose-free --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:["Ready to try it out? Check out the ",(0,t.jsx)(s.a,{href:"/docs/typography-plugin",children:"typography plugin documentation"})," to learn more and get started."]})]})}function r(n={}){return(0,t.jsx)(l,Object.assign({},n,{children:(0,t.jsx)(i,n)}))}var u=r;r.layoutProps={meta:c,slug:"tailwindcss-typography-v0-5",tableOfContents:[{title:"Easy dark mode support",slug:"easy-dark-mode-support",children:[]},{title:"Pick your gray scale",slug:"pick-your-gray-scale",children:[]},{title:"HTML-based customization API",slug:"html-based-customization-api",children:[]},{title:"Undo prose styles",slug:"undo-prose-styles",children:[]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return l},ah:function(){return o}});var t=a(67294);let e=t.createContext({});function o(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let p={};function l({components:n,children:s,disableParentContext:a}){let l;return l=a?"function"==typeof n?n({}):n||p:o(n),t.createElement(e.Provider,{value:l},s)}}},function(n){n.O(0,[3430,6595,9495,224,1301,9774,2888,179],function(){return n(n.s=55060)}),_N_E=n.O()}]);