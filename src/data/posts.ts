export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  images: string[]; // Nuevo arreglo de imágenes para el post individual
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
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg'
    ],
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
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/fotoMuralLaSierra.jpeg'
      
    ],
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
    images: [
      'https://raw.githubusercontent.com/satelite30/logo-test/refs/heads/main/corazon1.jpeg'
    ],
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
    images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/imagenesprom/DSC_9320-2.webp'],
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
  },
  {
  id: 5,
  slug: 'titulo-de-la-nueva-entrada',
  title: 'Título de la Nueva Entrada',
  subtitle: 'Subtítulo descriptivo',
  image: 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/WhatsApp%20Image%202026-01-28%20at%2012.38.10%20PM.jpeg',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '22 de marzo de 2026',
  author: 'Grupo MASO',
  category: 'Investigación',  // O la categoría que prefieras
  readTime: '5 min',
  tags: ['Nuevo', 'Tema'],
  introduction: 'Texto introductorio...',
  contextTitle: 'Contexto',
  context: 'Desarrollo del contexto...',
  quote: 'Cita relevante.',
  quoteAuthor: 'Autor de la cita',
  conclusion: 'Conclusión final.'
},

{
  id: 6,
  slug: 'nueva-entrada-2026',
  title: 'Título de la Nueva Entrada',
  subtitle: 'Subtítulo descriptivo',
  image: 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/WhatsApp%20Image%202026-01-28%20at%2012.50.57%20PM.jpeg',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '22 de marzo de 2026',
  author: 'Grupo MASO',
  category: 'Investigación',
  readTime: '5 min',
  tags: ['Nuevo', 'Tema'],
  introduction: 'Texto introductorio...',
  contextTitle: 'Contexto',
  context: 'Desarrollo del contexto...',
  quote: 'Cita relevante.',
  quoteAuthor: 'Autor de la cita',
  conclusion: 'Conclusión final.'
},

