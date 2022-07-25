#!/usr/bin/env node

const { program } = require('commander')

// 模块
const { VueInit } = require('./modules/vue')
const { downloadGit } = require('./modules/download')

// 版本
program.version('1.0.0')

// 交互
program
  .option('--vue2')
  .option('--vue3')

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
            break;
        // TODO可以拓展
        default:
            console.log('输入报错')
            break;
    }
} else {
    console.log('输入错误')
}