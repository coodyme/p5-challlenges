import { resolve, join } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: join(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rain: resolve(__dirname, 'pages/rain/index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})