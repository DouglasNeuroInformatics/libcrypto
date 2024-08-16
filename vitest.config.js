import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/index.ts'],
      include: ['src/**/*'],
      provider: 'v8',
      thresholds: {
        branches: 80,
        functions: 70,
        lines: 85,
        statements: 85
      }
    },
    watch: false
  }
});
