import path from 'path'
import webpackMerge from 'webpack-merge'
import baseConfig from './webpack.config.base'

const publicPath = '/ServiceStatus/';

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: '[name].[fullhash].js',
    assetModuleFilename: 'asset/[name].[contenthash:8].[ext]',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  }

}

export default webpackMerge.merge(baseConfig, prodConfig)