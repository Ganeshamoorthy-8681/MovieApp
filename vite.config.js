/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@cs": path.resolve(__dirname, './src'),
    }
  },
  base: "/",
  server: {
    historyApiFallback: true, // Prevents refresh errors
  },
})
