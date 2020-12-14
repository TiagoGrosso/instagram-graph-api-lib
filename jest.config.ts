// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    collectCoverageFrom: ['**/src/main/**/*.ts', '!src/Main.ts'],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
};
export default config;
