const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');

  return {
    dir: {
      "input": "views_njk",
      "includes": "includes",
    },
    "htmlTemplateEngine": "njk",
    "markdownTemplateEngine": "njk",
    "dataTemplateEngine": "njk",
    "passthroughFileCopy": true,
  }
};
