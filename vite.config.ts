import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'

export default defineConfig({
  base: './',
  plugins: [
    unocss({
      presets: [
        presetWind(),
      ],
    }),
  ],
})