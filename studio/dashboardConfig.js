export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dac7e4b3649f5183a24068a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bnhxr5cy',
                  apiId: '335b05b8-63d7-4d46-9c04-2c75e1cddbad'
                },
                {
                  buildHookId: '5dac7e4c389e5ce6f5aa3a3c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ip8ezy41',
                  apiId: '12a99cfc-1165-469c-b311-41182db2df70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgtpsibin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ip8ezy41.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
