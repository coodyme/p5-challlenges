import { resolve, join } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: join(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chaos: resolve(__dirname, 'pages/chaos/index.html'),
        coin: resolve(__dirname, 'pages/coin/index.html'),
        countdown: resolve(__dirname, 'pages/countdown/index.html'),
        entanglement: resolve(__dirname, 'pages/entanglement/index.html'),
        exhaustion: resolve(__dirname, 'pages/exhaustion/index.html'),
        falling: resolve(__dirname, 'pages/falling/index.html'),
        fibonnaci: resolve(__dirname, 'pages/fibonnaci/index.html'),
        frogger: resolve(__dirname, 'pages/frogger/index.html'),
        grether: resolve(__dirname, 'pages/grether/index.html'),
        invaders: resolve(__dirname, 'pages/invaders/index.html'),
        rain: resolve(__dirname, 'pages/rain/index.html'),
        rotation: resolve(__dirname, 'pages/rotation/index.html'),
        shmup: resolve(__dirname, 'pages/shmup/index.html'),
        simon: resolve(__dirname, 'pages/simon/index.html'),
        snake: resolve(__dirname, 'pages/snake/index.html'),
        spiral: resolve(__dirname, 'pages/spiral/index.html')
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