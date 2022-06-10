import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import ts from 'typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const plugins = [
  peerDepsExternal(),
  resolve({
    customResolveOptions: { moduleDirectory: 'src' },
  }),
  commonjs(),
  postcss(),
  svgr(),
  typescript({
    typescript: ts,
    tsconfig: 'tsconfig.json',
    tsconfigDefaults: {
      exclude: [
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.stories.ts',
        '**/*.spec.tsx',
        '**/*.test.tsx',
        '**/*.stories.tsx',
        'node_modules',
        'bower_components',
        'jspm_packages',
        'dist',
      ],
      compilerOptions: {
        sourceMap: true,
        declaration: true,
      },
    },
  }),
  terser({
    output: {
      comments: false,
    },
  }),
  copy({
    targets: [
      { src: 'LICENSE', dest: 'dist' },
      { src: 'README.md', dest: 'dist' },
      {
        src: 'package.json',
        dest: 'dist',
        transform: (content) => {
          const { scripts, devDependencies, husky, release, engines, ...keep } = JSON.parse(
            content.toString()
          );
          return JSON.stringify(keep, null, 2);
        },
      },
    ],
  }),
];

export default [
  {
    // UMD
    input: './src/index.ts',
    plugins: [
      babel({
        babelHelpers: 'bundled',
      }),
      ...plugins,
    ],
    output: {
      file: `./dist/design-system.min.js`,
      format: 'umd',
      name: 'designSystem', // this is the name of the global object
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  },
  // ESM and CJS
  {
    input: './src/index.ts',
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    output: [
      {
        file: `./dist/${pkg.module}`,
        format: 'es',
        sourcemap: true,
      },
      {
        file: `./dist/${pkg.main}`,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins,
  },
];
