import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@'를 'src' 폴더로 매핑
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@image': path.resolve(__dirname, 'src/assets/images'),
      '@scss': path.resolve(__dirname, 'src/assets/scss'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        
      },
    },
  },
})
