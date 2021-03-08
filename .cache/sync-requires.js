
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/gokulkrishh/Codelabs/gokul.site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/gokulkrishh/Codelabs/gokul.site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gokulkrishh/Codelabs/gokul.site/src/pages/index.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/gokulkrishh/Codelabs/gokul.site/src/templates/blogTemplate.js"))
}

