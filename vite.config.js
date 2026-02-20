import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    // Prevent duplicate React instances (fixes "Invalid hook call" / useContext null)
    dedupe: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 5173
    },
    watch: {
      usePolling: true
    }
  },
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              fontawesome: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons'],
              utils: ['@emailjs/browser', 'react-helmet-async']
            }
      }
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    chunkSizeWarningLimit: 1000
  }
})
