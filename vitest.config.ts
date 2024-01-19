import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        exclude: ['**/node_modules/**', '**/__mocks__/**','**/coverage/**','pnpm-lock.yaml', 'package.json'],
        coverage: {
            reporter:['lcov', 'text']
        },
    },
})