// jest.config.ts
import type { Config } from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
      './node_modules',
      './coverage',
      './dist',
      './lib',
      './docs',
    ],
    verbose: true,
  };
};
