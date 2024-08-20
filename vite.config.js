import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/api': {
          target: import.meta.env.VITE_APIURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
    }
  }
})
