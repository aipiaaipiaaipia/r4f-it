// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://r4f.it',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://r4f.it/') item.priority = 1.0;
        else if (/\/(audit-llmo|servizi|chi-sono)$/.test(item.url)) item.priority = 0.9;
        else if (/\/consulente-llmo-/.test(item.url)) item.priority = 0.9;
        else if (/\/(metodo|libri|aipia|formazione)$/.test(item.url)) item.priority = 0.8;
        else if (/\/risorse\/[^/]+$/.test(item.url)) item.priority = 0.7;
        else if (/\/(privacy-policy|cookie-policy)$/.test(item.url)) item.priority = 0.3;
        else item.priority = 0.6;
        return item;
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
