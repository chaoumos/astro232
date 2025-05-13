import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://vvvbnbnnvc.com', // Placeholder, will be updated later
  base: '/', // Placeholder
  integrations: [tailwind(),react()],
  markdown: {
    shikiConfig: {
      theme: 'monokai',
      wrap: false
    }
  }
  // Output can be 'server' for SSR or 'static' (default)
  // output: 'server', 
  // adapter: node({ mode: 'standalone' }), // Example for SSR with Node
});