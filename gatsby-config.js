module.exports = {
  siteMetadata: {
    title: `White X Space | A UI / UX Design Agency `,
    name: `White X Space`,
    siteUrl: `https://whitexspace.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `We are White x Space. Design needs to breath, we faciliate it.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/whitexspace`,
      },
      {
        name: `github`,
        url: `https://github.com/whitexspace`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/whitexspace`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/whitexspace/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/whitexspace`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
