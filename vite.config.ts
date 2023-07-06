import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/k76a5a404cfe0a',
  plugins: [tsconfigPaths()],
  server: {
    port: 3000,
  },
});
