module.exports = {
  siteMetadata: {
    // edit below
    title: `Wealthy Bytes`,
    author: `Wealthy Bytes`,
    description: `Serving personal finance with code.`,
    siteUrl: `https://wealthybytes.netlify.app/`,
    social: {
      twitter: `WealthyBytes`,
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Start Here!',
        link: '/startguide'
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Disclaimer',
        link: '/disclaimer'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMdx {
              nodes {
                id
                fields { slug }
                excerpt
                rawBody
                frontmatter {
                  title
                  description
                  author
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "rawBody"],
        store: ["id", "slug", "date", "title", "excerpt", "description"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            rawBody: node.rawBody,
            author: node.author,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            date: node.frontmatter.date,
          })),
      },
    },
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-90200805-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wealthy Bytes`,
        short_name: `WealthyBytes`,
        start_url: `/`,
        background_color: `#f5fff5`,
        theme_color: `#063831`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    'gatsby-plugin-theme-ui',
  ],
}
