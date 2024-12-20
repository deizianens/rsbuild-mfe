import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import css from 'rollup-plugin-import-css'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import url from '@rollup/plugin-url'
import staticFiles from 'rollup-plugin-static-files'
import svgr from '@svgr/rollup'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      css(),
      url({
        include: ['**/*.eot', '**/*.ttf', '**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      staticFiles({ include: ['src'] }),
      terser(),
      svgr({ exportType: 'named', jsxRuntime: 'classic' }),
    ],
    external: [/\.css$/],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
