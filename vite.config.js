const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'motion-design-as-ux': resolve(
          __dirname,
          'motion-design-as-ux/index.html'
        ),
      },
    },
  },
});