{
  id: 7,
  slug: 'recorrido-cultural-barrial',
  title: 'Recorrido Cultural Barrial',
  subtitle: 'Explorando historias y tradiciones en cada esquina',
  image: 'https://via.placeholder.com/400x250?text=Barrio+7',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '23 de marzo de 2026',
  author: 'Equipo MASO',
  category: 'Memoria Urbana',
  readTime: '5 min',
  tags: ['Cultura', 'Barrio', 'Tradición'],
  introduction: 'Un paseo por los relatos y vestigios culturales que sostienen la identidad comunitaria.',
  contextTitle: 'Recorrido participativo',
  context: 'La iniciativa puso el foco en dieciséis puntos clave de la memoria colectiva del barrio.',
  quote: 'La memoria se construye día a día en cada esquina.',
  quoteAuthor: 'Vecina histórica',
  conclusion: 'Los recorridos son herramientas clave para fortalecer el arraigo y el tejido social.'
},
{
  id: 8,
  slug: 'huellas-en-espacios-publicos',
  title: 'Huellas en Espacios Públicos',
  subtitle: 'Acciones comunitarias para transformar plazas y parques',
  image: 'https://via.placeholder.com/400x250?text=Plaza+8',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '24 de marzo de 2026',
  author: 'Equipo MASO',
  category: 'Transformación Social',
  readTime: '6 min',
  tags: ['Espacio público', 'Participación', 'Vecindario'],
  introduction: 'Experiencias de intervención comunitaria para recuperar espacios de encuentro.',
  contextTitle: 'Intervención colectiva',
  context: 'El proyecto contó con más de 70 participantes que diseñaron y ejecutaron actividades en conjunto.',
  quote: 'Los espacios públicos son patrimonio de todos.',
  quoteAuthor: 'Líder comunitario',
  conclusion: 'La gestión compartida de plazas fortalece el sentido de pertenencia y la seguridad vecinal.'
},
{
  id: 9,
  slug: 'memoria-digital-de-barrio',
  title: 'Memoria Digital de Barrio',
  subtitle: 'Archivo colaborativo con fotos y relatos',
  image: 'https://via.placeholder.com/400x250?text=Digital+9',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '25 de marzo de 2026',
  author: 'Comunidad MASO',
  category: 'Investigación',
  readTime: '5 min',
  tags: ['Digital', 'Archivo', 'Historias'],
  introduction: 'Creación de un repositorio digital que recoge las voces de habitantes y su memoria cotidiana.',
  contextTitle: 'Plataforma colaborativa',
  context: 'Familias aportaron fotografías antiguas y textos para construir un patrimonio común.' ,
  quote: 'La tecnología puede ser aliada de la memoria.',
  quoteAuthor: 'Participante del taller',
  conclusion: 'El archivo digital amplía el acceso y conserva memorias que de otro modo se perderían.'
},
{
  id: 10,
  slug: 'arte-urbano-y-memoria',
  title: 'Arte Urbano y Memoria',
  subtitle: 'Muralismo colectivo para narrar historias de resistencia',
  image: 'https://via.placeholder.com/400x250?text=Arte+10',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '26 de marzo de 2026',
  author: 'Colectivo Creativo',
  category: 'Participación Comunitaria',
  readTime: '6 min',
  tags: ['Mural', 'Arte', 'Resistencia'],
  introduction: 'Se presenta un proyecto de arte urbano que visibiliza memorias de lucha y convivencia.',
  contextTitle: 'Mural participativo',
  context: 'Vecinos y artistas diseñaron un mural en conjunto, inspirado en relatos de vida.',
  quote: 'Pintar es contar lo que no se puede callar.',
  quoteAuthor: 'Artista muralista',
  conclusion: 'La intervención artística fortalece el espacio público y las narrativas comunitarias.'
},
{
  id: 11,
  slug: 'jovenes-protagonistas-del-cambio',
  title: 'Jóvenes Protagonistas del Cambio',
  subtitle: 'Iniciativas juveniles para incidir en políticas locales',
  image: 'https://via.placeholder.com/400x250?text=Jovenes+11',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '27 de marzo de 2026',
  author: 'Juventud MASO',
  category: 'Transformación Social',
  readTime: '5 min',
  tags: ['Juventud', 'Política', 'Agencia'],
  introduction: 'Historias de jóvenes que se organizan y proponen reformas en sus comunidades.',
  contextTitle: 'Proceso de incidencia',
  context: 'Una serie de encuentros con gobiernos locales permitió que propuestas de jóvenes se integraran en planes de acción.',
  quote: 'Tenemos voz y queremos ser escuchados.',
  quoteAuthor: 'Representante juvenil',
  conclusion: 'El protagonismo juvenil es motor de cambio y renovación democrática.'
},
{
  id: 12,
  slug: 'ecologia-urbana-en-comun',
  title: 'Ecología Urbana en Común',
  subtitle: 'Proyectos de huertos compartidos y reciclaje',
  image: 'https://via.placeholder.com/400x250?text=Huerto+12',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '28 de marzo de 2026',
  author: 'Red Verde',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Ecología', 'Huertos', 'Reciclaje'],
  introduction: 'Propuestas de ecología urbana que involucran y educan a ciudadanos de todas las edades.',
  contextTitle: 'Huerto comunitario',
  context: 'Se transformaron lotes baldíos en espacios productivos y educativos, con participación activa de niños y adultos.',
  quote: 'Cuidar la tierra es cuidar el futuro.',
  quoteAuthor: 'Agricultor urbano',
  conclusion: 'Acciones ecológicas generan bienestar ambiental y fortalecen redes sociales locales.'
},
{
  id: 13,
  slug: 'musica-y-revitalizacion-barrial',
  title: 'Música y Revitalización Barrial',
  subtitle: 'Festivales locales como nueva forma de encuentro',
  image: 'https://via.placeholder.com/400x250?text=Musica+13',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '29 de marzo de 2026',
  author: 'Colectivo Sonoro',
  category: 'Memoria Urbana',
  readTime: '4 min',
  tags: ['Música', 'Festival', 'Cultura'],
  introduction: 'Un evento comunitario que combina tejido social y patrimonio sonoro urbano.',
  contextTitle: 'Festival barrial',
  context: 'Bandas locales, cantautores y DJ convirtieron una calle en un espacio de celebración y memoria.',
  quote: 'La música es una forma de memoria colectiva.',
  quoteAuthor: 'Organizador cultural',
  conclusion: 'Las músicas del barrio son una forma de resistencia y construcción identidad.'
},
{
  id: 14,
  slug: 'patrimonio-oral-de-la-vecindad',
  title: 'Patrimonio Oral de la Vecindad',
  subtitle: 'Grabaciones de testimonios y leyendas locales',
  image: 'https://via.placeholder.com/400x250?text=Oral+14',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '30 de marzo de 2026',
  author: 'Museo Vivo',
  category: 'Investigación',
  readTime: '4 min',
  tags: ['Patrimonio', 'Oral', 'Historias'],
  introduction: 'Recopilación de relatos orales que conforman la memoria vivida del barrio.',
  contextTitle: 'Colectiva de relato',
  context: 'Entrevistas con personas mayores permitieron capturar saberes y anécdotas esenciales.',
  quote: 'Las historias nunca mueren si hay quien las comparta.',
  quoteAuthor: 'Abuela del barrio',
  conclusion: 'Rescatar el patrimonio oral fortalece el vínculo intergeneracional.'
},
{
  id: 15,
  slug: 'infraestructura-social-colaborativa',
  title: 'Infraestructura Social Colaborativa',
  subtitle: 'Espacios de encuentro creados por vecinos para vecinos',
  image: 'https://via.placeholder.com/400x250?text=Infraestructura+15',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '31 de marzo de 2026',
  author: 'Red Comunitaria',
  category: 'Transformación Social',
  readTime: '6 min',
  tags: ['Infraestructura', 'Colaboración', 'Comunidad'],
  introduction: 'Crear infraestructura social con base en las necesidades reales del territorio.',
  contextTitle: 'Diseño participativo',
  context: 'Se levantaron necesidades y se diseñaron plazas eventos, nodos culturales y centros de apoyo.',
  quote: 'Construir entre todos es construir mejor.',
  quoteAuthor: 'Facilitador local',
  conclusion: 'El trabajo colaborativo genera espacios más pertinentes y sostenibles.'
},
{
  id: 16,
  slug: 'cine-comunitario-de-barrio',
  title: 'Cine Comunitario de Barrio',
  subtitle: 'Programación audiovisual con enfoque territorial',
  image: 'https://via.placeholder.com/400x250?text=Cine+16',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '1 de abril de 2026',
  author: 'Cine en la Esquina',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Cine', 'Comunidad', 'Narrativas'],
  introduction: 'Proyección de películas y cortos que narran vidas y luchas locales.',
  contextTitle: 'Festival barrial',
  context: 'Participación de jóvenes creadores, debates y talleres alrededor de la creación audiovisual.',
  quote: 'Mostrar nuestras historias es recuperar nuestro espacio.',
  quoteAuthor: 'Cineasta comunitario',
  conclusion: 'El cine participativo impulsa el reconocimiento y la gobernanza cultural del barrio.'
},

