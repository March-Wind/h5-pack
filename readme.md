1. npm init
2. 安装ts-node
  1. npm i ts-node typescript
  2. npm install -D tslib @types/node
  3. 设置ts-node的tsconfig.json
3. 安装webpack
  1. npm i webpack webpack-cli
4. 安装webpack打包依赖包
  1. 本地服务器：npm i webpack-dev-server && npm i -D @types/webpack-dev-server
  2. webapck config merge: npm i webpack-merge && npm i -D @types/webpack-merge
  3. html模板工具：npm i html-webpack-plugin && npm i -D @types/html-webpack-plugin
  4. 忽略node_modules第三方包打包： npm i webpack-node-externals && npm i -D @types/webpack-node-externals
  5. 包含多个代表一个Source. Source可以要求A提供源代码、大小、源映射和散列：npm i webpack-sources
  6. webpack的文件列表处理：npm i webpack-manifest-plugin && npm i -D @types/webpack-manifest-plugin
  7. 处理css文件优化：npm i mini-css-extract-plugin && npm i -D @types/mini-css-extract-plugin
5. 安装babel编译依赖
  1. 核心代码：npm install babel-loader @babel/core
  2. 处理esnext代码：npm install @babel/preset-env 
  3. 处理ts: npm install @babel/preset-typescript
  4. 处理react: npm i @babel/preset-react
  5. 处理装饰器语法：npm i @babel/plugin-proposal-decorators
  6. 处理class属性类型语法： npm i @babel/plugin-proposal-class-properties
  7. 处理import动态加载语法：npm i @babel/plugin-syntax-dynamic-import
  8. 处理解构语法：npm i @babel/plugin-proposal-object-rest-spread
  9. 处理ployfill按需加载： npm i @babel/plugin-transform-runtime core-js
  10. 多线程处理：npm i thread-loader
6. 安装样式编译依赖
  1. 核心：npm i style-loader css-loader postcss-loader postcss  autoprefixer postcss-flexbugs-fixes  postcss-normalize    postcss-preset-env
      > postcss-loader@4.0.4不内置 postcss
  2. less: npm i less less-loader
  3. scss: npm i sass sass-loader 
  4. 加速处理插件: npm i fast-css-loader fast-sass-loader
   
7. 安装处理图片依赖
  1.  npm i url-loader file-loader