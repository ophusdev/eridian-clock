/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/eridian-clock/',
    plugins: [react()],
    build: {
        outDir: 'build',
    },
    test: {
        globals: true,
    },
})
