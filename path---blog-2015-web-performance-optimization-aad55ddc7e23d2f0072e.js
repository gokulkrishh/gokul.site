webpackJsonp([51540528151029],{356:function(e,a){e.exports={data:{markdownRemark:{html:'<p>An average user stays in your site if the page loads in &#x3C; 1000ms. In 2014, an average page size is 1.9MB. See the below chart for more stats.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/chart-Nov-15-2014-dd10fb69a26fad31b31cfcb9860a4d02-772df.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 400px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQoz22RSy9DQRTHfQnEEiEIW8TCjkgtdSc2PoSVSrzqsUG68FqQCi1dNCpK2iJpIkQQC0GbsGqTvnRm7tw799W5dXpvNFo9mZzMJPM75/8/p674G4ZhaJqmmmFwrus6YXIWE1kSdVWmoihJEsZYlmW4QAakrlgZUALyexrNXDxOeqMThzdzoafPLDZ0nVIxl8vl83lBEKCKoigVMDfJzxzpXfO3LHjG9sKju5f2/bAr+pohlEliKpUGGEoACQJrwFOB+6aZg+4V38h2cPzgeufuPfSRiGeQqpTEgzVKKZiqkG2YWS3w4a3z1kVPu9Pbv+7fun27iidDsUQklgSjhBDZzNC2Bqxzbtu5AM2dy8cdS8cDG6d9a364DLoCWJQEQiTGAK7uXJa9EHpucLh7Vn3Atzm9XSsn8JwOPlgfrIlaUYJBA1QCM4zJRV5IC5JtO1jvcDfPH8FpdLiHNs8TWCzvogJGCIESxhiogm0auvZN2Ub01b4Xtu9HnJGXlMBMsmqt//ZsBWIqjFdTFUwp19TyRGrAxh8nlu3br9Ts2X1RZQjjPEIFzmv2+AHyIUJsE53qLwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Average Web Page Size" title="" src="/static/chart-Nov-15-2014-dd10fb69a26fad31b31cfcb9860a4d02-772df.png" srcset="/static/chart-Nov-15-2014-dd10fb69a26fad31b31cfcb9860a4d02-871f0.png 148w,\n/static/chart-Nov-15-2014-dd10fb69a26fad31b31cfcb9860a4d02-84726.png 295w,\n/static/chart-Nov-15-2014-dd10fb69a26fad31b31cfcb9860a4d02-772df.png 400w" sizes="(max-width: 400px) 100vw, 400px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>via source <a target="_blank" href="http://httparchive.org/interesting.php#bytesperpage">httparchive</a></p>\n<p>The core content of site should render with in <code class="language-text">1000ms</code>. If it fails, then the user is never gonna come back to your site again. By improving page load time, the revenue and downloads increased tremendously for many popular companies.</p>\n<ul>\n<li>\n<p>Let’s take <a target="_blank" href="http://www.walmart.com/">Walmart</a> for every <code class="language-text">100ms</code> of improvement to their site, they grew revenue up to <code class="language-text">1%</code></p>\n</li>\n<li>\n<p><a target="_blank" href="https://www.Yahoo.com">Yahoo</a> traffic increased by <code class="language-text">9%</code> for every <code class="language-text">400ms</code> of improvement.</p>\n</li>\n<li>\n<p><a target="_blank" href="https://www.Mozilla.com">Mozilla</a> speed up their site by <code class="language-text">2.2sec</code> gave them <code class="language-text">160 million</code> more firefox downloads/year.</p>\n</li>\n</ul>\n<h4>Steps involved in site optimization</h4>\n<ol>\n<li>\n<p>Set performance budget.</p>\n</li>\n<li>\n<p>Measuring the current performance.</p>\n</li>\n<li>\n<p>Find the problem causing performance issue.</p>\n</li>\n<li>\n<p>And finally yay, optimize it.</p>\n</li>\n</ol>\n<p>There are several ways to optimize your site, Lets see about it</p>\n<h2>Speed Index</h2>\n<p>Speed index is the average time at which visible parts of page is <a href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Painting" title="Browser Painting">painted</a> in the browser. Expressed in milliseconds and also depends on the viewport size. See below image ( video frames to show web page load at seconds ).</p>\n<p><i>Lower speed index score is the better score.</i></p>\n\n  <a class="gatsby-resp-image-link" href="/static/compare_progress-fafa56e16bcc83405cee874039ff2ac2-afd85.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 53.503184713375795%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACU0lEQVQoz2Pg4ODg4uKWlJDkgAB2NkF+LgE+TlEhPnkZCUEBLhFBbl5udk5OLk5OTn4BAQkJCS4uLh5uLqBShgcPHty6devOnTu3bt28/+DRxrWLT+9fdO/mmecPzr94ePHh7TMPb59bPqdl6ZIlZ8+ePX/+/KWLF0+fPnPs+Kmenl6G//////v3D0j+/fsXSJ46vn/qhOaJk2cuWLBow8YtBw7sff7o+PplvU1NzbNmzVq0aNGWLVuPHzvw9P7B5UvnoWs+eWx/bLiHj19ARkamm5t7RkYGUHD7hrkuzg6hoSFArrOzc3l5KVBw7bo1IM1//vwB6v/96xfY5n1P75169fLZy+cPXzx78PHDa6Dgvu1LTpw4+fTp8wcPHz18+Pj167d///1ftXotgxsQuLsHBwW5AIGrm7WlSXaie26Kf1FmcEN5UlaCd1aCl4+zQaCfR1S4f3xMaFZafEigV3CAp721IcPx48cPHTp05MgRIHns+Ml5syevXtS9a9va44e2HT+0/eDejUcObF8+s3LNou6DuzecPLz1xKGtRw9sOnZgy+U9bQg///sH8vO504ef3Lvw6s1HoNtevX77/MXLF6/fn9iz8MHti6/ffnoFFXz1/MXrn082gTT/+vUL6O1fv34C2SeO7vv24fF/EPgHN/fi0VWf3z2BcyHg9/Nt6DafP3f0x7dnaJrvnF/3/RNYEEnz/697GIDBBAyxiIhIYBw4u7hamhtHBtpGBbskR/uU5sVFBjnGhLp6O+mGBwAFnVPj/EtyoiMCHaJDXaL9DAAtjLVpH6/8YAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Speed Index" title="" src="/static/compare_progress-fafa56e16bcc83405cee874039ff2ac2-fb8a0.png" srcset="/static/compare_progress-fafa56e16bcc83405cee874039ff2ac2-1a291.png 148w,\n/static/compare_progress-fafa56e16bcc83405cee874039ff2ac2-2bc4a.png 295w,\n/static/compare_progress-fafa56e16bcc83405cee874039ff2ac2-fb8a0.png 590w,\n/static/compare_progress-fafa56e16bcc83405cee874039ff2ac2-afd85.png 628w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Speed index can be measured by using <a target="_blank" href="http://www.webpagetest.org/">Webpagetest</a> (maintained by google).</p>\n<h4>TL;DR</h4>\n<p>Webpage test has lots features like running multiple test in different locations using different browsers. And can measure other metrics like load time, number of DOM elements, first byte time etc..</p>\n<p>Eg: checkout the measured result of amazon <a target="_blank" href="http://www.webpagetest.org/result/141126_29_DVN/">here</a> using webpagetest.</p>\n<p><i>Watch the below video by <a href="http://blog.patrickmeenan.com/" target="_blank">Patrick Meenan</a> to know more about webpagetest</i></p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;margin-bottom: 1.0725rem"\n          >\n            <iframe style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          " src="//www.youtube.com/embed/euVYHee1f1M" frameborder="0" allowfullscreen></iframe>\n          </div>\n          </div>\n<h2>Render Blocking</h2>\n<p>If you know how a browser works, then you know about how <code class="language-text">HTML, CSS, JS</code> are parsed by browser and which is blocking the rendering of the page. If you don’t, see the below simple diagrammatic representation below.</p>\n<img src="https://www.igvita.com/posts/12/doc-render-js.png" alt="How parsing is done in the browser">\n<p>Read more about <a target="_blank" href="www.html5rocks.com/en/tutorials/internals/howbrowserswork/">how a browser works</a> written by <a target="_blank" href="http://www.html5rocks.com/en/profiles/#taligarsiel">Tali Garsiel</a> and <a target="_blank" href="http://www.paulirish.com/">Paul Irish</a>.</p>\n<h3>Steps involved in rendering in a browser</h3>\n<ol>\n<li>\n<p>First browser parses <code class="language-text">HTML</code> markup to construct <code class="language-text">DOM tree</code> ( DOM = Document Object Model )</p>\n</li>\n<li>\n<p>Then parses <code class="language-text">CSS</code> to construct <code class="language-text">CSSOM tree</code> ( CSSOM = CSS Object Model )</p>\n</li>\n<li>\n<p>Before combining both DOM and CSSOM tree to contruct Render tree, <code class="language-text">JS</code> files are parsed and executed.</p>\n</li>\n</ol>\n<p>Now you understood how parsing is done in a browser. Lets see which is blocking the construction of rendering tree.</p>\n<h2>Render-Blocking CSS</h2>\n<p>CSS is treated as render blocking. For the construction of CSSOM, all the CSS are downloaded regardless of whether they are used in current page or not.</p>\n<p>To solve this render-blocking, go through below steps</p>\n<ol>\n<li>\n<p>Inline the critical CSS, that is most important styles used by page above the fold in head tag inside <code class="language-text">&lt;style&gt;&lt;/style&gt;</code></p>\n</li>\n<li>\n<p>Remove the unused CSS.</p>\n</li>\n</ol>\n<p>So how do I find unused CSS.</p>\n<ol>\n<li>\n<p>Use <a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/">Pagespeed Insight</a> to get stats like unused CSS, render-blocking CSS and JS files etc.</p>\n<p>Eg: Flipkart’s Pagespeed Insight result <a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=Flipkart.com">here</a>.</p>\n</li>\n<li>\n<p>Gulp tasks like <a href="https://www.npmjs.com/package/gulp-uncss" target="_blank">gulp-uncss</a> or use Grunt tasks like <a href="https://github.com/addyosmani/grunt-uncss" target="_blank">grunt-uncss</a>. If you don’t no what is grunt or gulp, read my <a href="{{ site.baseurl }}/2014/10/27/Task-Automation-using-grunt-and-gulp/">previous post</a>.</p>\n</li>\n</ol>\n<h4>ProTips</h4>\n<ol>\n<li>\n<p>Use <a href="http://cssstats.com/" target="_blank">CSS Stats</a> to get total no of elements used, no of unique styles, fonts etc.</p>\n</li>\n<li>\n<p>Pagespeed Insight <a target="_blank" href="https://chrome.google.com/webstore/detail/pagespeed-insights-by-goo/gplegfbjlmmehdoakndmohflojccocli?hl=en">Chrome Extention</a>.</p>\n</li>\n<li>\n<p>Tag Counter <a target="_blank" href="hhttps://chrome.google.com/webstore/detail/tagcounter/okjmidhcodkplbehcomejnfjlkbdnjlg">Chrome Extention</a>.</p>\n</li>\n</ol>\n<h3>Render-Blocking Javascript</h3>\n<p>If the browser encounter’s javascript while parsing the <code class="language-text">HTML markup</code>, the parsing is stopped. Only after executing the script, the HTML rendering will be continued. So this block’s the <code class="language-text">rendering of the page</code>.</p>\n<p>To solve this</p>\n<p>Use <code class="language-text">async</code> or <code class="language-text">defer</code> attribute in <code class="language-text">&lt;script&gt;&lt;/script&gt;</code> tag.</p>\n<ol>\n<li>\n<p><code class="language-text">&lt;script async&gt;</code> will download the file during the <code class="language-text">HTML parsing</code> and execute it as soon as the file is downloaded.</p>\n</li>\n<li>\n<p><code class="language-text">&lt;script defer&gt;</code> will download the file during the <code class="language-text">HTML parsing</code> and will execute it after <code class="language-text">HTML parsing</code> is completed.</p>\n</li>\n</ol>\n<p>Eg: <code class="language-text">async and defer</code> both are used in Google Analytics</p>\n<p>Browser support for <a target="_blank" href="http://caniuse.com/#search=async" title="async browser support">async</a> and\n<a target="_blank" href="http://caniuse.com/#search=defer" title="defer browser support">defer</a>.</p>\n<h2>Memory Leaks</h2>\n<p><code class="language-text">Memory leaks</code> and <a href="http://en.wikipedia.org/wiki/Bloating" title="bloating" target="_blank">Bloat</a> is one of the problems faced by web developers. Lets see how to find a memory leak and later solve them.</p>\n<h4>Lets find Memory Leak in Javascript</h4>\n<ol>\n<li>Using Chrome Task Manager to check <code class="language-text">memory used by app</code> as well <code class="language-text">js memory</code> (total + live memory). If your memory keeps on growing on each action, then you can suspect there is a memory leak.</li>\n</ol>\n<p><i>See below the screenshot of Chrome Task Manager</i></p>\n\n  <a class="gatsby-resp-image-link" href="/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-585e0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 54.769560557341904%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABvklEQVQoz02R246kIBCGff+322SmPXASUFFABBW7RXuyRc9e7J9KBbG+OlGgpuGcD1n9xw9KKfCEEEopauqmLKUQXdcJmdX3PXwKzjspCywkl90HyQz8s8Yubtmy9jDPgrHF2m3fl8WrYVyMZpDy+9FTWvz5+vp+lASTx6Osyqqpai6E7AdtZ+ect5Ygshjzep3bulkzGzXWdQMMw7goES/LelRjCOsJuq6kdaIk9d0Z9+hdS5nL8AsCpmmCRNu6Gm36ti1aSquqxggbY+F2j8fl/SX5Nao7pRg8aVCGz/M4DqWgbTNNI8KEE1rAYqqyRggxxrz3EJHuO/38pPf7uu+4BkYozAw9PY/nNGk7joKLGqYDmFIClUFqUNdH6Tz/2XW99t3ZOa5rSumIMYSwhwA1oE3IUlDGykeFEYJ9Z/J//cLGxJDhGA/g4uIA/m2hoATDknnbStnFGO/7ztXBw+n9fsYdnn/1HmZ5vl6QaHNOa81YOwhZtC3hrYA2jNHwssDHHZbss8H+jNacL9O0h3W1dh4GKGpHpaSYuq5gwjXEDQpedTYmz2KUmhGa6/rjq+wxnjHKli8biNKQwpi/ootbAEumTFEAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Speed Index" title="" src="/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-fb8a0.png" srcset="/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-1a291.png 148w,\n/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-2bc4a.png 295w,\n/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-fb8a0.png 590w,\n/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-526de.png 885w,\n/static/task_manger-0493224fde3ff67d0d6af3cc54b9a3d2-585e0.png 933w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h4>Chrome DevTools Profiling</h4>\n<p>Use <code class="language-text">Heap Profiler</code> to find memory leak. Open chrome devTools and go to profiles tab and select take heap snapshot.\nIf you don’t know about chrome DevTools, read my <a target="_blank" href="https://gokulkrishh.github.io/2014/09/12/Chrome-DevTools/" title="Chrome DevTools"> previous post</a>.</p>\n<p><i>Screenshot for Chrome DevTools Profiler</i></p>\n\n  <a class="gatsby-resp-image-link" href="/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-81fcd.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 52.476107732406604%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1klEQVQoz6WR3Y7CIBCF+9h748uY7BPttdHElq52GTpAS6Fa9gAa9WKTVb/AhJ+cM4dQrT43H+vd17YPfjTGWjssS/yL8yOVOEgMbSwRHbtOSklK+RDm+TRjnlINGSzio2/FPWFYY7qfTrQt6pAZC86NZZtP5uSUvNA2iSmhBmuPh2/RiH2975mdcya/4Q4caLjgqrhcxIpIKxJN3TY1RMyM8CWt936aJn9dFM0tdmosadRsmQfN8YxHBtjHf1BlLcE7Pk8WS4lU2CzviJ/unD4WsV8S/wJVnEaU8xvMHAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="heap snapshot" title="" src="/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-fb8a0.png" srcset="/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-1a291.png 148w,\n/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-2bc4a.png 295w,\n/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-fb8a0.png 590w,\n/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-526de.png 885w,\n/static/heap snapshot-779db53a8c1faf2d2869bfc64e5902a5-81fcd.png 1151w" sizes="(max-width: 590px) 100vw, 590px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h4>The Heap Profiler has 4 snapshot views</h4>\n<ol>\n<li>\n<p>Summary View - To show total number of objects allocated and its instance, <code class="language-text">Shallow Size</code> (size of the memory of obj itself) and <code class="language-text">Retained Size</code> (size of the memory that will be freed once automatic GC happens + unreachable object).</p>\n</li>\n<li>\n<p>Comparison View - To compare two or more snapshots before and after a operation to check memory leak.</p>\n</li>\n<li>\n<p>Containment View - To show overall view of your app object structure + DOMWindow Objects (that is global obj’s), GC roots, Native objects (from the browser).</p>\n</li>\n<li>\n<p>Dominators View - This will show the <a target="_blank" href="https://developer.chrome.com/devtools/docs/memory-analysis-101#dominators" title="dominators">dominators</a> tree of a heap graph.</p>\n</li>\n</ol>\n<p>Read more in detail about <a target="_blank" href="https://developer.chrome.com/devtools/docs/heap-profiling" title="Chrome devtools heap profile">Heap profiler</a>.</p>\n<h4>DOM Leak</h4>\n<p>Reference to <code class="language-text">DOM elements</code> causes DOM Leak and prevents automatic garbage collection(GC) process.</p>\n<p>Lets see an example</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>heading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>I am just a heading nothing much<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> parentEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'container\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//get parent ele reference</span>\n<span class="token keyword">var</span> headingEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'heading\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//get child ele reference</span>\nparentEle<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//removes parent element from DOM</span>\n<span class="token comment">//but its child ref still exist, So parentEle won\'t collect GC\'d and causes DOM Leak</span></code></pre>\n      </div>\n<p>Let’s fix this DOM leak by making its reference <code class="language-text">null</code></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">headingEle <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//Now parentEle will be GC\'d</span></code></pre>\n      </div>\n<p>The above are common problems faced by web developers. Thats all for today. If you like my post share it or have a doubt comment below. Thanks!!</p>',frontmatter:{date:"December 15, 2014",path:"/blog/2015/web-performance-optimization",title:"Web Performance Optimization"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-2015-web-performance-optimization-aad55ddc7e23d2f0072e.js.map