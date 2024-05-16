"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2369],{2013:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var i=t(4848),n=t(8453);const c={sidebar_position:1,title:"Installation"},l="SSE PDF Viewer",a={id:"ui/sse-pdf-viewer/index",title:"Installation",description:"A React component to view a PDF document. It's written in TypeScript, and powered by React hooks completely.",source:"@site/docs/ui/sse-pdf-viewer/index.md",sourceDirName:"ui/sse-pdf-viewer",slug:"/ui/sse-pdf-viewer/",permalink:"/docs/ui/sse-pdf-viewer/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"SSE PDF Viewer",permalink:"/docs/category/sse-pdf-viewer"},next:{title:"Introduction",permalink:"/docs/ui/sse-pdf-viewer/introduction"}},d={},r=[{value:"Features",id:"features",level:2},{value:"About",id:"about",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"sse-pdf-viewer",children:"SSE PDF Viewer"}),"\n",(0,i.jsx)(s.p,{children:"A React component to view a PDF document. It's written in TypeScript, and powered by React hooks completely."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"// Core viewer\r\nimport { Viewer } from '@sse-ui/pdf-core';\r\n\r\n// Plugins\r\nimport { defaultLayoutPlugin } from '@sse-ui/pdf-default-layout';\r\n\r\n// Import styles\r\nimport '@sse-ui/pdf-core/lib/styles/index.css';\r\nimport '@sse-ui/pdf-default-layout/lib/styles/index.css';\r\n\r\n// Create new plugin instance\r\nconst defaultLayoutPluginInstance = defaultLayoutPlugin();\r\n\r\n<Viewer\r\n    fileUrl='/assets/pdf-open-parameters.pdf'\r\n    plugins={[\r\n        // Register plugins\r\n        defaultLayoutPluginInstance,\r\n        ...\r\n    ]}\r\n/>\n"})}),"\n",(0,i.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Basic features"})}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Support password protected document"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Zooming: Support custom levels such as actual size, page fit, and page width"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Navigation between pages"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Can go to the first and last pages quickly"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Search for text"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Preview page thumbnails"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","View and navigate the table of contents"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","List and download attachments"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Rotating"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Text selection and hand tool modes"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Different scrolling modes"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Full screen mode"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Can open a file from local. Users can drag and drop a local file to view it"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Download file"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","View the document properties"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Support SSR"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Print"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Theming"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Dark mode"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Accessibility"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Customization"})}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","The toolbar can be customized easily"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","All text items can be localized in another language"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"about",children:"About"}),"\n",(0,i.jsxs)(s.p,{children:["This project is developed by ",(0,i.jsx)(s.em,{children:"SSE World"}),". I love building products and sharing knowledge."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://dev.to/sseworld",children:"DEV"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/sseworld",children:"Github"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var i=t(6540);const n={},c=i.createContext(n);function l(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);