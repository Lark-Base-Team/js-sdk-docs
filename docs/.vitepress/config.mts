import { defineConfig } from 'vitepress'
import { getZhSideBar } from './zh-sidebar';
import { getEnSideBar } from './en-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  base: '/js-sdk-docs/',
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/zh/start/core', activeMatch: 'zh/start/core' },
      { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
      { text: 'ChangeLog', link: '/zh/changelog' },
      { text: '联系我们', link: 'https://go.larkoffice.com/join-chat/bb7m3906-f1e1-47d2-ba50-372c088f75ca' },
    ],
    outline: [2, 3]
  },
  head: [
    ['link', { rel: 'icon', href: '/js-sdk-docs/logo.svg' }],
  ],
  title: 'Base JS SDK',
  description: 'Base JS SDK Docs',
  // sitemap: {
  // hostname: 'https://basejsapi.com',
  // },
  lang: 'zh',
  locales: {
    zh: {
      label: '中文',
      lang: 'zh',
      dir: '/zh',
      title: 'Base JS SDK',
      description: 'Base JS SDK Docs',
      themeConfig: {
        logo: '/logo.svg',
        search: {
          provider: 'local'
        },
        nav: [
          { text: 'Guide', link: '/zh/start/core', activeMatch: 'zh/start/core' },
          { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
          { text: 'ChangeLog', link: '/zh/changelog' },
          { text: 'FAQ', link: '/zh/FAQ' },
          { text: '联系我们', link: 'https://go.larkoffice.com/join-chat/bb7m3906-f1e1-47d2-ba50-372c088f75ca' },
          { text: '反馈建议', link: 'https://bytedance.larkoffice.com/share/base/form/shrcnDFmrzigVo1HnSzlxaQLbSe' },
        ],
        sidebar: getZhSideBar(),
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: '/en',
      title: 'Base JS SDK',
      description: 'Base JS SDK Docs',
      themeConfig: {
        logo: '/logo.svg',
        search: {
          provider: 'local'
        },
        nav: [
          { text: 'Guide', link: '/en/start/core', activeMatch: 'en/start/core' },
          { text: 'API', link: '/en/api/guide.md' },
          { text: 'ChangeLog', link: '/en/changelog' },
          { text: 'FAQ', link: '/en/changelog' },
          { text: 'Contact Us', link: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=ba0v0b79-adc7-4383-a8fc-14c75992441f' },
          { text: 'Feedback', link: 'https://bytedance.larkoffice.com/share/base/form/shrcnDFmrzigVo1HnSzlxaQLbSe' },
        ],
        sidebar: getEnSideBar(),
      },
    }
  },
})
