import { resolve as _resolve } from 'path';
import { DefinePlugin, ContextReplacementPlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export const entry = {
  app: './src/index.tsx',
};
export const output = {
  publicPath: '/',
  path: _resolve(__dirname, '../dist'),
  filename: '[name].[fullhash].js',
};
export const resolve = {
  alias: {
    "@": _resolve('src')
  },
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
};
export const plugins = [
  new CleanWebpackPlugin(),
  new ProgressBarWebpackPlugin(),
  new DefinePlugin({
    "process.env.PROJECT_ENV": JSON.stringify(process.env.PROJECT_ENV),
    "process.env.modules": JSON.stringify(process.env.npm_config_modules),
  }),
  new HtmlWebpackPlugin({
    template: _resolve(__dirname, '../public/index.html'),
    filename: 'index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[fullhash].css',
  }),
  new ESLintPlugin({
    context: _resolve(__dirname, '../src'),
    files: ['**/*.ts', '**/*.js', '**/*.tsx'],
  }),
  new ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/),
];
export const module = {
  rules: [
    { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/ },
    {
      test: /\.less$/,
      exclude: /\.module.less/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader', // translates CSS into CommonJS
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
    //设置模块化样式，添加hash命名，antd的样式修改只能引入.less文件覆盖
    {
      test: /\.module.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '_[local]_[hash:base64:6]',
            },
            importLoaders: 2,
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              importLoaders: 2,
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
    {
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [_loader, 'style-loader', 'css-loader'],
    },
    {
      test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
      type: "asset/resource",
      exclude: /node_modules/
    },
  ],
};
export const cache = {
  type: 'filesystem',
  // 可选配置
  buildDependencies: {
    config: [__filename],
  },
  name: 'development-cache',
};

