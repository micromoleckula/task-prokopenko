import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/open-notify": {
        target: "http://api.open-notify.org",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/open-notify/, ""),
      },
    },
  },
});
