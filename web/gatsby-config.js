// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/src/assets/images`,
    //   },
    // },
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "gatsby-starter-default",
    //     short_name: "starter",
    //     start_url: "/",
    //     background_color: "#663399",
    //     theme_color: "#663399",
    //     display: "minimal-ui",
    //     icon: "src/assets/images/Favicon_32x32.png",
    //   },
    // },
  ],
};
