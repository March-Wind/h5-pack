import path from 'path'
process.env.NODE_ENV = 'production';
const project_spa_config = require(path.resolve(process.cwd(),'h5-pack.spa.js')).default
global.project_config = project_spa_config;
import webpack from 'webpack';
import config from '../webpack/config/build.spa';
const chalk = require('chalk');

process.env.NODE_ENV = 'production';
import fs from 'fs';
// process.env.AUTOPREFIXER = 'production';

webpack(config, (err, stats) => {
    debugger
    if (err) {
        console.error(JSON.stringify(err.stack) || JSON.stringify(err));
        return;
    }
    if (stats) {
        const info = stats.toJson();
        fs.writeFileSync('./stats.json', JSON.stringify(info)) //分析网站：http://webpack.github.io/analyse/
        if (stats.hasErrors()) {
            info.errors?.forEach((error) => {
                console.log(chalk.red(error.message));
            })
        }
    }
});