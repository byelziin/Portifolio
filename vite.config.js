var _a;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    // Base dinâmica: Netlify usa '/', GitHub Pages usa '/Portifolio/'
    base: (_a = process.env.VITE_BASE) !== null && _a !== void 0 ? _a : '/',
    plugins: [react()],
});
