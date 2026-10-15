import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig(({ mode }) => {
  const projectRoot = fileURLToPath(new URL(".", import.meta.url));
  const { VITE_SITE_URL = "" } = loadEnv(mode, projectRoot, "VITE_");
  const siteUrl = VITE_SITE_URL.trim().replace(/\/+$/, "");

  return {
    plugins: [
      react(),
      {
        name: "portfolio-social-meta",
        transformIndexHtml(html) {
          const tags = siteUrl ? `
    <link rel="canonical" href="${siteUrl}/" />
    <meta property="og:url" content="${siteUrl}/" />
    <meta property="og:image" content="${siteUrl}/nishant_mulane.png" />
    <meta property="og:image:alt" content="Nishant Mulane, frontend developer" />
    <meta name="twitter:image" content="${siteUrl}/nishant_mulane.png" />
    <meta name="twitter:image:alt" content="Nishant Mulane, frontend developer" />` : "";
          return html.replace("<!--portfolio-site-meta-->", tags);
        },
      },
    ],
  };
});
