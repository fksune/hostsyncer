import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import path from 'path'

export default defineConfig({
  resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '', './src'),
      },
    },
  plugins: [devtools(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
