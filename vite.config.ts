import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/codepath-website/',    // ← tell Vite “prepend /codepath-website/ to all URLs”
  base: '/',    // ← tell Vite “prepend /codepath-website/ to all URLs”
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
