// External modules
let mix = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

mix.setPublicPath('static/assets/js')
// NOTE Init script
.ts('resources/ts/init.ts', 'static/assets/js')
.webpackConfig({
  plugins : [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns : [
        path.join(__dirname, 'static/assets/js/*')
      ],
      protectWebpackAssets : false
    })
  ]
});