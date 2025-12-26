import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // Detect deployment platform
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || mode === 'github';
  const isVercel = process.env.VERCEL === '1';
  
  // Set base path
  let base = '/';
  if (isGitHubPages) {
    base = '/T.S.A-website/';
  }
  
  console.log(`🚀 Building for: ${isGitHubPages ? 'GitHub Pages' : isVercel ? 'Vercel' : 'Local'}`);
  console.log(`📍 Base path: ${base}`);
  
  return {
    plugins: [react()],
    
    base: base,
    
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
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
          target: "http://localhost:3001",
          changeOrigin: true,
          secure: false
        },
      },
    },
    
    preview: {
      port: 4173
    }
  };
});
