import { c as createComponent } from './astro-component_BzRi4QGI.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_DONAXCHP.mjs';
import { $ as $$BaseLayout, a as $$Header, p as posts, b as $$Footer } from './posts_uGuo7EcJ.mjs';

const $$AllPosts = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    "Investigación",
    "Participación Comunitaria",
    "Memoria Urbana",
    "Transformación Social"
  ];
  const recentPosts = posts.slice().reverse().slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Todos los Posts - Huellas de Barrio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": "actualidades" })} ${maybeRenderHead()}<main> <div class="container-fluid" style="background: linear-gradient(135deg, #004200 0%, #006600 100%); min-height: 100px; display: flex; align-items: center; justify-content: center;"> <a href="#" style="text-decoration: none;"><h2 class="text-white m-0">Todos los posts (modelo completo)</h2></a> </div> <div class="container py-5"> <div class="row"> <!-- Columna 8: Posts --> <div class="col-lg-8 col-md-12 order-lg-1 order-md-2 order-sm-2 order-2"> ${posts.map((post) => renderTemplate`<article class="mb-5 p-4 border rounded shadow-sm"> <h2 class="text-success">${post.title}</h2> <p class="text-muted">${post.date} · ${post.author} · ${post.category} · ${post.readTime}</p> <p>${post.subtitle}</p> <div class="row gy-3 mb-4"> ${post.images && post.images.length > 0 ? post.images.map((img, idx) => renderTemplate`<div class="col-md-12"> <img${addAttribute(img, "src")}${addAttribute(`Imagen ${idx + 1} de ${post.title}`, "alt")} class="w-100" style="height: 250px; object-fit: cover; border-radius: 0.5rem;"> </div>`) : renderTemplate`<div class="col-12"> <img${addAttribute(post.image, "src")}${addAttribute(`Imagen de ${post.title}`, "alt")} class="w-100" style="height: 150px; object-fit: cover; border-radius: 0.5rem;"> </div>`} </div> <section class="mb-3"> <h3>${post.contextTitle}</h3> <p style="text-align: justify;">${post.introductionContent}</p> </section> <section class="mb-3"> <p style="text-align: justify;">${post.contextContent}</p> </section> <section class="mb-3"> <p style="text-align: justify;">${post.textoSecundario}</p> </section> <div class="mt-3"> ${post.tags.map((tag) => renderTemplate`<a href="../index.html" style="text-decoration: none;"> <span class="badge bg-success me-1">${tag}</span> </a>`)} </div> </article>`)} </div> <!-- Columna 4: Sidebar --> <div class="col-lg-4 col-md-12 order-lg-2 order-md-1 order-sm-1 order-1"> <div style="
              background: #f8f6f2;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            "> <h3 style="color: #004200; margin-bottom: 15px">Historial</h3> <div id="historial" style="list-style: none; padding: 0"></div> </div> <div style="
              background: #f8f6f2;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              margin-top: 20px;
            "> <h3 style="color: #004200; margin-bottom: 15px">Categorías</h3> <ul style="list-style: none; padding: 0"> ${categories.map((category) => renderTemplate`<li style="padding: 10px 0; border-bottom: 1px solid #ddd"> <a href="#" style="color: #004200; text-decoration: none"> ${category} </a> </li>`)} </ul> </div> <div class="mb-4" style="
              background: #f8f6f2;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              margin-top: 20px;
            "> <h3 style="color: #004200; margin-bottom: 15px">
Publicaciones Recientes
</h3> <ul style="list-style: none; padding: 0"> ${recentPosts.map((post) => renderTemplate`<li style="padding: 8px 0; border-bottom: 1px solid #ddd"> <a${addAttribute(`/post/${post.slug}`, "href")} style="color: #004200; text-decoration: none"> ${post.title} </a> </li>`)} </ul> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/all-posts.astro", void 0);

const $$file = "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/all-posts.astro";
const $$url = "/all-posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AllPosts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
