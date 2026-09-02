import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [react()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ja"],
    routing: {
      prefixDefaultLocale: false, // Evita que tu idioma principal requiera el prefijo /es/
      redirectToDefaultLocale: true, // Redirige automáticamente al idioma base si es necesario
    },
  },
});
