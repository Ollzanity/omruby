// build script
const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

esbuild.build({
  entryPoints: ['./app/javascript/application.js'], // Adjust path if necessary
  bundle: true,
  sourcemap: true,
  outdir: './app/assets/builds',
  plugins: [sassPlugin()],
  loader: {
    '.sass': 'css',
    // Add other loaders as needed
  },
}).catch(() => process.exit(1));
