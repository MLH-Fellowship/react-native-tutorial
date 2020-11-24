const chalk = require('chalk')
const { Command } = require('commander')
const inquirer = require('inquirer')
const git = require('simple-git')()

const program = new Command()

const pkgJson = require('./package.json')

/**
 * Returns a list of remote branches
 * @returns {string[]}
 */
async function getRemoteBranches() {
    return (await git.branch({'--r': null})).all
}

/**
 * Returns the current branch
 * @returns {string}
 */
async function getCurrentBranch() {
    return (await git.raw(['rev-parse', '--abbrev-ref', 'HEAD'])).trim()
}

/**
 * Switches to a specified branch
 * 
 * @param  {string} branch - target branch
 */
async function checkoutBranch(branch) {
    await git.checkout(branch)
}

/*
  Prompts user to select a branch and then proceeds to check out that branch
*/
program
  .command('start')
  .description('Switch between various tutorial steps')
  .action(async (source, destination) => {
    const branches = await getRemoteBranches()

    const answer = await inquirer.prompt([{
        type: 'rawlist',
        message: 'select branch',
        name: 'branch',
        choices: branches.map((branch) => {
            return {
                name: branch.replace('origin/', ''),
                value: branch
            }
        })
    }])

    const targetBranch = answer.branch

    await checkoutBranch(targetBranch)

    console.log(chalk.cyan(`Successfully switched to ${await getCurrentBranch()}`))
  })

/*
  Lists out all remote branches
*/
program
  .command('list')
  .description('List out tutorial steps')
  .action(async (source, destination) => {
    console.log(await getRemoteBranches())
  })

/*
  Lists out current branch
*/
program
  .command('branch')
  .description('List out current branch')
  .action(async (source, destination) => {
    console.log(chalk.cyan(`Current branch: ${await getCurrentBranch()}`))
  })
  
program.parse(process.argv)
