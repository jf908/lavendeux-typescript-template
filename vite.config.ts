import { defineConfig } from 'vite';
import { resolve } from 'path';
import { name, version, author } from './package.json';

export default defineConfig({
  define: {
    __VERSION__: `"${version}"`,
    __AUTHOR__: `"${author}"`,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name,
      fileName() {
        return name + '.js';
      },
    },
  },
});
