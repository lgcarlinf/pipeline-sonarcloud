import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        exclude: ['**/node_modules/**', '**/__tests__/**', '**/__mocks__/**'],
        coverage: {
            reporter: ['lcov','text'],
        },
    },
})