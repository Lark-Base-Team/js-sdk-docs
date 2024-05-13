export const getZhSideBar = () => (
  {
    'zh/start': {
      base: '/zh/start/',
      items: [
        {
          text: '核心知识',
          link: 'core'
        },
        {
          text: '搭建开发环境',
          link: 'env',
        },
        {
          text: '开发一个货币转换插件',
          link: 'example',
        },
        {
          text: '发布一个插件',
          link: 'release',
        },
        {
          text: '最后',
          link: 'finally',
        }
      ],
    },
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
              text: 'Field 模块',
              link: 'field'
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
            {
              text: 'Dashboard 模块',
              link: 'dashboard'
            },
          ]
        },
        {
          text: '视图模块',
          collapsed: true,
          items: [
            {
              text: '表格视图',
              link: 'view/grid'
            },
            {
              text: '看板视图',
              link: 'view/kanban',
            },
            {
              text: '日历视图',
              link: 'view/calendar',
            },
            {
              text: '甘特视图',
              link: 'view/gantt',
            },
            {
              text: '画册视图',
              link: 'view/gallery',
            },
            {
              text: '表单视图',
              link: 'view/form'
            }
          ],
        },
        {
          text: '字段模块',
          collapsed: true,
          items: [
            {
              text: '基础字段',
              link: 'field/base'
            },
            {
              text: '文本字段',
              link: 'field/text'
            },
            {
              text: '单选字段',
              link: 'field/singleSelect'
            },
            {
              text: '多选字段',
              link: 'field/multipleSelect'
            },
            {
              text: '链接字段',
              link: 'field/url'
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
              text: '人员字段',
              link: 'field/user'
            },
            {
              text: '创建人字段',
              link: 'field/createUser'
            },
            {
              text: '更新人员字段',
              link: 'field/modifiedUser'
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
              text: '货币字段',
              link: 'field/currency'
            },
            {
              text: '单向关联字段',
              link: 'field/singleLink'
            },
            {
              text: '双向关联字段',
              link: 'field/duplexLink'
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
              text: '邮箱字段',
              link: 'field/email'
            },
          ],
        },
        {
          text: '通用信息',
          collapsed: true,
          items: [
            {
              text: '错误码',
              link: 'common/error-code'
            }
          ]
        }
      ],
    }
  }
)