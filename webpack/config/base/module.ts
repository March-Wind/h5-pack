import webpack from 'webpack';
// import { assetsPublicPath } from '../../project.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import babelConfig from './babel.config';
const postcssNormalize = require('postcss-normalize');
const config = global.project_config;
const {assetsPublicPath} = config;
debugger
const iModule: webpack.Configuration = {
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options:
                    {
                        // cacheDirectory: process.env.NODE_ENV === 'development', // 在dev开发环境开始缓存
                        ...babelConfig
                    }
                }]
            },
            {
                test: /\.(css)$/,
                exclude: [/\.module\.(css)$/],
                use: [
                    (config.style ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
                        },
                    }),
                    {
                        // loader: 'css-loader',
                        loader: 'fast-css-loader',
                        options: {
                            // url: false
                            // name: 'css/[name].[contenthash].css'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    // Adds PostCSS Normalize as the reset css with default options,
                                    // so that it honors browserslist config in package.json
                                    // which in turn let's users customize the target behavior as per their needs.
                                    postcssNormalize(),
                                ]
                            }
                        },
                    }
                ]
            },
            {
                test: /\.module\.(css)$/,
                use: [
                    (config.style ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
                        },
                    }),
                    {
                        // loader: 'css-loader',
                        loader: 'fast-css-loader',
                        options: {
                            modules: true,
                            url: false,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    // Adds PostCSS Normalize as the reset css with default options,
                                    // so that it honors browserslist config in package.json
                                    // which in turn let's users customize the target behavior as per their needs.
                                    postcssNormalize(),
                                ]
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(less)$/,
                exclude: [/\.module\.(less)$/],
                use: [
                    (config.style ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
                        },
                    }),
                    {
                        loader: 'css-loader',
                        options: {
                            // url: false
                            // name: 'css/[name].[contenthash].css'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    // Adds PostCSS Normalize as the reset css with default options,
                                    // so that it honors browserslist config in package.json
                                    // which in turn let's users customize the target behavior as per their needs.
                                    postcssNormalize(),
                                ]
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    },
                ]
            },
            {
                test: /\.module\.(less)$/,
                use: [
                    (config.style ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
                        },
                    }),
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            url: false,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    // Adds PostCSS Normalize as the reset css with default options,
                                    // so that it honors browserslist config in package.json
                                    // which in turn let's users customize the target behavior as per their needs.
                                    postcssNormalize(),
                                ]
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    },
                ]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: [/\.module\.(scss|sass)$/],
                use: [
                    (config.style ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
                        },
                    }),
                    {
                        // loader: 'css-loader',
                        loader: 'fast-css-loader',

                        options: {
                            // url: false
                            // name: 'css/[name].[contenthash].css'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    // Adds PostCSS Normalize as the reset css with default options,
                                    // so that it honors browserslist config in package.json
                                    // which in turn let's users customize the target behavior as per their needs.
                                    postcssNormalize(),
                                ]
                            }
                        }
                    },
                    {
                        // loader: 'sass-loader'
                        loader: 'fast-sass-loader',

                    },
                ]
            },
            {
                test: /\.module\.(scss|sass)$/,
                use: [
                    (config.style ? 'style-loader' :{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: assetsPublicPath.imagesInCSS,// 这个是给css里面的图片等url使用的
                        },
                    }),
                    {
                        // loader: 'css-loader',
                        loader: 'fast-css-loader',

                        options: {
                            modules: true,
                            url: false,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    // Adds PostCSS Normalize as the reset css with default options,
                                    // so that it honors browserslist config in package.json
                                    // which in turn let's users customize the target behavior as per their needs.
                                    postcssNormalize(),
                                ]
                            }
                        }
                    },
                    {
                        // loader: 'sass-loader'
                        loader: 'fast-sass-loader',

                    },
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|webp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name].[ext]',
                            limit: 0,
                            publicPath: assetsPublicPath.imagesInJs,// 给图片增加服务器路径
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|otf|eot|ttf)$/,
                loader: 'url-loader',
                options: {
                    name: 'font/[name].[ext]',
                    publicPath: assetsPublicPath.fontInCSS,// 给字体文件增加服务器路径
                    limit: 0,
                }
            },
        ]
    },
}


export default iModule;