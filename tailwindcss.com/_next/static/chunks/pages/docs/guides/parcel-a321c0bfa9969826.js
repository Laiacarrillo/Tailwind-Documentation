(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4331],{56933:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/parcel",function(){return n(59835)}])},52196:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var i=n(85893),s=n(76239);function l({title:e,description:t,children:n}){return(0,i.jsxs)(s.i,{children:[(0,i.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,i.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,i.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,i.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,i.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,i.jsx)("section",{className:"mb-16 relative",children:n})]})}},59835:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return r}});var i=n(85893),s=n(72788),l=n(52196),a=n(39897);let d=[{title:"Create your project",body:()=>(0,i.jsxs)("p",{children:["Start by creating a new Parcel project if you don’t have one set up already. The most common approach is to add Parcel as a dev-dependency to your project as outlined in their"," ",(0,i.jsx)("a",{href:"https://parceljs.org/getting-started/webapp/",children:"getting started guide"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"mkdir my-project\ncd my-project\nnpm init -y\nnpm install -D parcel\nmkdir src\ntouch src/index.html"}},{title:"Install Tailwind CSS",body:()=>(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate ",(0,i.jsx)("code",{children:"tailwind.config.js"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss\nnpx tailwindcss init"}},{title:"Configure PostCSS",body:()=>(0,i.jsxs)("p",{children:["Create a ",(0,i.jsx)("code",{children:".postcssrc"})," file in your project root, and enable the"," ",(0,i.jsx)("code",{children:"tailwindcss"})," plugin."]}),code:{name:".postcssrc",lang:"json",code:`{
  "plugins": {
    "tailwindcss": {}
  }
}`}},{title:"Configure your template paths",body:()=>(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./src/**/*.{html,js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,i.jsxs)("p",{children:["Create a ",(0,i.jsx)("code",{children:"./src/index.css"})," file and add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers."]}),code:{name:"index.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npx parcel src/index.html"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npx parcel src/index.html"}},{title:"Start using Tailwind in your project",body:()=>(0,i.jsxs)("p",{children:["Add your CSS file to the ",(0,i.jsx)("code",{children:"<head>"})," and start using Tailwind’s utility classes to style your content."]}),code:{name:"index.html",lang:"html",code:`  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="./index.css" type="text/css" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`}}];var c=!0;function r({code:e}){return(0,i.jsx)(l.a,{title:"Install Tailwind CSS with Parcel",description:"Setting up Tailwind CSS in a Parcel project.",children:(0,i.jsx)(a.R,{steps:d,code:e})})}r.layoutProps={meta:{title:"Install Tailwind CSS with Parcel",description:"Setting up Tailwind CSS in a Parcel project.",section:"Installation"},Layout:s.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=56933)}),_N_E=e.O()}]);