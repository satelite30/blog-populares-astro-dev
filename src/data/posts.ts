export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  images: string[]; // Nuevo arreglo de imágenes para el post individual
  date: string;
  publish: string; // Nuevo campo en formato DD-MM-YYYY
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  introduction: string;
  contextTitle: string;
  videoYoutube: string[];
  videoLocal: string[];
  imagenContenido: string[];
  audioContenido: string[];
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
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg'
    ],
    date: '17 de Marzo de 2026',
    publish: '17-03-2026',
    author: 'Grupo MASO',
    category: 'Investigación',
    readTime: '4 min',
    tags: ['Memoria', 'Participación', 'Territorio', 'Urbanismo'],
    introduction: 'En este artículo exploramos cómo las prácticas de memoria urbana se entrelazan con estrategias de participación comunitaria en barrios populares, y cómo esas dinámicas construyen nuevos sentidos de territorio.',
    contextTitle: 'Contexto y enfoque',
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: [],
    audioContenido: [],
    context: 'A partir de recorridos, entrevistas y talleres participativos, recogemos relatos de habitantes que asumen sus territorios como espacios de resistencia y esperanza. Este enfoque busca visibilizar voces que son invisibilizadas por procesos de urbanización y mercantilización del espacio.',
    quote: '',
    quoteAuthor: '',
    conclusion: ''
  },
  {
    id: 2,
    slug: 'sentipensar-el-barrio',
    title: 'Sentipensar el Barrio',
    subtitle: 'Proceso de investigación participativa en barrios populares de Medellín y favelas de Río de Janeiro, enfocado en la apropiación social del territorio y la memoria urbana.',
    image: 'https://static.wixstatic.com/media/697903_44489d95207f4048af7abcd1f5f47edd~mv2.jpeg/v1/fill/w_400,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/697903_44489d95207f4048af7abcd1f5f47edd~mv2.jpeg',
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/fotoMuralLaSierra.jpeg'
      
    ],
    date: '20 de Marzo de 2026',
    publish: '20-03-2026',
    author: 'Grupo MASO',
    category: 'Participación Comunitaria',
    readTime: '4 min',
    tags: ['Memoria', 'Participación', 'Santo Domingo Savio', 'Espacialización'],
    introduction: 'Este proyecto explora la memoria urbana del barrio Santo Domingo Savio en Medellín, utilizando metodologías participativas para mapear y narrar las experiencias de sus habitantes.',
    contextTitle: 'Contexto y enfoque',
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: [],
    audioContenido: [],
    context: 'A través de talleres y recorridos, recopilamos relatos que conectan el pasado del barrio con su presente, revelando cómo la memoria colectiva influye en la identidad territorial.',
    quote: 'Sentipensar es habitar el territorio con el corazón y la mente.',
    quoteAuthor: 'Grupo MASO',
    conclusion: 'La espacialización de la memoria urbana permite re-significar espacios urbanos, fortaleciendo el sentido de pertenencia y la resiliencia comunitaria.'
  }
   

];



export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostById(id: number): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getNextPost(currentId: number): Post {
  const totalPosts = posts.length;
  const nextId = currentId === totalPosts ? 1 : currentId + 1;
  return getPostById(nextId)!;
}

export function getPrevPost(currentId: number): Post {
  const totalPosts = posts.length;
  const prevId = currentId === 1 ? totalPosts : currentId - 1;
  return getPostById(prevId)!;
}

export function getRecommendedPosts(currentId: number): Post[] {
  return posts.filter(post => post.id !== currentId);
}

// Función para generar slug automáticamente a partir del título
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Reemplaza espacios por guiones
    .replace(/[^\w\-]+/g, '')       // Remueve caracteres no alfanuméricos excepto guiones
    .replace(/\-\-+/g, '-')         // Reemplaza múltiples guiones por uno
    .replace(/^-+/, '')             // Remueve guiones al inicio
    .replace(/-+$/, '');            // Remueve guiones al final
}
