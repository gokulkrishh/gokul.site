// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-uses-js": () => import("./../../../src/pages/uses.js" /* webpackChunkName: "component---src-pages-uses-js" */),
  "component---src-templates-blog-template-js": () => import("./../../../src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */)
}

