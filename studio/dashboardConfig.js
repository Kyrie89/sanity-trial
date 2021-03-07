export default {
  widgets: [
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
                  buildHookId: '604445a693462c162167f75c',
                  title: 'Sanity Studio',
                  name: 'sanitycheck-studio',
                  apiId: '73b201e0-0da9-445c-90c4-870430476901'
                },
                {
                  buildHookId: '604445a6bc9af944c035e70b',
                  title: 'Blog Website',
                  name: 'sanitycheck',
                  apiId: '451d824c-a96b-4c96-beeb-e485abb109cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kyrie89/sanity-trial',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanitycheck.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
