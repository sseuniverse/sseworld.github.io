"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9777],{1689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(4848),d=t(8453);const o={sidebar_position:19,title:"Zoom"},i="Zoom plugin",l={id:"ui/sse-pdf-viewer/plugin/zoom",title:"Zoom",description:"The zoom plugin provides a few components to zoom in or zoom out a PDF document. It also allows to customize these components.",source:"@site/docs/ui/sse-pdf-viewer/plugin/zoom.md",sourceDirName:"ui/sse-pdf-viewer/plugin",slug:"/ui/sse-pdf-viewer/plugin/zoom",permalink:"/docs/ui/sse-pdf-viewer/plugin/zoom",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,title:"Zoom"},sidebar:"tutorialSidebar",previous:{title:"Toolbar",permalink:"/docs/ui/sse-pdf-viewer/plugin/toolbar"},next:{title:"Other Packages",permalink:"/docs/category/other-packages"}},r={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"1. Import the plugin",id:"1-import-the-plugin",level:3},{value:"2. Create the plugin instance",id:"2-create-the-plugin-instance",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"zoom-plugin",children:"Zoom plugin"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"zoom"})," plugin provides a few components to zoom in or zoom out a PDF document. It also allows to customize these components."]}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> npm install @sse-ui/pdf-zoom;\n"})}),"\n",(0,s.jsx)(n.p,{children:"OR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> yarn add @sse-ui/pdf-zoom;\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"zoom"})," plugin is included in the ",(0,s.jsx)(n.a,{href:"/docs/ui/sse-pdf-viewer/plugin/toolbar",children:"toolbar"})," and ",(0,s.jsx)(n.a,{href:"/docs/ui/sse-pdf-viewer/plugin/default-layout",children:"default-layout"})," plugins"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"1-import-the-plugin",children:"1. Import the plugin"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { zoomPlugin } from "@sse-ui/pdf-zoom";\r\n\r\n// Import styles\r\nimport "@sse-ui/pdf-zoom/lib/styles/index.css";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-create-the-plugin-instance",children:"2. Create the plugin instance"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const zoomPluginInstance = zoomPlugin(props?: ZoomPluginProps)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"zoomPlugin()"})," function takes an optional ",(0,s.jsx)(n.code,{children:"ZoomPluginProps"})," parameter that consists of the following property:\r\n",(0,s.jsx)(n.em,{children:"(? denotes an optional property)"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"PROPERTY"}),(0,s.jsx)(n.th,{children:"TYPE"}),(0,s.jsx)(n.th,{children:"DESCRIPTION"}),(0,s.jsx)(n.th,{children:"FROM"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"enableShortcuts"}),"?"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Enable shortcuts"}),(0,s.jsx)(n.td,{children:"1.0.0"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"By default, users can use particular shortcuts to zoom in or zoom out the current document:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"SHORTCUT"}),(0,s.jsx)(n.th,{children:"ACTION"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"ctrl"})," + ",(0,s.jsx)(n.code,{children:"+"})]}),(0,s.jsx)(n.td,{children:"Zoom in the document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"ctrl"})," + ",(0,s.jsx)(n.code,{children:"-"})]}),(0,s.jsx)(n.td,{children:"Zoom out the document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"ctrl"})," + ",(0,s.jsx)(n.code,{children:"0"})]}),(0,s.jsx)(n.td,{children:"View the actual size of the document"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The plugin instance ",(0,s.jsx)(n.code,{children:"zoomPluginInstance"})," provides the following properties:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"PROPERTY"}),(0,s.jsx)(n.th,{children:"TYPE"}),(0,s.jsx)(n.th,{children:"DESCRIPTION"}),(0,s.jsx)(n.th,{children:"FROM"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CurrentScale"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"Show the current scale value"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Zoom"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"Customizable zoom button"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomIn"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"Customizable zoom in button"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomInButton"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The default zoom in button"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomInMenuItem"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The default zoom in menu item"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomOut"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"Customizable zoom out button"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomOutButton"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The default zoom out button"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomOutMenuItem"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The default zoom out menu item"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ZoomPopover"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactElement"})}),(0,s.jsx)(n.td,{children:"The default popover allows to zoom to specific level"}),(0,s.jsx)(n.td,{children:"1.0.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"zoomTo"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Function"})}),(0,s.jsx)(n.td,{children:"Zoom to specific level"}),(0,s.jsx)(n.td,{children:"1.0.0"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const d={},o=s.createContext(d);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);