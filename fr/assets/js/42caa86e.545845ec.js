"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7513],{153:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=n(4848),o=n(8453);const t={sidebar_position:4,title:"Intregate ESM"},i=void 0,l={id:"ui/code-editor/Integrate-ESM",title:"Intregate ESM",description:"Integrating the ESM version of the Monaco Editor",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ui/code-editor/Integrate-ESM.md",sourceDirName:"ui/code-editor",slug:"/ui/code-editor/Integrate-ESM",permalink:"/fr/docs/ui/code-editor/Integrate-ESM",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Intregate ESM"},sidebar:"tutorialSidebar",previous:{title:"Intregate AMD",permalink:"/fr/docs/ui/code-editor/Intregate-AMD"},next:{title:"SSE PDF Viewer",permalink:"/fr/docs/category/sse-pdf-viewer"}},a={},c=[{value:"Integrating the ESM version of the Monaco Editor",id:"integrating-the-esm-version-of-the-monaco-editor",level:2},{value:"Using webpack",id:"using-webpack",level:3},{value:"Option 1: Using the SSE Editor WebPack Plugin",id:"option-1-using-the-sse-editor-webpack-plugin",level:3},{value:"Option 2: Using plain webpack",id:"option-2-using-plain-webpack",level:3},{value:"Using parcel",id:"using-parcel",level:3},{value:"Using Vite",id:"using-vite",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"integrating-the-esm-version-of-the-monaco-editor",children:"Integrating the ESM version of the Monaco Editor"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#using-webpack",children:"Webpack"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#option-1-using-the-sse-editor-webpack-plugin",children:"Option 1: Using the Monaco Editor WebPack Plugin"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#option-2-using-plain-webpack",children:"Option 2: Using plain webpack"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#using-parcel",children:"Parcel"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#using-vite",children:"Vite"})}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"using-webpack",children:"Using webpack"}),"\n",(0,s.jsx)(r.p,{children:"Here is the most basic script that imports the editor using ESM with webpack."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"option-1-using-the-sse-editor-webpack-plugin",children:"Option 1: Using the SSE Editor WebPack Plugin"}),"\n",(0,s.jsx)(r.p,{children:"This is the easiest method, and it allows for options to be passed into the plugin in order to select only a subset of editor features or editor languages.which is a community authored plugin."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"index.js"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'import * as monaco from "@sseworld/code-editor";\r\n\r\nmonaco.editor.create(document.getElementById("container"), {\r\n  value: ["function x() {", \'\\tconsole.log("Hello world!");\', "}"].join("\\n"),\r\n  language: "javascript",\r\n});\n'})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"webpack.config.js"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'const MonacoWebpackPlugin = require("@ssephox/editor-webpack-plugin");\r\nconst path = require("path");\r\n\r\nmodule.exports = {\r\n  entry: "./index.js",\r\n  output: {\r\n    path: path.resolve(__dirname, "dist"),\r\n    filename: "app.js",\r\n  },\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.css$/,\r\n        use: ["style-loader", "css-loader"],\r\n      },\r\n      {\r\n        test: /\\.ttf$/,\r\n        use: ["file-loader"],\r\n      },\r\n    ],\r\n  },\r\n  plugins: [new MonacoWebpackPlugin()],\r\n};\n'})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"option-2-using-plain-webpack",children:"Option 2: Using plain webpack"}),"\n",(0,s.jsxs)(r.p,{children:["Full working samples are available at ",(0,s.jsx)(r.a,{href:"https://github.com/microsoft/@sseworld/code-editor/tree/main/samples/browser-esm-webpack",children:"https://github.com/microsoft/@sseworld/code-editor/tree/main/samples/browser-esm-webpack"})," or ",(0,s.jsx)(r.a,{href:"https://github.com/microsoft/@sseworld/code-editor/tree/main/samples/browser-esm-webpack-small",children:"https://github.com/microsoft/@sseworld/code-editor/tree/main/samples/browser-esm-webpack-small"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"index.js"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'import * as monaco from "@sseworld/code-editor";\r\n\r\n// Since packaging is done by you, you need\r\n// to instruct the editor how you named the\r\n// bundles that contain the web workers.\r\nself.MonacoEnvironment = {\r\n  getWorkerUrl: function (moduleId, label) {\r\n    if (label === "json") {\r\n      return "./json.worker.bundle.js";\r\n    }\r\n    if (label === "css" || label === "scss" || label === "less") {\r\n      return "./css.worker.bundle.js";\r\n    }\r\n    if (label === "html" || label === "handlebars" || label === "razor") {\r\n      return "./html.worker.bundle.js";\r\n    }\r\n    if (label === "typescript" || label === "javascript") {\r\n      return "./ts.worker.bundle.js";\r\n    }\r\n    return "./editor.worker.bundle.js";\r\n  },\r\n};\r\n\r\nmonaco.editor.create(document.getElementById("container"), {\r\n  value: ["function x() {", \'\\tconsole.log("Hello world!");\', "}"].join("\\n"),\r\n  language: "javascript",\r\n});\n'})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"webpack.config.js"}),":"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'const path = require("path");\r\n\r\nmodule.exports = {\r\n  entry: {\r\n    app: "./index.js",\r\n    // Package each language\'s worker and give these filenames in `getWorkerUrl`\r\n    "editor.worker": "@sseworld/code-editor/esm/vs/editor/editor.worker.js",\r\n    "json.worker": "@sseworld/code-editor/esm/vs/language/json/json.worker",\r\n    "css.worker": "@sseworld/code-editor/esm/vs/language/css/css.worker",\r\n    "html.worker": "@sseworld/code-editor/esm/vs/language/html/html.worker",\r\n    "ts.worker": "@sseworld/code-editor/esm/vs/language/typescript/ts.worker",\r\n  },\r\n  output: {\r\n    globalObject: "self",\r\n    filename: "[name].bundle.js",\r\n    path: path.resolve(__dirname, "dist"),\r\n  },\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.css$/,\r\n        use: ["style-loader", "css-loader"],\r\n      },\r\n      {\r\n        test: /\\.ttf$/,\r\n        use: ["file-loader"],\r\n      },\r\n    ],\r\n  },\r\n};\n'})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"using-parcel",children:"Using parcel"}),"\n",(0,s.jsxs)(r.p,{children:["A full working sample is available at ",(0,s.jsx)(r.a,{href:"https://github.com/microsoft/@sseworld/code-editor/tree/main/samples/browser-esm-parcel",children:"https://github.com/microsoft/@sseworld/code-editor/tree/main/samples/browser-esm-parcel"})]}),"\n",(0,s.jsxs)(r.p,{children:["When using parcel, we need to use the ",(0,s.jsx)(r.code,{children:"getWorkerUrl"})," function and build the workers seperately from our main source. To simplify things, we can write a tiny bash script to build the workers for us."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"index.js"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'import * as monaco from "@sseworld/code-editor";\r\n\r\nself.MonacoEnvironment = {\r\n  getWorkerUrl: function (moduleId, label) {\r\n    if (label === "json") {\r\n      return "./json.worker.js";\r\n    }\r\n    if (label === "css" || label === "scss" || label === "less") {\r\n      return "./css.worker.js";\r\n    }\r\n    if (label === "html" || label === "handlebars" || label === "razor") {\r\n      return "./html.worker.js";\r\n    }\r\n    if (label === "typescript" || label === "javascript") {\r\n      return "./ts.worker.js";\r\n    }\r\n    return "./editor.worker.js";\r\n  },\r\n};\r\n\r\nmonaco.editor.create(document.getElementById("container"), {\r\n  value: ["function x() {", \'\\tconsole.log("Hello world!");\', "}"].join("\\n"),\r\n  language: "javascript",\r\n});\n'})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"build_workers.sh"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:'ROOT=$PWD/node_modules/@sseworld/code-editor/esm/vs\r\nOPTS="--no-source-maps --log-level 1"        # Parcel options - See: https://parceljs.org/cli.html\r\n\r\nparcel build $ROOT/language/json/json.worker.js $OPTS\r\nparcel build $ROOT/language/css/css.worker.js $OPTS\r\nparcel build $ROOT/language/html/html.worker.js $OPTS\r\nparcel build $ROOT/language/typescript/ts.worker.js $OPTS\r\nparcel build $ROOT/editor/editor.worker.js $OPTS\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Then, simply run ",(0,s.jsx)(r.code,{children:"sh ./build_workers.sh && parcel index.html"}),". This builds the workers into the same directory as your main bundle (usually ",(0,s.jsx)(r.code,{children:"./dist"}),"). If you want to change the ",(0,s.jsx)(r.code,{children:"--out-dir"})," of the workers, you must change the paths in ",(0,s.jsx)(r.code,{children:"index.js"})," to reflect their new location."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["note - the ",(0,s.jsx)(r.code,{children:"getWorkerUrl"})," paths are relative to the build directory of your src bundle"]})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"using-vite",children:"Using Vite"}),"\n",(0,s.jsxs)(r.p,{children:["Adding monaco editor to ",(0,s.jsx)(r.a,{href:"https://vitejs.dev/",children:"Vite"})," is simple since it has built-in support for web workers. You only need to implement the ",(0,s.jsx)(r.code,{children:"getWorker"})," function (NOT the ",(0,s.jsx)(r.code,{children:"getWorkerUrl"}),") to use Vite's output (",(0,s.jsx)(r.a,{href:"https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046",children:"Source"}),"):"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'import * as monaco from "@sseworld/code-editor";\r\n\r\nself.MonacoEnvironment = {\r\n  getWorker: function (workerId, label) {\r\n    const getWorkerModule = (moduleUrl, label) => {\r\n      return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleUrl), {\r\n        name: label,\r\n        type: "module",\r\n      });\r\n    };\r\n\r\n    switch (label) {\r\n      case "json":\r\n        return getWorkerModule(\r\n          "/@sseworld/code-editor/esm/vs/language/json/json.worker?worker",\r\n          label\r\n        );\r\n      case "css":\r\n      case "scss":\r\n      case "less":\r\n        return getWorkerModule(\r\n          "/@sseworld/code-editor/esm/vs/language/css/css.worker?worker",\r\n          label\r\n        );\r\n      case "html":\r\n      case "handlebars":\r\n      case "razor":\r\n        return getWorkerModule(\r\n          "/@sseworld/code-editor/esm/vs/language/html/html.worker?worker",\r\n          label\r\n        );\r\n      case "typescript":\r\n      case "javascript":\r\n        return getWorkerModule(\r\n          "/@sseworld/code-editor/esm/vs/language/typescript/ts.worker?worker",\r\n          label\r\n        );\r\n      default:\r\n        return getWorkerModule(\r\n          "/@sseworld/code-editor/esm/vs/editor/editor.worker?worker",\r\n          label\r\n        );\r\n    }\r\n  },\r\n};\r\n\r\nmonaco.editor.create(document.getElementById("container"), {\r\n  value: "function hello() {\\n\\talert(\'Hello world!\');\\n}",\r\n  language: "javascript",\r\n});\n'})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var s=n(6540);const o={},t=s.createContext(o);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);