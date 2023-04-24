import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json' assert { type: 'json' };

const configDev = process.argv.includes('--configDev');
const configProd = process.argv.includes('--configProd');
const configServe = process.argv.includes('--configServe');

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'es',
        sourcemap: configDev,
      },
    ],
    plugins: [
      commonjs({
        include: ['node_modules/**'],
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
      resolve({ browser: true }),
      configServe && serve(),
      configProd && terser(),
      typescript(),
    ],
    watch: {
      include: ['src/**'],
    },
  },
];
