(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3791],{59700:function(s,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2024-06-21-headless-ui-v2-1",function(){return n(18432)}])},18432:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return k}});var t={src:"/_next/static/media/card.647cc6f3.jpg",height:768,width:1536,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAAAAQIDEQQUISL/xAAVAQEBAAAAAAAAAAAAAAAAAAACBf/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMRQf/aAAwDAQACEQMRAD8AluzI7ISW6kX0r28WwAU8F7FXT2ICf//Z",blurWidth:8,blurHeight:4},p=n(85893),e=n(11151),l=n(15385);n(30196);var o=n(29688);let c=l.B,i={title:"Headless UI v2.1: Simplified transition API and improved multi-dialog support",description:"",date:"2024-06-21T15:00:00.000Z",authors:[o.Oq,o.Od],image:t};function r(s){let a=Object.assign({img:"img",p:"p",hr:"hr",code:"code",ul:"ul",li:"li",a:"a",pre:"pre"},(0,e.ah)(),s.components),{Heading:n,Editor:l}=a;return l||g("Editor",!0),n||g("Heading",!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.img,{src:t.src,alt:"Headless UI v2.1"}),"\n",(0,p.jsx)(a.p,{children:"We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings."}),"\n",(0,p.jsx)(a.hr,{}),"\n",(0,p.jsx)(n,{level:2,id:"simplified-transition-api",children:"Simplified transition API"}),"\n",(0,p.jsxs)(a.p,{children:["We’ve made transitions way easier in v2.1 by adding a new ",(0,p.jsx)(a.code,{children:"transition"})," prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:"]}),"\n",(0,p.jsx)(l,{style:"framed",color:"fuchsia",code:'<pre class="language-jsx"><code class="language-jsx"><span class="token block"><span class="token keyword module">import</span><span class="token plain"> </span><span class="token imports punctuation">{</span><span class="token imports"> </span><span class="token imports maybe-class-name">Menu</span><span class="token imports punctuation">,</span><span class="token imports"> </span><span class="token imports maybe-class-name">MenuButton</span><span class="token imports punctuation">,</span><span class="token imports"> </span><span class="token imports maybe-class-name">MenuItem</span><span class="token imports punctuation">,</span><span class="token imports"> </span><span class="token imports maybe-class-name">MenuItems</span><span class="token imports"> </span><span class="token imports punctuation">}</span><span class="token plain"> </span><span class="token keyword module">from</span><span class="token plain"> </span><span class="token string">\'@headlessui/react\'</span><span class="token plain"></span>\n</span><span class="token plain block">\n</span><span class="token block"><span class="token plain"></span><span class="token keyword">function</span><span class="token plain"> </span><span class="token function maybe-class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">  </span><span class="token keyword control-flow">return</span><span class="token plain"> </span><span class="token punctuation">(</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">    </span><span class="token tag punctuation">&lt;</span><span class="token tag class-name">Menu</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;</span><span class="token tag class-name">MenuButton</span><span class="token tag punctuation">></span><span class="token maybe-class-name">My</span><span class="token plain"> account</span><span class="token tag punctuation">&lt;/</span><span class="token tag class-name">MenuButton</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;</span><span class="token tag class-name">MenuItems</span><span class="token tag"></span>\n</span><span class="token tag block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">        <span class="token attr-name">transition</span>\n</span><span class="token tag block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">        <span class="token attr-name">className</span><span class="token script language-javascript script-punctuation punctuation">=</span><span class="token script language-javascript punctuation">{</span><span class="token script language-javascript template-string template-punctuation string">`</span><span class="token script language-javascript template-string string"></span>\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          transition ease-out\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          data-[closed]:scale-95 data-[closed]:opacity-0\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          data-[enter]:duration-200 data-[leave]:duration-300\n</span><span class="token tag block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token script language-javascript template-string string">        </span><span class="token script language-javascript template-string template-punctuation string">`</span><span class="token script language-javascript punctuation">}</span>\n</span><span class="token block"><span class="token tag">      </span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">        </span><span class="token punctuation">{</span><span class="token comment">/* Menu items… */</span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;/</span><span class="token tag class-name">MenuItems</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">    </span><span class="token tag punctuation">&lt;/</span><span class="token tag class-name">Menu</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">  </span><span class="token punctuation">)</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,p.jsx)(a.p,{children:"There are four data attributes you can use to target the different stages of your transitions:"}),"\n",(0,p.jsxs)(a.ul,{role:"list",children:["\n",(0,p.jsxs)(a.li,{children:[(0,p.jsx)(a.code,{children:"data-closed"}),": The styles the element should transition from when entering and to when leaving."]}),"\n",(0,p.jsxs)(a.li,{children:[(0,p.jsx)(a.code,{children:"data-enter"}),": Styles to apply while the element is entering, like a duration or easing curve."]}),"\n",(0,p.jsxs)(a.li,{children:[(0,p.jsx)(a.code,{children:"data-leave"}),": Styles to apply while the element is leaving, like a duration or easing curve."]}),"\n",(0,p.jsxs)(a.li,{children:[(0,p.jsx)(a.code,{children:"data-transition"}),": Styles to apply while the element is entering or leaving, useful for sharing values between both stages."]}),"\n"]}),"\n",(0,p.jsxs)(a.p,{children:["You can even stack these attributes to use different ",(0,p.jsx)(a.code,{children:"closed"})," styles for entering and leaving. For example this dialog slides in from the left, but slides out to the right:"]}),"\n",(0,p.jsx)(l,{style:"framed",color:"purple",code:'<pre class="language-jsx"><code class="language-jsx"><span class="token block"><span class="token keyword module">import</span><span class="token plain"> </span><span class="token imports punctuation">{</span><span class="token imports"> </span><span class="token imports maybe-class-name">Dialog</span><span class="token imports"> </span><span class="token imports punctuation">}</span><span class="token plain"> </span><span class="token keyword module">from</span><span class="token plain"> </span><span class="token string">\'@headlessui/react\'</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain"></span><span class="token keyword module">import</span><span class="token plain"> </span><span class="token imports punctuation">{</span><span class="token imports"> useState </span><span class="token imports punctuation">}</span><span class="token plain"> </span><span class="token keyword module">from</span><span class="token plain"> </span><span class="token string">\'react\'</span><span class="token plain"></span>\n</span><span class="token plain block">\n</span><span class="token block"><span class="token plain"></span><span class="token keyword">function</span><span class="token plain"> </span><span class="token function maybe-class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">  </span><span class="token keyword">let</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token plain">isOpen</span><span class="token punctuation">,</span><span class="token plain"> setIsOpen</span><span class="token punctuation">]</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token plain"></span>\n</span><span class="token plain block">\n</span><span class="token block"><span class="token plain">  </span><span class="token keyword control-flow">return</span><span class="token plain"> </span><span class="token punctuation">(</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">    </span><span class="token tag punctuation">&lt;</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;</span><span class="token tag">button</span><span class="token tag"> </span><span class="token tag attr-name">onClick</span><span class="token tag script language-javascript script-punctuation punctuation">=</span><span class="token tag script language-javascript punctuation">{</span><span class="token tag script language-javascript punctuation">(</span><span class="token tag script language-javascript punctuation">)</span><span class="token tag script language-javascript"> </span><span class="token tag script language-javascript arrow operator">=></span><span class="token tag script language-javascript"> </span><span class="token tag script language-javascript function">setIsOpen</span><span class="token tag script language-javascript punctuation">(</span><span class="token tag script language-javascript boolean">true</span><span class="token tag script language-javascript punctuation">)</span><span class="token tag script language-javascript punctuation">}</span><span class="token tag punctuation">></span><span class="token maybe-class-name">Open</span><span class="token plain"> dialog</span><span class="token tag punctuation">&lt;/</span><span class="token tag">button</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;</span><span class="token tag class-name">Dialog</span><span class="token tag"></span>\n</span><span class="token tag block">        <span class="token attr-name">open</span><span class="token script language-javascript script-punctuation punctuation">=</span><span class="token script language-javascript punctuation">{</span><span class="token script language-javascript">isOpen</span><span class="token script language-javascript punctuation">}</span>\n</span><span class="token tag block">        <span class="token attr-name">onClose</span><span class="token script language-javascript script-punctuation punctuation">=</span><span class="token script language-javascript punctuation">{</span><span class="token script language-javascript punctuation">(</span><span class="token script language-javascript punctuation">)</span><span class="token script language-javascript"> </span><span class="token script language-javascript arrow operator">=></span><span class="token script language-javascript"> </span><span class="token script language-javascript function">setIsOpen</span><span class="token script language-javascript punctuation">(</span><span class="token script language-javascript boolean">false</span><span class="token script language-javascript punctuation">)</span><span class="token script language-javascript punctuation">}</span>\n</span><span class="token tag block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">        <span class="token attr-name">transition</span>\n</span><span class="token tag block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">        <span class="token attr-name">className</span><span class="token script language-javascript script-punctuation punctuation">=</span><span class="token script language-javascript punctuation">{</span><span class="token script language-javascript template-string template-punctuation string">`</span><span class="token script language-javascript template-string string"></span>\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          transition ease-out duration-300\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          data-[closed]:opacity-0\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          data-[closed]:data-[enter]:-translate-x-8\n</span><span class="token tag script language-javascript template-string string block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">          data-[closed]:data-[leave]:translate-x-8\n</span><span class="token tag block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token script language-javascript template-string string">        </span><span class="token script language-javascript template-string template-punctuation string">`</span><span class="token script language-javascript punctuation">}</span>\n</span><span class="token block"><span class="token tag">      </span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">        </span><span class="token punctuation">{</span><span class="token comment">/* Dialog content… */</span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;/</span><span class="token tag class-name">Dialog</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">    </span><span class="token tag punctuation">&lt;/</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">  </span><span class="token punctuation">)</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,p.jsxs)(a.p,{children:["And for transitioning regular HTML elements or other components, you can still use the ",(0,p.jsx)(a.code,{children:"<Transition>"})," component but with the new data attribute APIs:"]}),"\n",(0,p.jsx)(l,{style:"framed",color:"sky",code:'<pre class="language-jsx"><code class="language-jsx"><span class="token block"><span class="token keyword module">import</span><span class="token plain"> </span><span class="token imports punctuation">{</span><span class="token imports"> </span><span class="token imports maybe-class-name">Transition</span><span class="token imports"> </span><span class="token imports punctuation">}</span><span class="token plain"> </span><span class="token keyword module">from</span><span class="token plain"> </span><span class="token string">\'@headlessui/react\'</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain"></span><span class="token keyword module">import</span><span class="token plain"> </span><span class="token imports punctuation">{</span><span class="token imports"> useState </span><span class="token imports punctuation">}</span><span class="token plain"> </span><span class="token keyword module">from</span><span class="token plain"> </span><span class="token string">\'react\'</span><span class="token plain"></span>\n</span><span class="token plain block">\n</span><span class="token block"><span class="token plain"></span><span class="token keyword">function</span><span class="token plain"> </span><span class="token function maybe-class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">  </span><span class="token keyword">const</span><span class="token plain"> </span><span class="token punctuation">[</span><span class="token plain">isShowing</span><span class="token punctuation">,</span><span class="token plain"> setIsShowing</span><span class="token punctuation">]</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token plain"></span>\n</span><span class="token plain block">\n</span><span class="token block"><span class="token plain">  </span><span class="token keyword control-flow">return</span><span class="token plain"> </span><span class="token punctuation">(</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">    </span><span class="token tag punctuation">&lt;</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">      </span><span class="token tag punctuation">&lt;</span><span class="token tag">button</span><span class="token tag"> </span><span class="token tag attr-name">onClick</span><span class="token tag script language-javascript script-punctuation punctuation">=</span><span class="token tag script language-javascript punctuation">{</span><span class="token tag script language-javascript punctuation">(</span><span class="token tag script language-javascript punctuation">)</span><span class="token tag script language-javascript"> </span><span class="token tag script language-javascript arrow operator">=></span><span class="token tag script language-javascript"> </span><span class="token tag script language-javascript function">setIsShowing</span><span class="token tag script language-javascript punctuation">(</span><span class="token tag script language-javascript punctuation">(</span><span class="token tag script language-javascript parameter">isShowing</span><span class="token tag script language-javascript punctuation">)</span><span class="token tag script language-javascript"> </span><span class="token tag script language-javascript arrow operator">=></span><span class="token tag script language-javascript"> </span><span class="token tag script language-javascript operator">!</span><span class="token tag script language-javascript">isShowing</span><span class="token tag script language-javascript punctuation">)</span><span class="token tag script language-javascript punctuation">}</span><span class="token tag punctuation">></span><span class="token maybe-class-name">Toggle</span><span class="token tag punctuation">&lt;/</span><span class="token tag">button</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">      </span><span class="token tag punctuation">&lt;</span><span class="token tag class-name">Transition</span><span class="token tag"> </span><span class="token tag attr-name">show</span><span class="token tag script language-javascript script-punctuation punctuation">=</span><span class="token tag script language-javascript punctuation">{</span><span class="token tag script language-javascript">isShowing</span><span class="token tag script language-javascript punctuation">}</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">        </span><span class="token tag punctuation">&lt;</span><span class="token tag">div</span><span class="token tag"> </span><span class="token tag attr-name">className</span><span class="token tag attr-value punctuation attr-equals">=</span><span class="token tag attr-value punctuation">"</span><span class="token tag attr-value">transition duration-300 data-[closed]:opacity-0</span><span class="token tag attr-value punctuation">"</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">          </span><span class="token constant">I</span><span class="token plain"> will fade </span><span class="token keyword">in</span><span class="token plain"> and out</span>\n</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">        </span><span class="token tag punctuation">&lt;/</span><span class="token tag">div</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]"><span class="token plain">      </span><span class="token tag punctuation">&lt;/</span><span class="token tag class-name">Transition</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">    </span><span class="token tag punctuation">&lt;/</span><span class="token tag punctuation">></span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain">  </span><span class="token punctuation">)</span><span class="token plain"></span>\n</span><span class="token block"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,p.jsxs)(a.p,{children:["We’ve already updated all of Tailwind UI to use this new transition API and the code is a lot simpler and lighter. Take a look at the ",(0,p.jsx)(a.a,{href:"https://tailwindui.com/components/application-ui/overlays/modal-dialogs",children:"Modal Dialog"}),", ",(0,p.jsx)(a.a,{href:"https://tailwindui.com/components/application-ui/elements/dropdowns",children:"Dropdown"}),", ",(0,p.jsx)(a.a,{href:"https://tailwindui.com/components/application-ui/overlays/slide-overs",children:"Slide-over"}),", ",(0,p.jsx)(a.a,{href:"https://tailwindui.com/components/marketing/elements/flyout-menus",children:"Flyout Menu"}),", or ",(0,p.jsx)(a.a,{href:"https://tailwindui.com/components/application-ui/forms/select-menus",children:"Select Menu"})," components for more examples."]}),"\n",(0,p.jsx)(a.p,{children:"All of the existing APIs continue to work for backwards compatibility, but this new approach is what we’re going to recommend going forward."}),"\n",(0,p.jsxs)(a.p,{children:["Check out the updated ",(0,p.jsxs)(a.a,{href:"https://headlessui.com/react/transition",children:[(0,p.jsx)(a.code,{children:"Transition"})," component documentation"]})," to learn more."]}),"\n",(0,p.jsx)(a.hr,{}),"\n",(0,p.jsx)(n,{level:2,id:"rendering-multiple-dialogs-as-siblings",children:"Rendering multiple dialogs as siblings"}),"\n",(0,p.jsx)(a.p,{children:"In Headless UI v2.1 you can finally render multiple dialogs at the same time without nesting one inside the other."}),"\n",(0,p.jsx)(a.p,{children:"This can be really helpful when two unrelated parts of your application need to show a dialog at the same time — for example maybe you already have some sort of confirmation dialog open but another part of your app detects that you’ve lost network connectivity or your session has timed-out and needs to throw up a new dialog on top."}),"\n",(0,p.jsxs)(a.p,{children:["Here’s what something like that might look like with ",(0,p.jsx)(a.a,{href:"https://tailwindui.com/templates/catalyst",children:"Catalyst"}),", the application UI kit we’ve been working on recently:"]}),"\n",(0,p.jsxs)("div",{className:"relative rounded-2xl overflow-hidden",children:[(0,p.jsx)("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 pointer-events-none"}),(0,p.jsx)("video",{src:"https://assets.tailwindcss.com/blog%2F2024-06-21-headless-ui-v2-1%2Fheadlessui-sibling-dialogs.mp4",autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:"block m-0"})]}),"\n",(0,p.jsx)(a.p,{children:"We keep track of the order in which each dialog is opened, and whichever one was opened last is the one that will close when you press escape or click outside the dialog."}),"\n",(0,p.jsx)(a.hr,{}),"\n",(0,p.jsx)(a.p,{children:"To start using this stuff today, just install the latest version of Headless UI:"}),"\n",(0,p.jsx)(a.pre,{className:"language-sh",dangerouslySetInnerHTML:{__html:'<code class="language-sh">$ <span class="token function">npm</span> i @headlessui/react@latest</code>'}}),"\n",(0,p.jsxs)(a.p,{children:["If you run into any issues, let us know on ",(0,p.jsx)(a.a,{href:"https://github.com/tailwindlabs/headlessui",children:"GitHub"}),"!"]})]})}function u(s={}){return(0,p.jsx)(c,Object.assign({},s,{children:(0,p.jsx)(r,s)}))}var k=u;function g(s,a){throw Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}u.layoutProps={meta:i,slug:"2024-06-21-headless-ui-v2-1",tableOfContents:[{title:"Simplified transition API",slug:"simplified-transition-api",children:[]},{title:"Rendering multiple dialogs as siblings",slug:"rendering-multiple-dialogs-as-siblings",children:[]}]}},30196:function(s,a,n){"use strict";n.d(a,{$o:function(){return l},Vw:function(){return p},qm:function(){return e}});var t=n(85893);function p({children:s}){return(0,t.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,t.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,t.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,t.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:s})]})}function e({children:s}){return(0,t.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,t.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,t.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,t.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:s})]})}function l({children:s}){return(0,t.jsxs)("div",{className:"mt-6 -mb-1 flex space-x-2",children:[(0,t.jsx)("svg",{className:"flex-none w-5 h-5 text-slate-400 dark:text-slate-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,t.jsx)("p",{className:"m-0 text-slate-700 text-sm font-medium dark:text-slate-200",children:s})]})}},11151:function(s,a,n){"use strict";n.d(a,{Zo:function(){return o},ah:function(){return e}});var t=n(67294);let p=t.createContext({});function e(s){let a=t.useContext(p);return t.useMemo(()=>"function"==typeof s?s(a):{...a,...s},[a,s])}let l={};function o({components:s,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof s?s({}):s||l:e(s),t.createElement(p.Provider,{value:o},a)}}},function(s){s.O(0,[3430,6595,9495,224,1301,9774,2888,179],function(){return s(s.s=59700)}),_N_E=s.O()}]);