const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const inquirer = require('inquirer')



const downloadGit = (branch="main") => {
    const src = `wghe110/vite-project#${branch}`

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'folder',
                message: '下载文件的目录（默认当前目录）',
            }
        ])
        .then((answers) => {
            const ans = answers['folder']
            downloading(src, ans)
        })
        .catch(error => {
            console.error(error)
        })
}

const downloading = (src, folder='') => {
    const loading = ora('正在下载...').start();
    download(src, folder, function(err) {
        if(err) {
            // 下载错误
            console.log('err', err)
            loading.fail('下载失败');
        } else {
            // 下载成功
            loading.succeed('下载成功');

            console.log(`安装依赖 ${chalk.blue('npm install')}`)
            console.log(`开启本地服务器 ${chalk.blue('npm run serve')}`)
        }
    })
}

module.exports.downloadGit = downloadGit