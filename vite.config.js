import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/api': {
          target: 'http://employee-api-svc:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
    }
  }
})
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd());

//   const API_URL = `${env.VITE_APIURL ?? 'http://localhost:8080'}`;
//   const PORT = `${env.VITE_PORT ?? '3000'}`;

//   return {
//     server: {
//       proxy: {
//         '/api': API_URL,
//       },
//       port: PORT,
//     },
//     build: {
//       outDir: 'public',
//     },
//     plugins: [react()],
//   };
// });
