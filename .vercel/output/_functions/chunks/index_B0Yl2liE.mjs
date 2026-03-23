import { c as createComponent } from './astro-component_BzRi4QGI.mjs';
import 'piccolore';
import { r as renderTemplate, o as defineScriptVars, l as renderComponent, m as maybeRenderHead, h as addAttribute } from './entrypoint_DONAXCHP.mjs';
import { r as renderScript } from './script_ifQVY_jV.mjs';
import { p as posts, $ as $$BaseLayout, a as $$Header, b as $$Footer } from './posts_uGuo7EcJ.mjs';
import { $ as $$BlogCard } from './BlogCard_Cy8XOGDS.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const publicaciones = posts;
  const categories = [
    "Investigación",
    "Participación Comunitaria",
    "Memoria Urbana",
    "Transformación Social"
  ];
  const recentPosts = posts.slice().reverse().slice(0, 3);
  return renderTemplate(_a || (_a = __template(["", "  ", " <script>(function(){", '\n  // Agrupar posts por mes y año usando el campo \'publish\' en formato DD-MM-YYYY\n  const history = {};\n  posts.forEach(post => {\n    const [day, month, year] = post.publish.split(\'-\').map(Number);\n    const date = new Date(year, month - 1, day); // Meses en JS son 0-indexed\n    const key = `${year}-${String(month).padStart(2, \'0\')}`;\n    const monthName = date.toLocaleDateString(\'es-ES\', { year: \'numeric\', month: \'long\' }).replace(/^\\w/, c => c.toUpperCase());\n    if (!history[key]) {\n      history[key] = { month: monthName, count: 0, posts: [] };\n    }\n    history[key].count += 1;\n    history[key].posts.push(post);\n  });\n\n  // Ordenar posts dentro de cada mes por fecha\n  Object.keys(history).forEach(key => {\n    history[key].posts.sort((a, b) => {\n      const [dayA, monthA, yearA] = a.publish.split(\'-\').map(Number);\n      const [dayB, monthB, yearB] = b.publish.split(\'-\').map(Number);\n      const dateA = new Date(yearA, monthA - 1, dayA);\n      const dateB = new Date(yearB, monthB - 1, dayB);\n      return dateA - dateB; // Más antiguos primero\n    });\n  });\n\n  // Generar HTML para el historial usando Bootstrap accordion\n  const historialEl = document.getElementById(\'historial\');\n  if (historialEl) {\n    const sortedKeys = Object.keys(history).sort().reverse(); // Más recientes primero\n    const accordionId = \'historyAccordion\';\n    historialEl.innerHTML = `\n      <div class="accordion" id="${accordionId}">\n        ${sortedKeys.map((key, index) => {\n          const { month, count, posts } = history[key];\n          const collapseId = `collapse${index}`;\n          const headingId = `heading${index}`;\n          const postsHtml = posts.map(post => {\n            return `<li style="padding: 4px 0; border-bottom: 1px solid #eee;">\n              <a href="/post/${post.slug}" style="color: #004200; text-decoration: none; font-size: 14px;">\n                ${post.publish} - ${post.title}\n              </a>\n            </li>`;\n          }).join(\'\');\n          return `\n            <div class="accordion-item">\n              <h2 class="accordion-header" id="${headingId}">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" style="background-color: #f8f6f2; color: #004200; border: none;">\n                  ${month} (${count} publicaciones)\n                </button>\n              </h2>\n              <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#${accordionId}">\n                <div class="accordion-body" style="padding: 10px;">\n                  <ul style="list-style: none; padding: 0; margin: 0;">\n                    ${postsHtml}\n                  </ul>\n                </div>\n              </div>\n            </div>\n          `;\n        }).join(\'\')}\n      </div>\n    `;\n  }\n})();<\/script>'], ["", "  ", " <script>(function(){", '\n  // Agrupar posts por mes y año usando el campo \'publish\' en formato DD-MM-YYYY\n  const history = {};\n  posts.forEach(post => {\n    const [day, month, year] = post.publish.split(\'-\').map(Number);\n    const date = new Date(year, month - 1, day); // Meses en JS son 0-indexed\n    const key = \\`\\${year}-\\${String(month).padStart(2, \'0\')}\\`;\n    const monthName = date.toLocaleDateString(\'es-ES\', { year: \'numeric\', month: \'long\' }).replace(/^\\\\w/, c => c.toUpperCase());\n    if (!history[key]) {\n      history[key] = { month: monthName, count: 0, posts: [] };\n    }\n    history[key].count += 1;\n    history[key].posts.push(post);\n  });\n\n  // Ordenar posts dentro de cada mes por fecha\n  Object.keys(history).forEach(key => {\n    history[key].posts.sort((a, b) => {\n      const [dayA, monthA, yearA] = a.publish.split(\'-\').map(Number);\n      const [dayB, monthB, yearB] = b.publish.split(\'-\').map(Number);\n      const dateA = new Date(yearA, monthA - 1, dayA);\n      const dateB = new Date(yearB, monthB - 1, dayB);\n      return dateA - dateB; // Más antiguos primero\n    });\n  });\n\n  // Generar HTML para el historial usando Bootstrap accordion\n  const historialEl = document.getElementById(\'historial\');\n  if (historialEl) {\n    const sortedKeys = Object.keys(history).sort().reverse(); // Más recientes primero\n    const accordionId = \'historyAccordion\';\n    historialEl.innerHTML = \\`\n      <div class="accordion" id="\\${accordionId}">\n        \\${sortedKeys.map((key, index) => {\n          const { month, count, posts } = history[key];\n          const collapseId = \\`collapse\\${index}\\`;\n          const headingId = \\`heading\\${index}\\`;\n          const postsHtml = posts.map(post => {\n            return \\`<li style="padding: 4px 0; border-bottom: 1px solid #eee;">\n              <a href="/post/\\${post.slug}" style="color: #004200; text-decoration: none; font-size: 14px;">\n                \\${post.publish} - \\${post.title}\n              </a>\n            </li>\\`;\n          }).join(\'\');\n          return \\`\n            <div class="accordion-item">\n              <h2 class="accordion-header" id="\\${headingId}">\n                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#\\${collapseId}" aria-expanded="false" aria-controls="\\${collapseId}" style="background-color: #f8f6f2; color: #004200; border: none;">\n                  \\${month} (\\${count} publicaciones)\n                </button>\n              </h2>\n              <div id="\\${collapseId}" class="accordion-collapse collapse" aria-labelledby="\\${headingId}" data-bs-parent="#\\${accordionId}">\n                <div class="accordion-body" style="padding: 10px;">\n                  <ul style="list-style: none; padding: 0; margin: 0;">\n                    \\${postsHtml}\n                  </ul>\n                </div>\n              </div>\n            </div>\n          \\`;\n        }).join(\'\')}\n      </div>\n    \\`;\n  }\n})();<\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Actualidades - Huellas de Barrio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": "actualidades", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- Banner --> <div class="container-fluid" style="
        background: linear-gradient(135deg, #004200 0%, #006600 100%);
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      " data-astro-cid-j7pv25f6> <h2 class="text-white text-center m-0" data-astro-cid-j7pv25f6>Actualidades</h2> </div> <!-- Contenedor Blog --> <div class="container" style="padding: 30px 15px" data-astro-cid-j7pv25f6> <div class="row" data-astro-cid-j7pv25f6> <!-- Columna 8: Tarjetas --> <div class="col-lg-8 col-md-12 order-lg-1 order-md-2 order-sm-2 order-2  " data-astro-cid-j7pv25f6> <div class="row" id="postsGrid" data-astro-cid-j7pv25f6> ${publicaciones.map((post) => renderTemplate`<div class="col-md-12 mb-4 post-card"${addAttribute(post.slug, "key")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.title, "subtitle": post.subtitle, "date": post.date, "author": post.author, "readTime": post.readTime, "category": post.category, "tags": post.tags, "excerpt": post.introductionTitle.substring(0, 150) + "...", "image": post.image, "slug": post.slug, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <nav aria-label="Paginación de artículos" class="mt-4" data-astro-cid-j7pv25f6> <ul class="pagination justify-content-center" id="paginationControls" data-astro-cid-j7pv25f6></ul> </nav> </div> <!-- Columna 4: Sidebar --> <div class="col-lg-4 col-md-12 order-lg-2 order-md-1 order-sm-1 order-1" data-astro-cid-j7pv25f6> <div style="
              background: #f8f6f2;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            " data-astro-cid-j7pv25f6> <h3 style="color: #004200; margin-bottom: 15px" data-astro-cid-j7pv25f6>Historial</h3> <div id="historial" style="list-style: none; padding: 0" data-astro-cid-j7pv25f6></div> </div> <div style="
              background: #f8f6f2;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              margin-top: 20px;
            " data-astro-cid-j7pv25f6> <h3 style="color: #004200; margin-bottom: 15px" data-astro-cid-j7pv25f6>Categorías</h3> <ul style="list-style: none; padding: 0" data-astro-cid-j7pv25f6> ${categories.map((category) => renderTemplate`<li style="padding: 10px 0; border-bottom: 1px solid #ddd"${addAttribute(category, "key")} data-astro-cid-j7pv25f6> <a href="#" style="color: #004200; text-decoration: none" data-astro-cid-j7pv25f6> ${category} </a> </li>`)} </ul> </div> <div class="mb-4" style="
              background: #f8f6f2;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              margin-top: 20px;
            " data-astro-cid-j7pv25f6> <h3 style="color: #004200; margin-bottom: 15px" data-astro-cid-j7pv25f6>
Publicaciones Recientes
</h3> <ul style="list-style: none; padding: 0" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`<li style="padding: 8px 0; border-bottom: 1px solid #ddd"${addAttribute(post.slug, "key")} data-astro-cid-j7pv25f6> <a${addAttribute(`/post/${post.slug}`, "href")} style="color: #004200; text-decoration: none" data-astro-cid-j7pv25f6> ${post.title} </a> </li>`)} </ul> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` }), renderScript($$result, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/index.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ posts }));
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/index.astro", void 0);

const $$file = "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
