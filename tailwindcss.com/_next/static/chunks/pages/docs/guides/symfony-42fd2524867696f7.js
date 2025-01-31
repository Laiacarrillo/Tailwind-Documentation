(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5957],{1586:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/symfony",function(){return n(33781)}])},52196:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var s=n(85893),i=n(76239);function o({title:e,description:t,children:n}){return(0,s.jsxs)(i.i,{children:[(0,s.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,s.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,s.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:e}),(0,s.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,s.jsx)("section",{className:"mb-16 relative",children:n})]})}},33781:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return d}});var s=n(85893),i=n(72788),o=n(52196),l=n(39897);let a=[{title:"Create your project",body:()=>(0,s.jsxs)("p",{children:["Start by creating a new Symfony project if you don’t have one set up already. The most common approach is to use ",(0,s.jsx)("a",{href:"https://symfony.com/download",children:"the Symfony Installer"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"symfony new --webapp my-project\ncd my-project"}},{title:"Install Webpack Encore",body:()=>(0,s.jsxs)("p",{children:["Install Webpack Encore, which handles building your assets. See"," ",(0,s.jsx)("a",{href:"https://symfony.com/doc/current/frontend.html",children:"the documentation"})," for more information."]}),code:{name:"Terminal",lang:"terminal",code:"composer require symfony/webpack-encore-bundle"}},{title:"Install Tailwind CSS",body:()=>(0,s.jsxs)("p",{children:["Using npm, install ",(0,s.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, as well as"," ",(0,s.jsx)("code",{children:"postcss-loader"}),", and then run the init command to generate both"," ",(0,s.jsx)("code",{children:"tailwind.config.js"})," and ",(0,s.jsx)("code",{children:"postcss.config.js"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p"}},{title:"Enable PostCSS support",body:()=>(0,s.jsxs)("p",{children:["In your ",(0,s.jsx)("code",{children:"webpack.config.js"})," file, enable the PostCSS Loader. See"," ",(0,s.jsx)("a",{href:"https://symfony.com/doc/current/frontend/encore/postcss.html",children:"the documentation"})," ","for more information."]}),code:{name:"webpack.config.js",lang:"js",code:`  Encore
    // ...
>   .enablePostCssLoader()
  ;`}},{title:"Configure your template paths",body:()=>(0,s.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,s.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./assets/**/*.js",
>     "./templates/**/*.html.twig",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,s.jsxs)("p",{children:["Add the ",(0,s.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,s.jsx)("code",{children:"./assets/styles/app.css"})," file."]}),code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:()=>(0,s.jsxs)("p",{children:["Run your build process with ",(0,s.jsx)("code",{children:"npm run watch"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm run watch"}},{title:"Start using Tailwind in your project",body:()=>(0,s.jsxs)("p",{children:["Make sure your compiled CSS is included in the ",(0,s.jsx)("code",{children:"<head>"})," then start using Tailwind’s utility classes to style your content."]}),code:{name:"base.html.twig",lang:"html",code:`  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {% block stylesheets %}
      {{ encore_entry_link_tags('app') }}
    {% endblock %}
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`}}];var c=!0;function d({code:e}){return(0,s.jsx)(o.a,{title:"Install Tailwind CSS with Symfony",description:"Setting up Tailwind CSS in a Symfony project.",children:(0,s.jsx)(l.R,{steps:a,code:e})})}d.layoutProps={meta:{title:"Install Tailwind CSS with Symfony",description:"Setting up Tailwind CSS in a Symfony project.",section:"Installation"},Layout:i.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=1586)}),_N_E=e.O()}]);