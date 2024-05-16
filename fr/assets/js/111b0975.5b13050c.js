"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9465],{1912:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(4848),r=i(8453);const t={sidebar_position:2,title:"Bookmark"},l="Bookmark plugin",o={id:"ui/sse-pdf-viewer/plugin/bookmark",title:"Bookmark",description:"The bookamrk plugin lists all outline bookmarks of a PDF document. Clicking a bookmark item will jump to its associate sections",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ui/sse-pdf-viewer/plugin/bookmark.md",sourceDirName:"ui/sse-pdf-viewer/plugin",slug:"/ui/sse-pdf-viewer/plugin/bookmark",permalink:"/fr/docs/ui/sse-pdf-viewer/plugin/bookmark",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Bookmark"},sidebar:"tutorialSidebar",previous:{title:"Attachment",permalink:"/fr/docs/ui/sse-pdf-viewer/plugin/attachment"},next:{title:"Default Layout",permalink:"/fr/docs/ui/sse-pdf-viewer/plugin/default-layout"}},d={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"1. Import the plugin and styles",id:"1-import-the-plugin-and-styles",level:3},{value:"2. Create the plugin instance",id:"2-create-the-plugin-instance",level:3},{value:"3. Register the plugin",id:"3-register-the-plugin",level:3},{value:"Properties",id:"properties",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bookmark-plugin",children:"Bookmark plugin"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bookamrk"})," plugin lists all outline bookmarks of a PDF document. Clicking a bookmark item will jump to its associate sections"]}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> npm install @sse-ui/pdf-bookmark\n"})}),"\n",(0,s.jsx)(n.p,{children:"OR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> yarn add @sse-ui/pdf-bookmark\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bookmark"})," plugin is included in the ",(0,s.jsx)(n.a,{href:"/docs/ui/sse-pdf-viewer/plugin/default-layout",children:"default-layout"})," plugin"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"1-import-the-plugin-and-styles",children:"1. Import the plugin and styles"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { bookmarkPlugin } from "@sse-ui/pdf-bookmark";\r\n\r\n// Import styles\r\nimport "@sse-ui/pdf-bookmark/lib/styles/index.css";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-create-the-plugin-instance",children:"2. Create the plugin instance"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const bookmarkPluginInstance = bookmarkPlugin();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The plugin instance ",(0,s.jsx)(n.code,{children:"bookmarkPluginInstance"})," provides the following property:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"PROPERTY"}),(0,s.jsx)(n.th,{children:"TYPE"}),(0,s.jsx)(n.th,{children:"DESCRIPTION"}),(0,s.jsx)(n.th,{children:"FROM"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Bookmarks"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The component lists available bookmarks"}),(0,s.jsx)(n.td,{children:"1.0.0"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"3-register-the-plugin",children:"3. Register the plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Register the ",(0,s.jsx)(n.code,{children:"bookmark"})," plugin instance, and use the ",(0,s.jsx)(n.code,{children:"<Bookmarks />"})," component to list all bookmarks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { Bookmarks } = bookmarkPluginInstance;\r\n\r\n<Viewer plugins={[bookmarkPluginInstance]}> />;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bookmark"})," plugin provides other properties as following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { DownArrowIcon, RightArrowIcon } from "@sse-ui/pdf-bookmark";\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"PROPERTY"}),(0,s.jsx)(n.th,{children:"TYPE"}),(0,s.jsx)(n.th,{children:"DESCRIPTION"}),(0,s.jsx)(n.th,{children:"FROM"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DownArrowIcon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The down arrow icon"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RightArrowIcon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The right arrow icon"}),(0,s.jsx)(n.td,{children:"1.0.0"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);