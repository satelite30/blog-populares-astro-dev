// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
// Modo 'server' para permitir SSR en rutas dinámicas como [slug].astro
// Alternativamente, podrías usar 'static' (defecto) pero requeriría reconstruir al agregar posts
export default defineConfig({
  output: 'server'
});