const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'post-name': resolve(__dirname, 'post-name/index.html'),
      },
    },
  },
});
