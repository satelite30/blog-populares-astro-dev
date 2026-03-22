export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  introduction: string;
  contextTitle: string;
  context: string;
  quote: string;
  quoteAuthor: string;
  conclusion: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'transformacion-barrios-populares',
    title: 'Transformación de barrios populares',
    subtitle: 'Una mirada crítica a la memoria urbana y la participación comunitaria',
    image: 'https://static.wixstatic.com/media/697903_14a4e71cde2f4069a2180282fa7410a4~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5769_JPG.jpg',
    date: '17 de marzo de 2026',
    author: 'Grupo MASO',
    category: 'Investigación',
    readTime: '4 min',
    tags: ['Memoria', 'Participación', 'Territorio', 'Urbanismo'],
    introduction: 'En este artículo exploramos cómo las prácticas de memoria urbana se entrelazan con estrategias de participación comunitaria en barrios populares, y cómo esas dinámicas construyen nuevos sentidos de territorio.',
    contextTitle: 'Contexto y enfoque',
    context: 'A partir de recorridos, entrevistas y talleres participativos, recogemos relatos de habitantes que asumen sus territorios como espacios de resistencia y esperanza. Este enfoque busca visibilizar voces que son invisibilizadas por procesos de urbanización y mercantilización del espacio.',
    quote: 'La memoria urbana no es sólo registro del pasado, es una herramienta para construir futuros posibles.',
    quoteAuthor: 'Comunidad MASO',
    conclusion: 'El trabajo colectivo en los barrios demuestra que la memoria es un acto político: reconfigura sentidos de pertenencia, cuestiona narrativas dominantes y abre caminos para la transformación social.'
  },
  {
    id: 2,
    slug: 'sentipensar-el-barrio',
    title: 'Sentipensar el Barrio',
    subtitle: 'Proceso de investigación participativa en barrios populares de Medellín y favelas de Río de Janeiro, enfocado en la apropiación social del territorio y la memoria urbana.',
    image: 'https://static.wixstatic.com/media/697903_44489d95207f4048af7abcd1f5f47edd~mv2.jpeg/v1/fill/w_400,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/697903_44489d95207f4048af7abcd1f5f47edd~mv2.jpeg',
    date: '20 de marzo de 2026',
    author: 'Grupo MASO',
    category: 'Participación Comunitaria',
    readTime: '4 min',
    tags: ['Memoria', 'Participación', 'Santo Domingo Savio', 'Espacialización'],
    introduction: 'Este proyecto explora la memoria urbana del barrio Santo Domingo Savio en Medellín, utilizando metodologías participativas para mapear y narrar las experiencias de sus habitantes.',
    contextTitle: 'Contexto y enfoque',
    context: 'A través de talleres y recorridos, recopilamos relatos que conectan el pasado del barrio con su presente, revelando cómo la memoria colectiva influye en la identidad territorial.',
    quote: 'Sentipensar es habitar el territorio con el corazón y la mente.',
    quoteAuthor: 'Grupo MASO',
    conclusion: 'La espacialización de la memoria urbana permite re-significar espacios urbanos, fortaleciendo el sentido de pertenencia y la resiliencia comunitaria.'
  },
  {
    id: 3,
    slug: 'la-memoria-se-construye-caminando',
    title: 'La Memoria se Construye Caminando',
    subtitle: 'Ejercicio colectivo de reconstrucción de la memoria urbana mediante recorridos territoriales',
    image: 'https://static.wixstatic.com/media/697903_f643b0e2fffc45afb2b9a45e856e6a04~mv2_d_2592_1728_s_2.jpg/v1/fill/w_400,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/697903_f643b0e2fffc45afb2b9a45e856e6a04~mv2_d_2592_1728_s_2.jpg',
    date: '19 de marzo de 2026',
    author: 'Grupo MASO',
    category: 'Memoria Urbana',
    readTime: '4 min',
    tags: ['Memoria', 'Recorridos', 'Colectivo', 'Territorio'],
    introduction: 'Este proyecto utiliza recorridos territoriales como metodología para reconstruir colectivamente la memoria urbana de barrios populares, permitiendo re-significar formas de habitar el espacio.',
    contextTitle: 'Contexto y enfoque',
    context: 'A través de caminatas guiadas por habitantes, documentamos historias y experiencias que revelan capas ocultas de la memoria urbana, conectando pasado, presente y futuro.',
    quote: 'Caminar es recordar, recordar es transformar.',
    quoteAuthor: 'Grupo MASO',
    conclusion: 'Los recorridos territoriales demuestran que la memoria urbana se construye en movimiento, generando espacios de diálogo y transformación social.'
  },
  {
    id: 4,
    slug: 'barrios-populares-y-favelas',
    title: 'Barrios Populares y Favelas',
    subtitle: 'Estudio comparativo entre barrios populares de Medellín y favelas de São Paulo',
    image: 'https://static.wixstatic.com/media/697903_ca928a40426c40069751ced4417c8c01~mv2_d_2592_1728_s_2.jpg/v1/fill/w_400,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/697903_ca928a40426c40069751ced4417c8c01~mv2_d_2592_1728_s_2.jpg',
    date: '21 de marzo de 2026',
    author: 'Grupo MASO',
    category: 'Transformación Social',
    readTime: '4 min',
    tags: ['Comparativo', 'Urbanización', 'Participación', 'Favelas'],
    introduction: 'Este estudio compara dinámicas de urbanización, participación y transformación social entre barrios populares de Medellín y favelas de São Paulo, identificando similitudes y diferencias en contextos similares.',
    contextTitle: 'Contexto y enfoque',
    context: 'Analizamos procesos de urbanización informal, estrategias de participación comunitaria y mecanismos de transformación social, destacando lecciones aprendidas en ambos contextos.',
    quote: 'Las periferias urbanas comparten historias de resistencia y esperanza.',
    quoteAuthor: 'Grupo MASO',
    conclusion: 'El estudio comparativo revela que, a pesar de las diferencias culturales y políticas, las comunidades periféricas desarrollan estrategias similares de apropiación territorial y transformación social.'
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostById(id: number): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getNextPost(currentId: number): Post {
  const nextId = currentId === 4 ? 1 : currentId + 1;
  return getPostById(nextId)!;
}

export function getPrevPost(currentId: number): Post {
  const prevId = currentId === 1 ? 4 : currentId - 1;
  return getPostById(prevId)!;
}

export function getRecommendedPosts(currentId: number): Post[] {
  return posts.filter(post => post.id !== currentId);
}
