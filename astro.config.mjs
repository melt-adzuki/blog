import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from "vite"

import tailwindcss from '@tailwindcss/vite';

const { DEPLOYMENT_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: DEPLOYMENT_URL,
  integrations: [mdx(), sitemap()],

  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
