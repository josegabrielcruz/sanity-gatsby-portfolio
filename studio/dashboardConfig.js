export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '619d6807b85be626d02f3ff0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hu73or3t',
                  apiId: 'a103738c-53da-4092-8e50-4905ab17ffe7'
                },
                {
                  buildHookId: '619d6807d512c61950395d28',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-x6vtqb92',
                  apiId: 'e5f69bc5-637b-45ac-8d43-7b25978e171a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josegabrielcruz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-x6vtqb92.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
