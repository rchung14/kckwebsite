import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:10000',
    },
  },
  build: isSsrBuild
    ? {}
    : {
        // manifest lets the prerender step resolve the hashed filename of the
        // fonts-entry CSS chunk to build the async <link rel="preload"> tag.
        manifest: true,
        rollupOptions: {
          input: {
            main: fileURLToPath(new URL('./index.html', import.meta.url)),
            // CSS-only entry (see src/fonts-entry.js) so the webfont
            // @font-face bulk is emitted as its own asset instead of being
            // merged into the main render-blocking stylesheet.
            'fonts-entry': fileURLToPath(new URL('./src/fonts-entry.js', import.meta.url)),
          },
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router'],
            },
          },
        },
      },
}));
