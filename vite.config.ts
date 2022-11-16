import { readFileSync } from 'fs'
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'

const pkgJSON = JSON.parse(readFileSync('package.json', 'utf-8'))

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'es2020',
  },
})