{
  id: 17,
  slug: 'cine-comunitario-de-barrio',
  title: 'Cine Comunitario de Barrio',
  subtitle: 'Programación audiovisual con enfoque territorial',
  image: 'https://via.placeholder.com/400x250?text=Cine+17',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '1 de abril de 2026',
  author: 'Cine en la Esquina',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Cine', 'Comunidad', 'Narrativas'],
  introduction: 'Proyección de películas y cortos que narran vidas y luchas locales.',
  contextTitle: 'Festival barrial',
  context: 'Participación de jóvenes creadores, debates y talleres alrededor de la creación audiovisual.',
  quote: 'Mostrar nuestras historias es recuperar nuestro espacio.',
  quoteAuthor: 'Cineasta comunitario',
  conclusion: 'El cine participativo impulsa el reconocimiento y la gobernanza cultural del barrio.'
},

{
  id: 18,
  slug: 'cine-comunitario-de-barrio',
  title: 'Cine Comunitario de Barrio',
  subtitle: 'Programación audiovisual con enfoque territorial',
  image: 'https://via.placeholder.com/400x250?text=Cine+18',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '1 de abril de 2026',
  author: 'Cine en la Esquina',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Cine', 'Comunidad', 'Narrativas'],
  introduction: 'Proyección de películas y cortos que narran vidas y luchas locales.',
  contextTitle: 'Festival barrial',
  context: 'Participación de jóvenes creadores, debates y talleres alrededor de la creación audiovisual.',
  quote: 'Mostrar nuestras historias es recuperar nuestro espacio.',
  quoteAuthor: 'Cineasta comunitario',
  conclusion: 'El cine participativo impulsa el reconocimiento y la gobernanza cultural del barrio.'
},

