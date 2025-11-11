import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base dinâmica: Netlify usa '/', GitHub Pages usa '/Portifolio/'
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
});

