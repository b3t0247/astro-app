// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  site: "https://astro-app.wb2k9.workers.dev/",
  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()],
  },
});