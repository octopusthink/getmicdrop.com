/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./data/SiteConfig.js');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    defaultImage: config.defaultImage,
    imageHeight: config.imageHeight,
    imageWidth: config.imageWidth,
    description: config.siteDescription,
    author: config.twitter,
    copyright: config.copyright,
    blogTitle: config.blogTitle,
    blogDescription: config.blogDescription,
    blogSummary: config.blogSummary,
    language: config.language,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-use-query-params',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mic Drop Website`,
        short_name: `Mic Drop`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: './src/images/favicon.png',
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/NautilusWrapper`),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Exclude specific pages or groups of pages using glob params
        // See: https://github.com/isaacs/minimatch
        excludes: [],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/MDXLayout'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
            },
          },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
        ignore: ['**/*.js'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
        ignore: ['**/*.js'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
  ],
};
