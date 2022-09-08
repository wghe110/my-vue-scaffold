#!/usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk')

// 模块
const { VueInit } = require('./modules/vue')
const { downloadGit } = require('./modules/download')

// 介绍
program
    .name(chalk.yellow('wgh-cli'))
    .description(chalk.dim('个人脚手架，集成了vue2和vue3，后续会添加更多框架...'))

    .argument(`[${chalk.green('vue')}]`, chalk.blue('下载vue脚手架，需要选择vue版本'))
    .argument(`[${chalk.green('vue2')}]`, chalk.blue('下载vue2脚手架'))
    .argument(`[${chalk.green('[vue3]')}]`, chalk.blue('下载vue3脚手架'))
    .argument(`[${chalk.green('[uniapp]')}]`, chalk.blue('下载uniapp脚手架'))

    .version('1.0.5')

const errorTips = () => {
    console.log(chalk.red('输入命令错误'))
    console.log('可以输入以下命令:')
    console.log(`${chalk.green('wgh vue')} ${chalk.blue('下载vue脚手架，需要选择vue版本')}`)
    console.log(`${chalk.green('wgh vue2')} ${chalk.blue('下载vue2脚手架')}`)
    console.log(`${chalk.green('wgh vue3')} ${chalk.blue('下载vue3脚手架')}`)
    console.log(`${chalk.green('wgh uniapp')} ${chalk.blue('下载uniapp脚手架')}`)
}

program.parse();
// console.log('Options: ', program.opts());
// console.log('Remaining arguments: ', program.args);
const opts = program.opts();
const args = program.args;
// 判断入参是否是vue2/vue3/vue
if(args.length && args.length === 1) {
    switch(args[0]){
        case 'vue':
            VueInit();
            break;
        case 'vue2':
            downloadGit('dev_vue2')
            break;
        case 'vue3':
            downloadGit('dev_vue3')
        case 'uniapp':
            downloadGit('dev_uniapp')
            break;
        // TODO可以拓展
        default:
            errorTips()
            break;
    }
} else {
    errorTips()
}

