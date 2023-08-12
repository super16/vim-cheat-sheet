import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  base: '/vim-cheat-sheet',
  plugins: [
    preact(),
    mdx(),
  ],
})
