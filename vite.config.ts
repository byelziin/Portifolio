import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Necessário para GitHub Pages quando o site está em /<repo-name>/
  base: '/Portifolio/',
  plugins: [react()],
});

