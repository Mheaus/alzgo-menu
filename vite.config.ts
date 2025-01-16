import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  build: {
    /**
     * This ensures that the output files are builded without the hash.
     */
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.names?.[0]?.endsWith('.svg')) {
            return '[name].[ext]';
          }

          return '[name][extname]';
        },
        manualChunks: undefined,
        compact: true,
      },
    },
  },
  plugins: [react()],
});
