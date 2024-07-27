import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/User-Table-infotecs/',
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
})
