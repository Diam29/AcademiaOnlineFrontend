import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react-swc'
// import ViteSSR from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(),],
  // esbuild: {
  //   jsxFactory: 'React.createElement',
  //   jsxFragment: 'React.Fragment',
  // },
})


