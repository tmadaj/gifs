import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dotenv from 'dotenv';
import serve from 'rollup-plugin-serve';

import packageJson from './package.json' assert { type: 'json' };

const configDev = process.argv.includes('--configDev');
const configProd = process.argv.includes('--configProd');
const configServe = process.argv.includes('--configServe');

dotenv.config();

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
      replace({
        preventAssignment: true,
        'process.env.GIPHY_API_KEY': JSON.stringify(process.env.GIPHY_API_KEY),
        'process.env.NODE_ENV': JSON.stringify(configProd ? 'production' : 'development'),
      }),
      resolve({ browser: true }),
      typescript(),
      commonjs({
        include: ['node_modules/**'],
      }),
      configProd && terser(),
      configServe && serve(),
    ],
  },
];
