import path from 'path';
process.env.NODE_ENV = 'production';
const project_ssr_config = require(path.resolve(process.cwd(),'h5-pack.ssr.js')).default
global.project_config = project_ssr_config;
import webpack from 'webpack';
import config from '../webpack/config/build.ssr';
const chalk = require('chalk');
// process.env.AUTOPREFIXER = 'production';

webpack(config, (err, stats) => {
    if (err) {
        console.error(JSON.stringify(err.stack) || JSON.stringify(err));
        return;
    }
    if (stats) {
        const info = stats.toJson();
        if (stats.hasErrors()) {
            info.errors?.forEach((error) => {
                console.log(chalk.red(error.message));
            })

        }
    }
});