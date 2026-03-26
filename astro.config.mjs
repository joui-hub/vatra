// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joui-hub.github.io',
  base: '/vatra',
  integrations: [sitemap()],
});
