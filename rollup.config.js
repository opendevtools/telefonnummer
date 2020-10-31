import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const input = `./compiled/index.js`

const getUMDConfig = ({ env }) => ({
  input,
  output: {
    name: 'telefonnummer',
    format: 'umd',
    sourcemap: true,
    file:
      env === 'production'
        ? './dist/telefonnummer.umd.min.js'
        : './dist/telefonnummer.umd.js',
    exports: 'named',
  },

  plugins: [
    resolve(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
    sourceMaps(),
    env === 'production' && filesize(),
    env === 'production' &&
      uglify({
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
        },
        warnings: true,
        toplevel: false,
      }),
  ],
})

export default [
  getUMDConfig({ env: 'production' }),
  getUMDConfig({ env: 'development' }),
  {
    input,
    external: (id) => !id.startsWith('.') && !id.startsWith('/'),
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), sourceMaps(), filesize()],
  },
]
