import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
 
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const base = isGitHubPages ? '/your-repo-name/'T.S.A-website'/';
  
  return {
    plugins: [react()],

    base: base,

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion': ['framer-motion']
          }
        }
      }
    },

    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false
        },
      },
    },
  };
});
