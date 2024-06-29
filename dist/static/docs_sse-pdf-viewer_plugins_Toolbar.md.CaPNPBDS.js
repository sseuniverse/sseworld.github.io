import{_ as t,c as e,o as i,a3 as a}from"./chunks/framework.CerNch-K.js";const k=JSON.parse('{"title":"Toolbar","description":"","frontmatter":{"title":"Toolbar"},"headers":[],"relativePath":"docs/sse-pdf-viewer/plugins/Toolbar.md","filePath":"docs/sse-pdf-viewer/plugins/Toolbar.md"}'),s={name:"docs/sse-pdf-viewer/plugins/Toolbar.md"},n=a(`<h1 id="toolbar-plugin" tabindex="-1">Toolbar plugin <a class="header-anchor" href="#toolbar-plugin" aria-label="Permalink to &quot;Toolbar plugin&quot;">​</a></h1><p>The <code>toolbar</code> plugin combines different parts provided by other plugins such as</p><ul><li><a href="/docs/sse-pdf-viewer/plugins/Full-screen">Full Screen</a> button</li><li><a href="/docs/sse-pdf-viewer/plugins/Get-file">Get File</a> button</li><li><a href="/docs/sse-pdf-viewer/plugins/Open">Open</a> button</li><li><a href="/docs/sse-pdf-viewer/plugins/Page-navigation">Page Navigation</a> buttons</li><li><a href="/docs/sse-pdf-viewer/plugins/Print">Print</a> button</li><li><a href="/docs/sse-pdf-viewer/plugins/Rotate">Rotate</a> buttons</li><li><a href="/docs/sse-pdf-viewer/plugins/Search">Search</a> button</li><li><a href="/docs/sse-pdf-viewer/plugins/Theme">Theme</a> button</li><li><a href="/docs/sse-pdf-viewer/plugins/Zoom">Zoom</a> buttons</li></ul><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; npm install @sse-ui/pdf-toolbar;</span></span></code></pre></div><p>OR</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; yarn add @sse-ui/pdf-toolbar;</span></span></code></pre></div><blockquote><p>The <code>toolbar</code> plugin is included in the <a href="/docs/sse-pdf-viewer/plugins/Default-layout">default-layout</a> plugins</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="_1-import-the-plugin" tabindex="-1">1. Import the plugin <a class="header-anchor" href="#_1-import-the-plugin" aria-label="Permalink to &quot;1. Import the plugin&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { toolbarPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-toolbar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import styles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-toolbar/lib/styles/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-create-the-plugin-instance" tabindex="-1">2. Create the plugin instance <a class="header-anchor" href="#_2-create-the-plugin-instance" aria-label="Permalink to &quot;2. Create the plugin instance&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> toolbarPluginInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toolbarPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToolbarPluginProps);</span></span></code></pre></div><p>See the <a href="https://react-pdf-viewer.dev/examples/create-a-toolbar-with-more-options/" target="_blank" rel="noreferrer">Create a toolbar with more options</a> example for more details about <code>ToolbarPluginProps</code>. The plugin instance <code>toolbarPluginInstance</code> provides the following property:</p><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>Toolbar</code></td><td><code>ReactElement</code></td><td>The default toolbar</td><td>1.0.0</td></tr><tr><td><code>fullScreenPluginInstance</code></td><td><code>FullScreenPlugin</code></td><td>The instance of the Full Screen plugin</td><td>1.0.0</td></tr><tr><td><code>getFilePluginInstance</code></td><td><code>GetFilePlugin</code></td><td>The instance of the Get File plugin</td><td>1.0.0</td></tr><tr><td><code>openPluginInstance</code></td><td><code>OpenPlugin</code></td><td>The instance of the Open plugin</td><td>1.0.0</td></tr><tr><td><code>pageNavigationPluginInstance</code></td><td><code>PageNavigationPlugin</code></td><td>The instance of the Page Navigation plugin</td><td>1.0.0</td></tr><tr><td><code>printPluginInstance</code></td><td><code>PrintPlugin</code></td><td>The instance of the Print plugin</td><td>1.0.0</td></tr><tr><td><code>propertiesPluginInstance</code></td><td><code>PropertiesPlugin</code></td><td>The instance of the Properties plugin</td><td>1.0.0</td></tr><tr><td><code>renderDefaultToolbar</code></td><td><code>Function</code></td><td>Render a custom toolbar based on the default toolbar. See this example</td><td>1.0.0</td></tr><tr><td><code>rotatePluginInstance</code></td><td><code>RotatePlugin</code></td><td>The instance of the Rotate plugin</td><td>1.0.0</td></tr><tr><td><code>scrollModePluginInstance</code></td><td><code>ScrollModePlugin</code></td><td>The instance of the Scroll Mode plugin</td><td>1.0.0</td></tr><tr><td><code>searchPluginInstance</code></td><td><code>SearchPlugin</code></td><td>The instance of the Search plugin</td><td>1.0.0</td></tr><tr><td><code>selectionModePluginInstance</code></td><td><code>SelectionModePlugin</code></td><td>The instance of the Selection Mode plugin</td><td>1.0.0</td></tr><tr><td><code>themePluginInstance</code></td><td><code>ThemePlugin</code></td><td>The instance of the Theme plugin</td><td>1.0.0</td></tr><tr><td><code>zoomPluginInstance</code></td><td><code>ZoomPlugin</code></td><td>The instance of the Zoom plugin</td><td>1.0.0</td></tr></tbody></table><h3 id="_3-register-the-plugin" tabindex="-1">3. Register the plugin <a class="header-anchor" href="#_3-register-the-plugin" aria-label="Permalink to &quot;3. Register the plugin&quot;">​</a></h3><p>Register the <code>toolbar</code> plugin instance:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Viewer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[toolbarPluginInstance]} /&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The <code>toolbar</code> plugin provides other useful property as following:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { MoreIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@sse-ui/pdf-toolbar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><table tabindex="0"><thead><tr><th>PROPERTY</th><th>TYPE</th><th>DESCRIPTION</th><th>FROM</th></tr></thead><tbody><tr><td><code>MoreIcon</code></td><td><code>ReactElement</code></td><td>The three vertical dots icon</td><td>1.0.0</td></tr></tbody></table>`,22),d=[n];function o(l,r,p,h,c,u){return i(),e("div",null,d)}const b=t(s,[["render",o]]);export{k as __pageData,b as default};
