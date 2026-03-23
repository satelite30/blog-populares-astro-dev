import { c as createComponent } from './astro-component_BzRi4QGI.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_DONAXCHP.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer, p as posts } from './posts_uGuo7EcJ.mjs';
import { $ as $$BlogCard } from './BlogCard_Cy8XOGDS.mjs';

const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const firstTenPosts = posts.slice(0, 10);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Primeros 10 Posts - Huellas de Barrio", "data-astro-cid-at4y73ej": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": "posts", "data-astro-cid-at4y73ej": true })} ${maybeRenderHead()}<main data-astro-cid-at4y73ej> <!-- Banner --> <div class="container-fluid" style="
        background: linear-gradient(135deg, #004200 0%, #006600 100%);
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      " data-astro-cid-at4y73ej> <h2 class="text-white text-center m-0" data-astro-cid-at4y73ej>Primeros 10 Posts</h2> </div> <!-- Contenedor Blog --> <div class="container" style="padding: 30px 15px" data-astro-cid-at4y73ej> <div class="row" data-astro-cid-at4y73ej> <!-- Tarjetas --> <div class="col-12" data-astro-cid-at4y73ej> <div class="row" data-astro-cid-at4y73ej> ${firstTenPosts.map((post) => renderTemplate`<div class="col-md-12 mb-4"${addAttribute(post.slug, "key")} data-astro-cid-at4y73ej> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.title, "subtitle": post.subtitle, "date": post.date, "author": post.author, "readTime": post.readTime, "category": post.category, "tags": post.tags, "excerpt": post.introductionTitle.substring(0, 150) + "...", "image": post.image, "slug": post.slug, "data-astro-cid-at4y73ej": true })} </div>`)} </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-at4y73ej": true })} ` })}`;
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/posts.astro", void 0);

const $$file = "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
