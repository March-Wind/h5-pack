import webpack from 'webpack';
import { resolve } from 'path';
const config = global.project_config
const webacpkConfog: webpack.Configuration = {
  resolve: {
    modules: [resolve(process.cwd(), 'node_modules'), resolve(__dirname, '../../../node_modules')],
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    // symlinks: false
  },
  resolveLoader: {
    modules: [resolve(process.cwd(), 'node_modules'), resolve(__dirname, '../../../node_modules')],
    roots: [resolve(process.cwd(), 'node_modules'), resolve(__dirname, '../../../node_modules')]
  },
  performance: { // 新增性能优化
    maxEntrypointSize: 3072000, // 入口文件大小，推荐244k
  },
  optimization: {
    concatenateModules: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      minSize: 102400, //byte   1KB=1024B=1024byte=8192bit。
      maxSize: 204800, //byte
    },
  },
  module: {
  },
  plugins: [
    new webpack.DefinePlugin(config.DefinePlugin_Variable)
  ]
};

export default webacpkConfog;