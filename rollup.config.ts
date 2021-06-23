import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
    input: 'src/Index.ts',
    output: {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        json(),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
};
