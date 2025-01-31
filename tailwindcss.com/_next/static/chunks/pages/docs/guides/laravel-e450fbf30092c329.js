(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4108],{8861:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/laravel",function(){return s(98385)}])},26261:function(e,t,s){"use strict";s.d(t,{n:function(){return r}});var n=s(85893),i=s(86010),a=s(41664),l=s.n(a);function r({tabs:e,selectedTabIndex:t}){return(0,n.jsx)("div",{className:"flex overflow-auto mb-6 -mx-4 sm:-mx-6",children:(0,n.jsx)("div",{className:"flex-none min-w-full px-4 sm:px-6",children:(0,n.jsx)("ul",{className:"border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px",children:e.map((e,s)=>(0,n.jsx)("li",{children:(0,n.jsx)("h2",{children:(0,n.jsx)(l(),{href:e.href,scroll:!1,className:(0,i.Z)("flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px",s===t?"text-sky-500 border-current [&_code]:bg-sky-50":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800"),children:e.name})})},e.key||e.name))})})})}},53974:function(e,t,s){"use strict";s.d(t,{L:function(){return a}});var n=s(11163),i=s(67294);function a(){let e=(0,n.useRouter)(),[t,s]=(0,i.useState)(0);return(0,i.useEffect)(()=>s(window.location.hash),[]),(0,i.useEffect)(()=>{function n(){t!==window.location.hash&&s(window.location.hash)}return e.events.on("hashChangeComplete",n),()=>{e.events.off("hashChangeComplete",n)}},[e.events]),t}},52196:function(e,t,s){"use strict";s.d(t,{a:function(){return a}});var n=s(85893),i=s(76239);function a({title:e,description:t,children:s}){return(0,n.jsxs)(i.i,{children:[(0,n.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,n.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,n.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,n.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,n.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,n.jsx)("section",{className:"mb-16 relative",children:s})]})}},98385:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return c},default:function(){return p}});var n=s(85893),i=s(53974),a=s(72788),l=s(52196),r=s(39897),d=s(26261);let o=[{name:"Using Vite",href:"#vite",steps:[{title:"Create your project",body:()=>(0,n.jsxs)("p",{children:["Start by creating a new Laravel project if you don’t have one set up already. The most common approach is to use"," ",(0,n.jsxs)("a",{href:"https://laravel.com/docs/9.x#your-first-laravel-project",children:["the Composer ",(0,n.jsx)("code",{children:"create-project"})," command"]}),"."]}),code:{name:"Terminal",lang:"terminal",code:"composer create-project laravel/laravel my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,n.jsxs)("p",{children:["Install ",(0,n.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate both ",(0,n.jsx)("code",{children:"tailwind.config.js"})," and"," ",(0,n.jsx)("code",{children:"postcss.config.js"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:()=>(0,n.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,n.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,n.jsxs)("p",{children:["Add the ",(0,n.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,n.jsx)("code",{children:"./resources/css/app.css"})," file."]}),code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,n.jsxs)("p",{children:["Run your build process with ",(0,n.jsx)("code",{children:"npm run dev"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:()=>(0,n.jsxs)("p",{children:["Make sure your compiled CSS is included in the ",(0,n.jsx)("code",{children:"<head>"})," then start using Tailwind’s utility classes to style your content."]}),code:{name:"app.blade.php",lang:"html",code:`  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   @vite('resources/css/app.css')
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`}}]},{name:"Using Laravel Mix",href:"#mix",steps:[{title:"Install Tailwind CSS",body:()=>(0,n.jsxs)("p",{children:["Install ",(0,n.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and create your"," ",(0,n.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init"}},{title:"Add Tailwind to your Laravel Mix configuration",body:()=>(0,n.jsxs)("p",{children:["In your ",(0,n.jsx)("code",{children:"webpack.mix.js"})," file, add ",(0,n.jsx)("code",{children:"tailwindcss"})," as a PostCSS plugin."]}),code:{name:"webpack.mix.js",lang:"js",code:`  mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
>     require("tailwindcss"),
    ]);`}},{title:"Configure your template paths",body:()=>(0,n.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,n.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,n.jsxs)("p",{children:["Add the ",(0,n.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,n.jsx)("code",{children:"./resources/css/app.css"})," file."]}),code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,n.jsxs)("p",{children:["Run your build process with ",(0,n.jsx)("code",{children:"npm run watch"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run watch"}},{title:"Start using Tailwind in your project",body:()=>(0,n.jsxs)("p",{children:["Make sure your compiled CSS is included in the ",(0,n.jsx)("code",{children:"<head>"})," then start using Tailwind’s utility classes to style your content."]}),code:{name:"app.blade.php",lang:"html",code:`  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`}}]}];var c=!0;function p({code:e}){let t=(0,i.L)(),s=o.findIndex(e=>e.href===t);return -1===s&&(s=0),(0,n.jsxs)(l.a,{title:"Install Tailwind CSS with Laravel",description:"Setting up Tailwind CSS in a Laravel project.",children:[(0,n.jsx)(d.n,{tabs:o,selectedTabIndex:s}),(0,n.jsx)(r.R,{steps:o[s].steps,code:e[s]})]})}p.layoutProps={meta:{title:"Install Tailwind CSS with Laravel",description:"Setting up Tailwind CSS in a Laravel project.",section:"Installation"},Layout:a.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=8861)}),_N_E=e.O()}]);