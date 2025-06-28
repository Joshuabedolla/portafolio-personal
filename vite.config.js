import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://github.com/Joshuabedolla/portafolio-personal.git
export default defineConfig({
  plugins: [react()],
})
