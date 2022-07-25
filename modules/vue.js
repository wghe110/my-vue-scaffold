const inquirer = require('inquirer')
const { downloadGit } = require('./download')

const VueInit = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'version',
                message: '请选择vue版本',
                default: 'vue2',
                choices: [
                    'vue2',
                    'vue3'
                ]
            }
        ])
        .then((answers) => {
            // console.log('answers', answers)
            const ans = answers['version']
            if(ans === 'vue2') {
                downloadGit('dev_vue2');
            } else {
                downloadGit('dev_vue3');
            }
        })
        .catch(error => {
            console.error(error)
        })
}

module.exports.VueInit = VueInit;