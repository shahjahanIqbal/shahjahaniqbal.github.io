const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/typewriter.js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/ascii");


  // Shortcode to embed ASCII art
  eleventyConfig.addShortcode("asciiart", function(filePath) {
    const absolutePath = path.join(__dirname, "src", filePath);
    const fileContent = fs.readFileSync(absolutePath, "utf-8");
    return `<pre class="portrait-art">${fileContent}</pre>`;
  });

  // Set custom input/output folders
  return {
    dir: {
      input: "src",
      output: "_site"  // Change this to "dist" if you prefer
    }
  };
};
