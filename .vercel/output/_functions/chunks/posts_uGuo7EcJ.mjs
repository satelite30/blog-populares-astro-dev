import { c as createComponent } from './astro-component_BzRi4QGI.mjs';
import 'piccolore';
import { r as renderTemplate, q as renderSlot, v as renderHead, h as addAttribute, m as maybeRenderHead } from './entrypoint_DONAXCHP.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Huellas de Barrio - Publicaciones MASO" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>', '</title><meta name="description"', '><!-- Open Graph --><!-- <meta property="og:title" content={title} />\n    <meta property="og:description" content={description} />\n    <meta property="og:image" content={image} />\n    <meta property="og:url" content={url} />\n    <meta property="og:type" content="article" /> --><!-- Twitter --><!-- <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content={title} />\n    <meta name="twitter:description" content={description} />\n    <meta name="twitter:image" content={image} />\n\n    <link rel="shortcut icon" href="/recursos/img/logoLitt2.ico" type="image/x-icon" />\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="description" content={description} />\n    <title>{title}</title> --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer"><link rel="stylesheet" href="/styles/main.css">', "</head> <body> ", ' <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script> <script src="/scripts/navbar-animation.js"><\/script> </body> </html>'])), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { currentPage = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> <nav class="navbar d-flex navbar-expand-lg navbar-light shadow-sm " style="background: #004200;
"> <div class="container row justify-content-center m-auto d-flex "> <div class="col-sm-10 col-md-12 col-lg-8 "> <a class="navbar-brand m-4 col-sm-10 col-md-11 col-lg-4 d-block d-lg-flex align-items-center" href="https://popular-esmedellin.com" style="justify-content: start"> <img src="https://popular-esmedellin.com/recursos/img/logo4.png" alt="Logo" width="100%" class="logo d-block mx-auto mx-lg-0"> </a> </div> <div class="col-lg-4 col-md-12 col-sm-12"> <button class="navbar-toggler d-lg-none mx-auto mt-2 mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="display: flex; justify-content: center; align-items: center"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse d-lg-flex justify-content-center py-2" id="navbarNavDropdown"> <ul class="navbar-nav ms-auto d-flex justify-content-center w-100"> <li class="nav-item m-auto m-2"> <a class="nav-link" href="https://popular-esmedellin.com">Inicio</a> </li> <li class="nav-item m-auto m-2"> <a class="nav-link" href="https://popular-esmedellin.com/pages/red.html">Red</a> </li> <li class="nav-item m-auto"> <a class="nav-link" href="/">Actualidades</a> </li> <li class="nav-item m-auto"> <a class="nav-link" href="https://popular-esmedellin.com/pages/publicaciones.html">Publicaciones</a> </li> <li class="nav-item m-auto"> <a class="nav-link" href="https://popular-esmedellin.com/pages/contacto.html">Contacto</a> </li> </ul> </div> </div> </div> </nav> </header>`;
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer text-center pt-4" style="background: #002c5f"> <div class="container" id="pie"> <h5 class="text-light">
Grupo de investigación <br>
Medio Ambiente y Sociedad - MASO, Facultad de Ciencias Sociales y
      Humanas - Universidad de Antioquia - UdeA
</h5> <div class="row text-start mt-5 d-flex flex-wrap"> <div class="what-we col-md-3"> <h6 class="text-light">Nuestro sitio web</h6> <p class="text-light">
Este sitio muestra la relación de la línea de investigación
          "Planeación, Ciudadanía, Territorio y Ambiente" del grupo MASO, con
          la sociedad.
</p> <div class="socialNet"> <div class="social-icons mt-4 text-center" style="justify-content: space-between"> <a href="https://www.youtube.com/@lilianamariasanchezmazo9442/videos" target="_blank"><i class="col-3 fab fa-youtube" style="font-size: 34px"></i></a> <a href="#pie"><i class="fa-solid fa-envelope" style="font-size: 34px"></i></a> <a href="https://www.instagram.com/cancionhuellasdebarrio/"><i class="col-3 fab fa-instagram" target="_blank" style="font-size: 34px"></i></a> </div> </div> </div> <div class="col-md-3 what-we"> <div class="bloque"> <a href="https://popular-esmedellin.com"> <img src="https://raw.githubusercontent.com/satelite30/-logossitio/main/Udea1-3.png" style="filter: brightness(0) invert(1); width: 100%" alt="Universidad de Antioquia"> </a> <a href="https://popular-esmedellin.com" class="text-center"> <img src="https://raw.githubusercontent.com/satelite30/-logossitio/main/logo03.png" style="filter: brightness(0) invert(1); width: 100%" alt="Logo MASO" class="text-center justify-content-center"> </a> </div> </div> <div class="col-md-3 what-we"> <h6 class="text-light">Visita también</h6> <div class="mt-2 imagen-foot"> <a href="https://maps.app.goo.gl/Z26f1sb9rBiyAX83A"> <img src="https://www.udea.edu.co/wps/wcm/connect/udea/e687148e-e754-4aae-8588-31cefd3cd8f3/1/siuexterna1.jpg?MOD=AJPERES" alt="Social Image" style="width: 80%"> </a> </div> </div> <div class="col-md-3 text-light what-we" style="font-size: 16px"> <h6>Contacto e información</h6> <ul class="list-unstyled"> <li> <a href="mailto:grupomaso@udea.edu.co">grupomaso@udea.edu.co</a> </li> <li>Contáctanos</li> <li> <a href="https://www.udea.edu.co/wps/portal/udea/web/inicio/investigacion/sede-investigacion-universitaria/acerca-siu" target="_blank"><b>Sede de Investigación Universitaria (SIU)</b></a><br>
Calle 62 #52-59
</li> <li>Medellín - Colombia</li> </ul> </div> </div> </div> </footer>`;
}, "C:/Users/elchecho/Documents/SITIOMASO/CLON-BLOG-BOLT-AST/satelite-blog-pop/src/components/Footer.astro", void 0);

const posts = [
  {
    id: 1,
    slug: "Laboratorio CompartirES PopularES",
    title: "Laboratorio CompartirES PopularES",
    subtitle: "Experiencia de coproducción y apropiación social del conocimiento",
    image: "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg",
    images: [
      "https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg"
    ],
    date: "17 de Marzo de 2026",
    publish: "17-03-2026",
    author: "Grupo MASO",
    category: "apropiación social del conocimiento, cultura, barrio",
    readTime: "4 min",
    tags: ["Memoria", "Participación", "Territorio", "Urbanismo"],
    introductionTitle: "Introducción",
    introductionContent: [
      "El laboratorio “Compartir-es Popular-es”, tiene como pilar los conocimientos teóricos y metodológicos generados en la investigación “Transformación en favelas de Río de Janeiro y barrios populares de Medellín por prácticas de turismo 2019-25372”, culminada en 2022, registrada en SIIU y financiada por la Universidad de Antioquia, El Banco de la República, sede Medellín, El Sistema de Bibliotecas Públicas de Medellín y diversos colectivos comunitarios de las comunas 1 (Popular), 2 (Santa Cruz), 8 (Doce de Octubre) y 13 (San Javier)."
    ],
    contextTitle: "Descripción",
    contextContent: [
      "Dada la realidad de una creciente actividad turística en la ciudad y en el país, es menester que la UdeA como universidad pública continúe promoviendo y fortaleciendo espacios para el diálogo, la coproducción y la apropiación de conocimientos de utilidad social que, en este caso, enfoca en las consecuencias extractivistas del turismo en barrios populares de Medellín. En razón de lo anterior, con el laboratorio se da continuidad al principio ético de la investigación culminada, asociado con la generación de un conocimiento contextualizado, intencionado y participativo derivado del diálogo de saberes entre actores del sector académico, barrial y gubernamental.",
      "Con estos productos -videoclip, mural-postal, artículo periodístico y fanzine- se aporta al campo urbano-popular con contenidos divulgativos y de apropiación social del conocimiento. El objetivo del laboratorio “Compartir-es Popular-es” es diseñar, recrear y difundir tales productos en formatos comunicativos y artísticos para el cuidado y protección barrial como expresión de paz territorial. Su importancia radica en que contiene productos individuales que, vistos en conjunto, sirven como dispositivo cultural para que ciudadanía y visitantes ganen conciencia sobre las implicaciones de las contradicciones del turismo en el cotidiano de los barrios populares. Además de importante, es potente dado que los contenidos, los formatos, los públicos objetivo, las estrategias de socialización y los alcances intencionados en cada producto acuden a creaciones gráficas, musicales, de lectura, escritura y oralidad para comunicar, sensibilizar y promover la juntanza."
    ],
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: ["https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg", "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/WhatsApp%20Image%202026-01-28%20at%2012.33.38%20PM.jpeg", "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg", "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/FotoMuralSantoDom.jpeg"],
    textoSecundario: [
      "El impacto estuvo dirigido a niños y niñas de la comuna 1 del barrio Carpinelo participantes de la biblioteca comunitaria Bibliocielo y, como hallazgo emergente, al semillero ambiental Semilla Somos del barrio Bello Oriente de la Comuna 3; habitantes del barrio Santo Domingo y usuarios del Parque Biblioteca Nororiental (Comuna 1); niños, niñas y jóvenes del barrio La Sierra; lectores del periódico comunitario Mi Comuna 2.  Los resultados obtenidos con la puesta en marcha de este fondo fueron la realización participativa de 4 productos divulgativos en formatos diversos y cercanos, el fortalecimiento de antiguos vínculos de colaboración y generación de nuevas redes que expande el impacto de la acción investigativa y de extensión de la universidad a través del grupo MASO.",
      "Se despliegan a su vez otros resultados cualitativos en los participantes que contribuyen a la construcción y apropiación del territorio para la promoción de estrategias colectivas que promueven la paz y el buen vivir. A su vez los aprendizajes de este proceso fueron múltiples para los diferentes actores participantes: universidad, institucionalidad, a través del Sistema de Bibliotecas Públicas de Medellín y para habitantes de barrios populares de Medellín.",
      "La ejecución de este Fondo como un proceso de divulgación co-construido para la divulgación del conocimiento apropiado y reapropiado contribuyó con la democratización del conocimiento científico.  "
    ],
    audioContenido: [],
    socialLinkFace: [],
    socialLinkInsta: [],
    socialLinkX: [],
    linkDocumento: ["https://popular-esmedellin.com/pages/proyecto-2022-compartires-populares.html"],
    nombreBoton: ["Conoce más"],
    quote: "",
    quoteAuthor: "",
    conclusionTitle: "Conclusión",
    conclusionContent: []
  },
  {
    id: 2,
    slug: "Tramas urbanas al revés",
    title: "Tramas urbanas al revés",
    subtitle: "Intercambios entre políticas públicas, prácticas de turismo y participación social en barrios populares de Medellín y favelas de Río de Janeiro en el siglo XXI",
    image: "https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/tramas-urbanas-al-reves.webp",
    images: [
      "https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/Lanzamiento%20LibroUniversidad%20FederaldeRiodeJaneiro%202026-01-28.jpeg"
    ],
    date: "2 de Marzo de 2026",
    publish: "02-03-2026",
    author: "Grupo MASO",
    category: "Transformaciones urbanas, Barrios populares, Turismo comunitario, Patrimonio popular, Turistificación, Mercantilización urbana",
    readTime: "4 min",
    tags: ["Transformaciones urbanas", "Barrios populares", "Turismo comunitario", "Patrimonio popular", "Turistificación", "Mercantilización urbana"],
    introductionTitle: "Introducción",
    introductionContent: [
      "Este libro examina críticamente las transformaciones urbanas recientes en barrios populares de Medellín (Colombia) y favelas de Río de Janeiro (Brasil), analizando los impactos entrecruzados de políticas públicas, prácticas turísticas y participación social en estos territorios. A través de un enfoque sur-sur, la obra revela cómo discursos institucionales que promueven el derecho a la ciudad conviven con procesos de mercantilización, turistificación y desigualdad socioespacial."
    ],
    contextTitle: "",
    contextContent: [
      "El texto es fruto de un trabajo colaborativo entre universidades públicas, colectivos comunitarios e instituciones gubernamentales de ambos países, que desde la investigación, la intervención y la docencia analizaron la apropiación del espacio urbano por parte de actores locales y las tensiones generadas por el turismo en contextos populares. Los estudios de caso incluyen comunas populares de Medellín y favelas como Cantagalo, Pavão-Pavãozinho y Santa Marta en Río de Janeiro.",
      "Organizado en cuatro partes (teórica, contextual, experiencial y propositiva), el libro ofrece una mirada interdisciplinaria que vincula estudios urbanos, turismo comunitario, patrimonio popular y apropiación social del conocimiento. Se plantea una crítica al modelo de desarrollo urbano neoliberal y se destacan alternativas comunitarias que luchan por salvaguardar memorias, fortalecer identidades barriales y promover una justicia cognitiva desde los márgenes. Tramas urbanas al revés propone así una relectura de las dinámicas urbanas contemporáneas y abre un diálogo plural entre habitantes y visitantes, academia y comunidad, memoria y presente."
    ],
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: ["https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/tramas-urbanas-al-reves.webp", "https://raw.githubusercontent.com/satelite30/-logossitio/main/imagenesprom/DSC_9326-1.png"],
    textoSecundario: ["Liliana María Sánchez Mazo, Universidad de Antioquia, Colombia Doctora en Arquitectura y Urbanismo por la Universidade de São Paulo-Brasil. Profesora Titular de la Universidad de Antioquia, adscrita al Departamento de Trabajo Social de la Facultad de Ciencias Sociales y Humanas. Investigadora del grupo Medio Ambiente y Sociedad, línea Planeación, Ciudadanía y Territorio.", "Sergio Moraes Rego Fagerlande, Universidade Federal do Rio de Janeiro, Brazil Doctor en Urbanismo por la Universidade Federal do Rio de Janeiro (UFRJ), posdoctor en Urbanismo, UFRJ, y en Urbanismo por École d’Urbanisme de Paris. Profesor adjunto de la Faculdade de Arquitetura e Urbanismo, UFRJ, y profesor del programa de Pós-graduação em Urbanismo (PROURB) de la misma universidad. Investigador en el Laboratório de Estudos e Pesquisas em Cidades, programa de Pós-graduação em Urbanismo (PROURB/FAU-UFRJ).", "Luiz Alexandre Lellis Mees, Universidade Federal do Estado do Rio de Janeiro, Brazil Doctor en Antropología por la Universidade Federal Fluminense. Profesor del Departamento de Turismo y Patrimonio de la Universidade Federal do Estado do Rio de Janeiro (UNIRIO). Investigador de los grupos Turismo e Geograficidades, UNIRIO, y Laborátorio de Estudos de Memória Brasileira e Representação (LEMBRAR) de la misma universidad."],
    audioContenido: [],
    socialLinkFace: [],
    socialLinkInsta: [],
    socialLinkX: [],
    linkDocumento: ["https://libros.udea.edu.co/index.php/editorial_fcsh/catalog/book/663"],
    nombreBoton: ["Conoce más"],
    quote: "",
    quoteAuthor: "Grupo MASO",
    conclusionTitle: "Autores",
    conclusionContent: []
  },
  {
    id: 3,
    slug: "Laboratorio CompartirES PopularES",
    title: "Laboratorio CompartirES PopularES",
    subtitle: "Experiencia de coproducción y apropiación social del conocimiento",
    image: "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg",
    images: [
      "https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg"
    ],
    date: "17 de Marzo de 2026",
    publish: "17-03-2026",
    author: "Grupo MASO",
    category: "apropiación social del conocimiento, cultura, barrio",
    readTime: "4 min",
    tags: ["Memoria", "Participación", "Territorio", "Urbanismo"],
    introductionTitle: "Introducción",
    introductionContent: [
      "El laboratorio “Compartir-es Popular-es”, tiene como pilar los conocimientos teóricos y metodológicos generados en la investigación “Transformación en favelas de Río de Janeiro y barrios populares de Medellín por prácticas de turismo 2019-25372”, culminada en 2022, registrada en SIIU y financiada por la Universidad de Antioquia, El Banco de la República, sede Medellín, El Sistema de Bibliotecas Públicas de Medellín y diversos colectivos comunitarios de las comunas 1 (Popular), 2 (Santa Cruz), 8 (Doce de Octubre) y 13 (San Javier)."
    ],
    contextTitle: "Descripción",
    contextContent: [
      "Dada la realidad de una creciente actividad turística en la ciudad y en el país, es menester que la UdeA como universidad pública continúe promoviendo y fortaleciendo espacios para el diálogo, la coproducción y la apropiación de conocimientos de utilidad social que, en este caso, enfoca en las consecuencias extractivistas del turismo en barrios populares de Medellín. En razón de lo anterior, con el laboratorio se da continuidad al principio ético de la investigación culminada, asociado con la generación de un conocimiento contextualizado, intencionado y participativo derivado del diálogo de saberes entre actores del sector académico, barrial y gubernamental.",
      "Con estos productos -videoclip, mural-postal, artículo periodístico y fanzine- se aporta al campo urbano-popular con contenidos divulgativos y de apropiación social del conocimiento. El objetivo del laboratorio “Compartir-es Popular-es” es diseñar, recrear y difundir tales productos en formatos comunicativos y artísticos para el cuidado y protección barrial como expresión de paz territorial. Su importancia radica en que contiene productos individuales que, vistos en conjunto, sirven como dispositivo cultural para que ciudadanía y visitantes ganen conciencia sobre las implicaciones de las contradicciones del turismo en el cotidiano de los barrios populares. Además de importante, es potente dado que los contenidos, los formatos, los públicos objetivo, las estrategias de socialización y los alcances intencionados en cada producto acuden a creaciones gráficas, musicales, de lectura, escritura y oralidad para comunicar, sensibilizar y promover la juntanza."
    ],
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: ["https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg", "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/WhatsApp%20Image%202026-01-28%20at%2012.33.38%20PM.jpeg", "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg", "https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/FotoMuralSantoDom.jpeg"],
    textoSecundario: [
      "El impacto estuvo dirigido a niños y niñas de la comuna 1 del barrio Carpinelo participantes de la biblioteca comunitaria Bibliocielo y, como hallazgo emergente, al semillero ambiental Semilla Somos del barrio Bello Oriente de la Comuna 3; habitantes del barrio Santo Domingo y usuarios del Parque Biblioteca Nororiental (Comuna 1); niños, niñas y jóvenes del barrio La Sierra; lectores del periódico comunitario Mi Comuna 2.  Los resultados obtenidos con la puesta en marcha de este fondo fueron la realización participativa de 4 productos divulgativos en formatos diversos y cercanos, el fortalecimiento de antiguos vínculos de colaboración y generación de nuevas redes que expande el impacto de la acción investigativa y de extensión de la universidad a través del grupo MASO.",
      "Se despliegan a su vez otros resultados cualitativos en los participantes que contribuyen a la construcción y apropiación del territorio para la promoción de estrategias colectivas que promueven la paz y el buen vivir. A su vez los aprendizajes de este proceso fueron múltiples para los diferentes actores participantes: universidad, institucionalidad, a través del Sistema de Bibliotecas Públicas de Medellín y para habitantes de barrios populares de Medellín.",
      "La ejecución de este Fondo como un proceso de divulgación co-construido para la divulgación del conocimiento apropiado y reapropiado contribuyó con la democratización del conocimiento científico.  "
    ],
    audioContenido: [],
    socialLinkFace: [],
    socialLinkInsta: [],
    socialLinkX: [],
    linkDocumento: ["https://popular-esmedellin.com/pages/proyecto-2022-compartires-populares.html"],
    nombreBoton: ["Conoce más"],
    quote: "",
    quoteAuthor: "",
    conclusionTitle: "Conclusión",
    conclusionContent: []
  }
];
function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
function getPostById(id) {
  return posts.find((post) => post.id === id);
}
function getNextPost(currentId) {
  const totalPosts = posts.length;
  const nextId = currentId === totalPosts ? 1 : currentId + 1;
  return getPostById(nextId);
}
function getPrevPost(currentId) {
  const totalPosts = posts.length;
  const prevId = currentId === 1 ? totalPosts : currentId - 1;
  return getPostById(prevId);
}
function getRecommendedPosts(currentId) {
  return posts.filter((post) => post.id !== currentId);
}

export { $$BaseLayout as $, $$Header as a, $$Footer as b, getNextPost as c, getPrevPost as d, getRecommendedPosts as e, getPostBySlug as g, posts as p };
