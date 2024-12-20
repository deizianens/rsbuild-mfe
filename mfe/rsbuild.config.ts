import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const deps = require('./package.json').dependencies;

export default defineConfig({
  server: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    pluginReact(),
    pluginSvgr(),
    pluginModuleFederation({
      name: 'teste',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
  ],
});
