# \## blog-populares-astro-dev



\# Huellas de Barrio - Proyecto Astro.js



Sitio web convertido a Astro.js para el Grupo de Investigación MASO - Universidad de Antioquia.



\## Estructura del Proyecto



```

/

├── public/

│   ├── recursos/img/     # Imágenes (logo4.png, logoLitt2.ico)

│   ├── scripts/          # Scripts de JavaScript

│   └── styles/           # Archivos CSS

├── src/

│   ├── components/       # Componentes reutilizables

│   │   ├── Header.astro

│   │   ├── Footer.astro

│   │   └── BlogCard.astro

│   ├── data/

│   │   └── posts.ts      # Datos estáticos de publicaciones

│   ├── layouts/

│   │   └── BaseLayout.astro

│   └── pages/

│       ├── index.astro   # Página principal

│       └── post/

│           └── \[slug].astro  # Páginas dinámicas de posts

└── package.json

```



\## Características



\- \*\*Framework\*\*: Astro.js 6.0

\- \*\*Estilos\*\*: Bootstrap 5.3 + CSS personalizado

\- \*\*Íconos\*\*: Font Awesome 6.7

\- \*\*Navegación\*\*: Sistema de navegación circular entre posts

\- \*\*Componentes\*\*: Header, Footer y BlogCard reutilizables

\- \*\*Datos\*\*: Gestión de posts mediante archivo TypeScript estático

\- \*\*SEO\*\*: Meta tags y estructura optimizada



\## Comandos



```bash

\# Instalar dependencias

npm install



\# Iniciar servidor de desarrollo (localhost)

npm run dev



\# Compilar para producción

npm run build



\# Vista previa de la compilación

npm run preview

```



\## Configuración de Imágenes



Coloca las siguientes imágenes en `public/recursos/img/`:

\- `logo4.png` - Logo principal

\- `logoLitt2.ico` - Favicon



\## Características del Proyecto



\### Sistema de Posts Dinámico

\- Las publicaciones se gestionan en `src/data/posts.ts`

\- Navegación circular entre posts (1→2→3→4→1)

\- Sistema de recomendaciones automático

\- Páginas generadas estáticamente en build time



\### Componentes Principales



1\. \*\*Header\*\*: Navegación principal responsive

2\. \*\*Footer\*\*: Información de contacto y redes sociales

3\. \*\*BlogCard\*\*: Tarjeta de vista previa de publicaciones

4\. \*\*BaseLayout\*\*: Layout base con meta tags y scripts



\### Posts Incluidos



1\. Transformación de barrios populares

2\. Sentipensar el Barrio

3\. La Memoria se Construye Caminando

4\. Barrios Populares y Favelas



\## Integración de Facebook Comments



Los comentarios de Facebook están integrados en cada página de post. La configuración se encuentra en `src/pages/post/\[slug].astro`.



\## Responsive Design



El sitio es completamente responsive con breakpoints para:

\- Mobile (< 600px)

\- Tablet (600px - 991px)

\- Desktop (> 992px)



\## Estilo Visual



\- Colores principales: Verde (#004200, #006600, #33cc66)

\- Tipografía: Sistema de fuentes de Bootstrap

\- Efectos: Hover animations en tarjetas y navegación

\- Layout: Sistema de grid de Bootstrap



\## Producción



El proyecto genera archivos estáticos en la carpeta `dist/` que pueden ser desplegados en cualquier servidor web estático.



\## Autor



Grupo de investigación Medio Ambiente y Sociedad - MASO

Facultad de Ciencias Sociales y Humanas

Universidad de Antioquia - UdeA

\#   b o l t - b l o g - t e s t 

&#x20;

&#x20;



