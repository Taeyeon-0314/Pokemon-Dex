import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pokemon-Dex/', // 여기에는 GitHub Pages에서 사용되는 저장소 이름을 넣어줘

})
