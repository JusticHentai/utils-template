import swc from '@swc/core'
import fs from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: false,
  clean: true,
  dts: true,
  external: ['@swc/helpers'],
  esbuildPlugins: [
    {
      name: 'swc-loader',
      setup: (build) =>
        build.onLoad({ filter: /\.(ts)/ }, (args) => {
          const content = fs.readFileSync(args.path, 'utf-8')
          const { code } = swc.transformSync(content, {
            filename: args.path,
          })

          return {
            contents: code,
          }
        }),
    },
  ],
})
