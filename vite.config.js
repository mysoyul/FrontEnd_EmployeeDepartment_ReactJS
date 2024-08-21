import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: './',
//   plugins: [react()],

//   server: {
//     port: 3000,
//     proxy: {
//       "/api": "http://employee-api-svc:8080",
//     } 
//   }
// })
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  // const API_URL = `${env.VITE_APIURL ?? 'http://localhost:8080'}`;
  const PORT = `${env.VITE_PORT ?? '3000'}`;

  return {
    server: {
      proxy: {
        '/api': {
          target: `http://localhost:8080`, // 환경 변수 값 사용
          rewrite: (path) => path.replace(/^\/api/, ''),
          // changeOrigin: true,
          // secure: false,
        },
      },
      port: PORT,
    },
    plugins: [react()],
  };
});
