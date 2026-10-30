// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  site: "https://astro-app.wb2k9.workers.dev/",
  session: false,
  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()],
  },
});