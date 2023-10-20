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
      { text: 'Guide', link: '/zh/start', activeMatch: 'zh/start' },
      { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
      { text: 'ChangeLog', link: '/zh/changelog' },
      { text: '联系我们', link: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=c35kac73-d80b-4066-bcd0-2df6e6017188' },
    ],
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
          { text: 'Guide', link: '/zh/start', activeMatch: 'zh/start' },
          { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
          { text: 'ChangeLog', link: '/zh/changelog' },
          { text: '联系我们', link: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=c35kac73-d80b-4066-bcd0-2df6e6017188' },
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
          { text: 'Guide', link: '/en/start', activeMatch: 'en/start' },
          { text: 'API', link: '/en/api/guide.md' },
          { text: 'ChangeLog', link: '/en/changelog' },
          { text: 'Contact Us', link: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=ba0v0b79-adc7-4383-a8fc-14c75992441f' },
        ],
        sidebar: getEnSideBar(),
      },
    }
  },
})
