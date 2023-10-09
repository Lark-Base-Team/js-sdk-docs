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
      { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
    ],
  },
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }],
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
          { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
        ],
        head: [
          ['link', { rel: 'icon', href: '/logo.svg' }],
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
        head: [
          ['link', { rel: 'icon', href: '/logo.svg' }],
        ],
        nav: [
          { text: 'API', link: '/en/api/guide.md' },
        ],
        sidebar: getEnSideBar(),
      },
    }
  },
})
