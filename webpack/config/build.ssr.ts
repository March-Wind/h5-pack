import webpack from 'webpack';
import path from 'path';
import { merge, mergeWithRules } from 'webpack-merge';
import webpackBaseConfig from './base/base';
import webpackModuleConfig from './base/module';
import optimizationConfig from './base/optimization'
// import { projectConfig, assetsPublicPath } from '../project.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import nodeExternals from "webpack-node-externals";
// import babelConfig from './base/babel.config';

// https://webpack.docschina.org/plugins/mini-css-extract-plugin/
const config = global.project_config;
const {assetsPublicPath} = config;

const ssrConfig: webpack.Configuration = {
    // entry: {
    //     routes: './src/ssrRoutes.tsx',
    //     store: './src/store/index.ts'
    // },
    entry: config.entry,
    devtool: 'source-map',
    // mode: 'production',
    mode: 'development',
    target: "node",
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), `h5-pack/ssr/${config.name}`),
        libraryTarget: "umd",
        globalObject: "this"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    externals: [nodeExternals()], // 为了不把node_modules目录下的第三方模块打包进输出文件中,因为nodejs默认会去node_modules目录下去寻找和使用第三方模块。
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(js|ts|jsx|tsx)$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader",
    //                 {
    //                     ....
    //                 }
    //             }
    //         },
    //         {
    //             test: /\.(css|less)$/,
    //             exclude: [/\.module\.(css|less)$/],
    //             use: [
    //                 // 'style-loader',
    //                 {
    //                     loader: MiniCssExtractPlugin.loader,
    //                     // options: {
    //                     //     publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
    //                     // },
    //                 },
    //                 {
    //                     loader: 'css-loader',
    //                     options: {
    //                         // url: false
    //                         // name: 'css/[name].[contenthash].css'
    //                         // module: {
    //                         //     exportOnlyLocals: true // 只映射，不打包CSS
    //                         // }
    //                     }
    //                 },
    //                 {
    //                     loader: 'postcss-loader',
    //                     options: {
    //                         postcssOptions: {
    //                             plugins: [
    //                                 require('autoprefixer')
    //                             ]
    //                         }
    //                     }
    //                 },
    //                 {
    //                     loader: 'less-loader'
    //                 },
    //             ]
    //         },
    //     ]
    // },



    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            ignoreOrder: false
        })
    ]
}


let webpackConfig = merge(webpackBaseConfig,webpackModuleConfig, ssrConfig);
// // 合并rules 主要是合并js/jsx、ts/tsx语言的编译
//  webpackConfig = mergeWithRules({
//     module: {
//         rules: {
//             test: "match",
//             use: {
//                 loader: "match",
//                 options: "replace",
//             },
//         },
//     },
// })(ssrConfig, optimizationConfig)
export default webpackConfig;