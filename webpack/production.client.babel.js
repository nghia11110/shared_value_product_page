import webpack from 'webpack';
import baseConfig from './base';
import CompressionPlugin from 'compression-webpack-plugin';
//import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';
import config from '../config';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(baseConfig, {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: config.enableDynamicImports ? '[name].[hash].js' : undefined
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true
    }
  },
  plugins: [
    new webpack.BannerPlugin({
      banner:
        'hash:[hash], chunkhash:[chunkhash], name:[name], ' +
        'filebase:[filebase], query:[query], file:[file]'
    }),
    /*new UglifyJSPlugin({
      uglifyOptions: {
        parallel: 4,
        compress: {
          warnings: false
        },
        mangle: true,
        output: {
          comments: false
        }
      }
    }),*/
    new TerserPlugin({
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {},
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: false,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      },
    }),
    new CompressionPlugin({
      asset: '[file].gz',
      algorithm: 'gzip',
      test: /\.css$|\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});
