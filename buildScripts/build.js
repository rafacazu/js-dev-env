/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production'))

webpack(webpackConfig).run((err,stats)=>{
    if(err){ //is has fatal error stop here 
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();

    if(jsonStats.hasError){
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if(jsonStats.haWarnings){
        console.log(chalk.yellow('webpack generated the following warnings'))
        return jsonStats.warnings.map(warnings => console.log(chalk.yellow(warnings)));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log(chalk.green('your app has been built for production and written to /dist'));
    return  0;
})

