import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json';

export default {
    input: 'src/Index.ts',
    output: {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: process.env.NODE_ENV === 'dev' ? true : false,
    },
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        json(),
        typescript({ useTsconfigDeclarationDir: true }),
        terser(),
    ],
};