{
  id: 19,
  slug: 'cine-comunitario-de-barrio',
  title: 'Cine Comunitario de Barrio',
  subtitle: 'Programación audiovisual con enfoque territorial',
  image: 'https://via.placeholder.com/400x250?text=Cine+19',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '1 de abril de 2026',
  author: 'Cine en la Esquina',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Cine', 'Comunidad', 'Narrativas'],
  introduction: 'Proyección de películas y cortos que narran vidas y luchas locales.',
  contextTitle: 'Festival barrial',
  context: 'Participación de jóvenes creadores, debates y talleres alrededor de la creación audiovisual.',
  quote: 'Mostrar nuestras historias es recuperar nuestro espacio.',
  quoteAuthor: 'Cineasta comunitario',
  conclusion: 'El cine participativo impulsa el reconocimiento y la gobernanza cultural del barrio.'
},

{
  id: 20,
  slug: 'cine-comunitario-de-barrio',
  title: 'Cine Comunitario de Barrio',
  subtitle: 'Programación audiovisual con enfoque territorial',
  image: 'https://via.placeholder.com/400x250?text=Cine+20',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '1 de abril de 2026',
  author: 'Cine en la Esquina',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Cine', 'Comunidad', 'Narrativas'],
  introduction: 'Proyección de películas y cortos que narran vidas y luchas locales.',
  contextTitle: 'Festival barrial',
  context: 'Participación de jóvenes creadores, debates y talleres alrededor de la creación audiovisual.',
  quote: 'Mostrar nuestras historias es recuperar nuestro espacio.',
  quoteAuthor: 'Cineasta comunitario',
  conclusion: 'El cine participativo impulsa el reconocimiento y la gobernanza cultural del barrio.'
},

{
  id: 21,
  slug: 'cine-comunitario-de-barrio',
  title: 'Cine Comunitario de Barrio',
  subtitle: 'Programación audiovisual con enfoque territorial',
  image: 'https://via.placeholder.com/400x250?text=Cine+21',
  images: ['https://raw.githubusercontent.com/satelite30/-logossitio/refs/heads/main/logo03.png'],
  date: '1 de abril de 2026',
  author: 'Cine en la Esquina',
  category: 'Participación Comunitaria',
  readTime: '5 min',
  tags: ['Cine', 'Comunidad', 'Narrativas'],
  introduction: 'Proyección de películas y cortos que narran vidas y luchas locales.',
  contextTitle: 'Festival barrial',
  context: 'Participación de jóvenes creadores, debates y talleres alrededor de la creación audiovisual.',
  quote: 'Mostrar nuestras historias es recuperar nuestro espacio.',
  quoteAuthor: 'Cineasta comunitario',
  conclusion: 'El cine participativo impulsa el reconocimiento y la gobernanza cultural del barrio.'
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
