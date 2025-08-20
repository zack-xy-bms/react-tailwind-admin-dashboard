import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@types': path.resolve(__dirname, './src/types/index.d.ts'),
      '@schemas': path.resolve(__dirname, './src/schemas/index.ts'),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: 'named',
        namedExport: 'ReactComponent',
      },
    }),
  ],
})
