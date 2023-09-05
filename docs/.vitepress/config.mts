import { defineConfig } from 'vitepress'

const getZhSideBar = () => (
  {
    'zh/api': {
      base: '/zh/api/',
      items: [
        {
          text: '主体模块',
          collapsed: false,
          items: [
            {
              text: 'API 引导',
              link: 'guide'
            },
            {
              text: 'Base 模块',
              link: 'base',
            },
            {
              text: 'Table 模块',
              link: 'table'
            },
            {
              text: 'View 模块',
              link: 'view'
            },
            {
              text: 'Record 模块',
              link: 'record',
            },
            {
              text: 'Cell 模块',
              link: 'cell',
            },
            {
              text: 'Bridge 模块',
              link: 'bridge'
            },
            {
              text: 'UI 模块',
              link: 'ui'
            },
          ]
        },
        {
          text: '字段模块',
          collapsed: false,
          items: [
            {
              text: '字段模块引导',
              link: 'field/guide'
            },
            {
              text: '附件字段',
              link: 'field/attachment'
            },
            {
              text: '自动编号字段',
              link: 'field/autonumber'
            },
            {
              text: '条码字段',
              link: 'field/barcode'
            },
            {
              text: '复选框字段',
              link: 'field/checkbox'
            },
            {
              text: '创建人字段',
              link: 'field/createUser'
            },
            {
              text: '货币字段',
              link: 'field/currency'
            },
            {
              text: '双向关联字段',
              link: 'field/duplex'
            },
            {
              text: '公式字段',
              link: 'field/formula'
            },
            {
              text: '群组字段',
              link: 'field/group'
            },
            {
              text: '地理位置字段',
              link: 'field/location'
            },
            {
              text: '查找引用字段',
              link: 'field/lookup'
            },
            {
              text: '更新人员字段',
              link: 'field/modifiedUser'
            },
            {
              text: '数字字段',
              link: 'field/number'
            },
            {
              text: '电话字段',
              link: 'field/phone'
            },
            {
              text: '评分字段',
              link: 'field/rating'
            },
            {
              text: '进度字段',
              link: 'field/progress'
            },
            {
              text: '多选字段',
              link: 'field/multipleSelect'
            },
            {
              text: '单选字段',
              link: 'field/singleSelect'
            },
            {
              text: '文本字段',
              link: 'field/text'
            },
            {
              text: '时间字段',
              link: 'field/date'
            },
            {
              text: '创建时间字段',
              link: 'field/createTime'
            },
            {
              text: '更新时间字段',
              link: 'field/modifiedTime'
            },
            {
              text: '链接字段',
              link: 'field/url'
            },
            {
              text: '人员字段',
              link: 'field/user'
            },
          ],
        }
      ],
    },
  }
)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/base-new-doc/',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }],
  ],
  themeConfig: {
    logo: 'logo.svg',
    search: {
      provider: 'local'
    },
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      dir: '/zh',
      title: 'Base JS SDK',
      description: 'Base JS SDK Docs',
      themeConfig: {
        search: {
          provider: 'local'
        },
        nav: [
          { text: 'API', link: '/zh/api/guide', activeMatch: 'zh/api' },
        ],
        sidebar: getZhSideBar(),
      },
      // en: {
      //     label: 'English',
      //     lang: 'en',
      //     dir: '/en',
      //     title: 'Base JS SDK',
      //     themeConfig: {
      //         search: {
      //             provider: 'local'
      //         },
      //         nav: [
      //             {text: 'API', link: '/en/index.md'},
      //             {text: 'Docs', link: '/en/index.md'},
      //         ]
      //     },
      // }
    },
  }
})