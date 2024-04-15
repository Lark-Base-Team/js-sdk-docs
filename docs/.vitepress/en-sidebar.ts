export const getEnSideBar = () => (
  {
    'en/start': {
      base: '/en/start/',
      items: [
        {
          text: 'Core Knowledge',
          link: 'core'
        },
        {
          text: 'Setting up the Development Environment',
          link: 'env',
        },
        {
          text: 'Currency Conversion Plugin',
          link: 'example',
        },
        {
          text: 'Publishing a Plugin',
          link: 'release',
        },
        {
          text: 'finally',
          link: 'finally',
        }
      ],
    },
    'en/api': {
      base: '/en/api/',
      items: [
        {
          text: 'Main Modules',
          collapsed: false,
          items: [
            {
              text: 'API Guide',
              link: 'guide'
            },
            {
              text: 'Base Module',
              link: 'base',
            },
            {
              text: 'Table Module',
              link: 'table'
            },
            {
              text: 'View Module',
              link: 'view'
            },
            {
              text: 'Record Module',
              link: 'record',
            },
            {
              text: 'Cell Module',
              link: 'cell',
            },
            {
              text: 'Bridge Module',
              link: 'bridge'
            },
            {
              text: 'UI Module',
              link: 'ui'
            },
          ]
        },
        {
          text: 'View Module',
          collapsed: false,
          items: [
            // {
            //   text: 'View Guide',
            //   link: 'view/guide'
            // },
            {
              text: 'Grid view',
              link: 'view/grid'
            },
            {
              text: 'Kanban view',
              link: 'view/kanban',
            },
            {
              text: 'Calendar view',
              link: 'view/calendar',
            },
            {
              text: 'Gantt view',
              link: 'view/gantt',
            },
            {
              text: 'Gallery view',
              link: 'view/gallery',
            },
            {
              text: 'Form view',
              link: 'view/form'
            }
          ],
        },
        {
          text: 'Field Module',
          collapsed: false,
          items: [
            {
              text: 'Attachment Field',
              link: 'field/attachment'
            },
            {
              text: 'Auto Number Field',
              link: 'field/autonumber'
            },
            {
              text: 'Barcode Field',
              link: 'field/barcode'
            },
            {
              text: 'Checkbox Field',
              link: 'field/checkbox'
            },
            {
              text: 'Created By Field',
              link: 'field/createUser'
            },
            {
              text: 'Currency Field',
              link: 'field/currency'
            },
            {
              text: 'Single Field',
              link: 'field/singleLink'
            },
            {
              text: 'Duplex Field',
              link: 'field/duplexLink'
            },
            {
              text: 'Formula Field',
              link: 'field/formula'
            },
            {
              text: 'Group Field',
              link: 'field/group'
            },
            {
              text: 'Location Field',
              link: 'field/location'
            },
            {
              text: 'Lookup Field',
              link: 'field/lookup'
            },
            {
              text: 'Modified By Field',
              link: 'field/modifiedUser'
            },
            {
              text: 'Number Field',
              link: 'field/number'
            },
            {
              text: 'Phone Field',
              link: 'field/phone'
            },
            {
              text: 'Rating Field',
              link: 'field/rating'
            },
            {
              text: 'Progress Field',
              link: 'field/progress'
            },
            {
              text: 'Multiple Select Field',
              link: 'field/multipleSelect'
            },
            {
              text: 'Single Select Field',
              link: 'field/singleSelect'
            },
            {
              text: 'Text Field',
              link: 'field/text'
            },
            {
              text: 'Date Field',
              link: 'field/date'
            },
            {
              text: 'Created Time Field',
              link: 'field/createTime'
            },
            {
              text: 'Modified Time Field',
              link: 'field/modifiedTime'
            },
            {
              text: 'URL Field',
              link: 'field/url'
            },
            {
              text: 'User Field',
              link: 'field/user'
            },
          ],
        }
      ],
    },
  }
)