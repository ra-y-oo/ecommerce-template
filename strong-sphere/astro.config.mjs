// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk()],
  adapter: vercel(),
  output: "server",
});