import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SSE Documentation',
  description: 'Documentation Made By SSE with Love',
  cleanUrls: true,
  outDir: './dist',
  assetsDir: 'static',
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Members', link: '/members' },
      { text: 'Documentation', link: '/docs' },
      { text: 'Packages', items: [
          { text: 'Code Editor', link: '/docs/code-editor/Installation', icon: 'mdi:code-brackets', },        
          { text: 'SSE PDF Viewer', link: '/docs/sse-pdf-viewer/Installation', icon: 'mdi:file-pdf', },
        ] 
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SSE World',
      // links: [
      //   { text: 'GitHub', link: 'https://github.com/sseworld' },
      // ],
    },

    editLink: {
      pattern:
        'https://github.com/sseworld/sseworld.github.io/edit/master/:path',
    },

    sidebar: {
      "/docs": [
          { text: 'Code Editor', link: '/docs/code-editor/Installation', icon: 'mdi:code-brackets', },        
          { text: 'SSE PDF Viewer', link: '/docs/sse-pdf-viewer/Installation', icon: 'mdi:file-pdf', },        
        ],
      "/docs/code-editor/": [
        {        
          text: 'Go back', link: '/docs/', icon: 'mdi:KeyboardArrowLeft'
        },
        {
          text: 'Code Editor',
          items: [
            { text: 'Installation', link: '/docs/code-editor/Installation' },
            { text: 'Introduction', link: '/docs/code-editor/Introduction' },
            { text: 'Integrate-AMD', link: '/docs/code-editor/Integrate-AMD' },
            { text: 'Integrate-ESM', link: '/docs/code-editor/Integrate-ESM' },
          ],
        },
      ],
      "/docs/sse-pdf-viewer/": [
        {        
          text: 'Go back', link: '/docs/', icon: 'mdi:KeyboardArrowLeft'
        },
        {
          text: 'SSE PDF Viewer',
          items: [
            { text: 'Installation', link: '/docs/sse-pdf-viewer/Installation' },
            { text: 'Introduction', link: '/docs/sse-pdf-viewer/Introduction' },
            { text: 'Localisation', link: '/docs/sse-pdf-viewer/Localisation' },
            { text: 'Plugins', items: [
                { text: 'Attachment', link: '/docs/sse-pdf-viewer/plugins/Attachment' },
                { text: 'Bookmark', link: '/docs/sse-pdf-viewer/plugins/Bookmark' },
                { text: 'Default Layout', link: '/docs/sse-pdf-viewer/plugins/Default-layout' },
                { text: 'Drop', link: '/docs/sse-pdf-viewer/plugins/Drop' },
                { text: 'Full Screen', link: '/docs/sse-pdf-viewer/plugins/Full-screen' },
                { text: 'Get File', link: '/docs/sse-pdf-viewer/plugins/Get-file' },
                { text: 'Highlight', link: '/docs/sse-pdf-viewer/plugins/Highlight' },
                { text: 'Locale Switcher', link: '/docs/sse-pdf-viewer/plugins/Locale-switcher' },
                { text: 'Open', link: '/docs/sse-pdf-viewer/plugins/Open' },
                { text: 'Page Navigation', link: '/docs/sse-pdf-viewer/plugins/Page-navigation' },
                { text: 'Properties', link: '/docs/sse-pdf-viewer/plugins/Properties' },
                { text: 'Rotate', link: '/docs/sse-pdf-viewer/plugins/Rotate' },
                { text: 'Scroll Mode', link: '/docs/sse-pdf-viewer/plugins/Scroll-mode' },
                { text: 'Search', link: '/docs/sse-pdf-viewer/plugins/Search' },
                { text: 'Selection Mode', link: '/docs/sse-pdf-viewer/plugins/Selection-mode' },
                { text: 'Theme', link: '/docs/sse-pdf-viewer/plugins/Theme' },
                { text: 'Thumbnail', link: '/docs/sse-pdf-viewer/plugins/Thumbnail' },
                { text: 'Toolbar', link: '/docs/sse-pdf-viewer/plugins/Toolbar' },
                { text: 'Zoom', link: '/docs/sse-pdf-viewer/plugins/Zoom' },
              ],
            },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sseworld/sseworld.github.io',
      },
    ],
  },
});
