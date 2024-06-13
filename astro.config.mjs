import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite"

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
