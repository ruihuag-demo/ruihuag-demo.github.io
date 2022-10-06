import webpackMerge from 'webpack-merge'
import baseConfig from './webpack.config.base'
import proxyConfig from './proxy.config'
import path from 'path'

const devServer = {
  port: 3457,
  host: 'localhost',
  watchContentBase: true,
  // publicPath: '/',
  inline: true,
  stats: 'errors-only',
  historyApiFallback: true,
  hot: true,
  contentBase: path.join(__dirname, '../public'),
  compress: true,
  clientLogLevel: 'warning',
  headers: { 'Access-Control-Allow-Origin': '*' },
  // open: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  proxy: proxyConfig
}

const devConfig = {
  mode: 'development',
  devServer: devServer,
  devtool: 'source-map'
}

export default webpackMerge.merge(baseConfig, devConfig)


