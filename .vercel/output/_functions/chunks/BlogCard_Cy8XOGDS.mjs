import { c as createComponent } from './astro-component_BzRi4QGI.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_DONAXCHP.mjs';
import 'clsx';
import './posts_uGuo7EcJ.mjs';

const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, subtitle, date, author, readTime, tags, category, excerpt, image, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-12 col-md-12 col-sm-12 mx-auto mb-3 card-info  "> <a${addAttribute(`/post/${slug}`, "href")} class="text-decoration-none"> <div class="card blog-card  d-flex " style="
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
      "> <div class="row col-lg-12  d-flex  "> <img class="col-lg-5 col-md-12 col-sm-12 " style=" object-fit:cover;" ;${addAttribute(image, "src")}${addAttribute(title, "alt")}> <div class="card-body col-sm-12 col-lg-6 d-flex flex-column justify-content-center"> <h1 style="
            font-size: 24px;
            color: #004200;
            margin-bottom: 6px;
          "> ${title} </h1> <p style="font-size: 14px; color: #2f6b2f; margin-bottom: 8px; font-weight: 600"> ${subtitle} </p> <p style="font-size: 12px; color: #999; margin-bottom: 8px "> ${category} · ${date} · ${readTime} · Autor: ${author} </p> <p style="font-size: 16px; color: #555; margin: 0 0 10px 0"> ${excerpt} </p> <div style="display:flex; flex-wrap:wrap; gap: 6px;"> ${tags.map((tag) => renderTemplate`<span style="font-size: 11px; color: #004200; background: #e6f7e6; padding: 2px 6px; border-radius: 4px;"${addAttribute(tag, "key")}> ${tag} </span>`)} </div> </div> </div> </div> </a> </div>`;
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
