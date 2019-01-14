const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

const longreadPages = ["news", "work", "company", "debug", "msp"];

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (longreadPages.some(route => page.path.match(route))) {
    page.context.layout = "longread";
    createPage(page);
  }
};

exports.onCreateNode = ({ page, node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
