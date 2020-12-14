const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // reduces path to just the filename
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({ node, name: "slug", value: slug })
  }
}
