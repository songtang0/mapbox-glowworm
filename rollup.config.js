import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import obfuscator from 'rollup-plugin-obfuscator';

export default {
  input: './src/index.ts', // 入口文件
  output: [
    // {
    //   format: 'cjs', // 打包为commonjs格式
    //   file: 'dist/mapbox-glowworm.cjs.js', // 打包后的文件路径名称
    //   name: 'glowworm' // 打包后的默认导出文件名称
    // },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/mapbox-glowworm.esm.js',
      name: 'Glowworm'
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/mapbox-glowworm.umd.js',
      name: 'Glowworm',
      minifyInternalExports: false
    }
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }), resolve(),
    babel({ babelHelpers: 'bundled' }),
    // obfuscator(),
    uglify(),
  ]
}
