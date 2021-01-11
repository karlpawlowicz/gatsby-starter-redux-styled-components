module.exports = {
  siteMetadata: {
    title: 'Gatsby Redux Styled Components Starter',
    description:
      'A Gatsby starter based on Gatsby’s default starter with Redux, Redux Thunk middleware, and styled-components that you can deploy to AWS or Netlify. This starter also includes some basic Prettier and VS Code configuration files and uses Airbnb’s ESLint config.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        exclude: /(.cachenode_modules|public)/,
        stages: ['develop'],
        test: /\.js$|\.jsx$/,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
