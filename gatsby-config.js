module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CBDportfolio",
    ProfessionalInfo: {
      name: "Christopher Dreyer",
      title: "Professor of Practice, Mechanical Engineering",
      contact: {
        address: "General Research Lab 234A",
        address1: "1310 Maple St.",
        telephone: "3032733890",
        email: "cdreyer@mines.edu",
      },
      links: {
        Google_Scholar: "https://scholar.google.com/citations?hl=en&user=KNg4Th0AAAAJ&view_op=list_works&sortby=pubdate",
        Linkedin: "https://www.linkedin.com/in/christopher-dreyer-7843187/",
        Mines: "https://space.mines.edu/project/dreyer-christopher/",
      },
    },
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "./src/markdown-pages/",
      },
      __key: "markdown-pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
        ignore: [`**/\.*`],
      },
      __key: "data",
    },
    `gatsby-transformer-csv`,
  ],
};
