import webpack from 'webpack';
import path from 'path';
import { merge, mergeWithRules, customizeArray } from 'webpack-merge';
import webpackBaseConfig from './base/base';
import webpackModuleConfig from './base/module';
import optimizationConfig from './base/optimization'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import setRemScript from '../plugin/setRemCode';
// import { projectConfig, assetsPublicPath } from '../project.config';
import Manifest from '../plugin/webpack-manifest-plugin'
// import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import debugConfog from './base/debug';

// const smp = new SpeedMeasurePlugin();
// import { resolve } from 'path/posix';
// console.log(JSON.stringify(assetsPublicPath));
debugger
const config = global.project_config;
const {assetsPublicPath} = config;
const spaConfig: webpack.Configuration = {

    entry: config.entry,
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(process.cwd(), `h5-pack/spa/${config.name}`),
        chunkFilename: '[name].[contenthash].js',
        // importFunctionName: '__import__',
        clean: true,
        publicPath: assetsPublicPath.js || '',
    },
    optimization: {
        // chunkIds: "named", // 按照路经命名，用于调试模式
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        runtimeChunk: "single", // 运行时需要的代码单独抽离到一个文件

        splitChunks: {
            // chunks: 'all',
            minSize: 0,
            chunks: (chunk) => {
                console.log(chunk.name);
                return true
            },
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|redux|react-redux|\@reduxjs\/toolkit|react-router|react-router-dom)[\\/]/,
                    name: 'react-vender',
                    priority: 10, //檔案的優先順序，數字越大表示優先級越高
                    maxSize: Infinity
                },
                otherVendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'other-vender',
                    priority: 9, //檔案的優先順序，數字越大表示優先級越高
                    maxSize: Infinity
                },
                commons: {
                    test: /src\/common\//,
                    name: 'commons', //分割出來的檔案命名
                    // minChunks: 2, //被引入2次以上的code就會被提取出來
                    priority: 20, //檔案的優先順序，數字越大表示優先級越高
                    // minChunks: 2,
                    // minSize: 0,
                    // minChunks: 0,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            title: 'template',
            filename: 'index.html',
            template: path.resolve(__dirname, `../../index.html`),
            // minify: true,
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                'theme-color': '#4285f4'
                // Will generate: <meta name="theme-color" content="#4285f4">
            },
            setRemScript
        }),
        // new Manifest({
        //     generate: (seed, files, entries) => {
        //         return entries['main']
        //     }
        // })
    ]
}
// );


let webpackConfig = merge(webpackBaseConfig, webpackModuleConfig, spaConfig, debugConfog);
// 合并rules 主要是合并js/jsx、ts/tsx语言的编译
webpackConfig = mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: {
                loader: "match",
                options: "replace",
            },
        },
    },
})(webpackConfig, optimizationConfig)

// export default smp.wrap(webpackConfig);
export default webpackConfig;
