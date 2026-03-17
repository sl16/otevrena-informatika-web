
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pokud používáte vlastní doménu (otevrenainformatika.cz), base zůstává '/'
  // Pokud byste používali username.github.io/repo/, base by byl '/repo/'
  base: '/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
