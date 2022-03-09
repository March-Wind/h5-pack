/**
 * 项目部署方式
 * onServer：整个项目一起放进服务器某个目录
 * onServer_AssetSplit：资产拆分放在服务器上；
 * offline：离线包，file协议开头的
 */
 import path from 'path'
 type DeployType = 'onServer' | 'offline';
 interface baseConfig {
     name: string; // 项目名,也决定打包路经
     deployType: DeployType; // 项目部署方式
 }
 
 /**
  * 打包的目录结构
  */
 interface OnServer extends baseConfig { // 一般是整个项目都放在CDN上，然后通过nginx在项目根目录找不到资源，就重定向到index.html文件上。
     deployType: 'onServer';
     publicPath?: { // 四种资产的路经都一样，也可以用output.publicPath来设置，资源是分别放在不同的域名下的，这样可以突破tcp的6个连接并行的限制，实际上这个部分还有带宽的影响，提升速度没想象中那么快，尤其是在慢网。
         js: string,
         css: string,
         imagesInJs: string,
         imagesInCSS: string,
         fontInCSS: string,
     }
 }
 interface Offline extends baseConfig {// 这种是离线包
     deployType: 'offline';
     publicPath?: {
         js: string,
         css: string,
         img: string,
         font: string,
     }
 }
 interface AssetsPublicPath {
     js?: string,
     css?: string,
     imagesInJs: string;
     imagesInCSS: string;
     fontInCSS: string;
 }
 type ProjectConfig = OnServer | Offline;
 
 
 const createWebpackConfig = () => {
     const projectConfigPath = path.resolve(process.cwd(), 'h5-pack.js');
     const projectConfig = require(projectConfigPath).default as ProjectConfig;
     const isDev = process.env.NODE_ENV === 'development';
     let assetsPublicPath: AssetsPublicPath
     // 带入一些默认的选项
     if (isDev) {
         assetsPublicPath = {
             js: '',
             css: '',
             imagesInJs: '',
             imagesInCSS: '',
             fontInCSS: ''
         }
     } else if (projectConfig.deployType === 'onServer') {
         assetsPublicPath = {
             js: '',
             css: '',
             imagesInJs: '',
             imagesInCSS: '../',
             fontInCSS: '',
             ...projectConfig.publicPath
         }
     } else if (projectConfig.deployType === 'offline') {
         assetsPublicPath = {
             js: '',
             css: '',
             imagesInJs: '../',
             imagesInCSS: '../',
             fontInCSS: '../'
         }
     }
     return {
         projectConfig,
         assetsPublicPath
     }
 }
 
 const { projectConfig,
     assetsPublicPath } = createWebpackConfig();
 
 export {
     projectConfig,
     assetsPublicPath
 }