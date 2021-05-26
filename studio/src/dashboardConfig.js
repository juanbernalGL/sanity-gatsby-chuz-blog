export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aea96f4f6127008ddd8039",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-chuz-blog-studio",
                  apiId: "31d1f455-11b5-4476-b901-17b4a29913fd",
                },
                {
                  buildHookId: "60aea97016736a00a90c658b",
                  title: "Blog Website",
                  name: "sanity-gatsby-chuz-blog",
                  apiId: "76ce4c72-badf-42d4-9fcc-0125a4e32bf7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/juanbernalGL/sanity-gatsby-chuz-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-chuz-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
