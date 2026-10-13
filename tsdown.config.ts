import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  format: ['esm', 'cjs'],
  // keep the output syntax conservative so older runtimes/bundlers still work
  target: 'es2017',
  platform: 'neutral',
  dts: true,
})
