import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default mergeConfig(
  defineConfig({
    plugins: [react()]
  }),
  defineVitestConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './src/test/setup.ts',
      css: true,
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
      },
    }
  })
)