const chalk = require('chalk')
const { Command } = require('commander')
const inquirer = require('inquirer')
const git = require('simple-git')()

const program = new Command()

const pkgJson = require('./package.json')

/**
 * @type {string[]} - list of commit hashes in order
 *                    each commit should test the required solution for that tutorial step.
 */
const steps = [
  'hash1',
  'hash2'
]

/**
 * Returns the next step's commit hash
 * 
 * @returns {string}
 */
async function getNextStepsCommitHash() {
  let commits = await getCommitHistory()

  // loop through each commit starting at the latest one and match that
  // to the commits in the steps array to see what step we are in
  for(let commit of commits) {
    let index = steps.indexOf(commit)

    if(index >= 0) {
      return steps[index + 1];
    }
  }

  return null
}

/**
 * Returns a list of remote branches
 * 
 * @returns {string[]}
 */
async function getRemoteBranches() {
    return (await git.branch({'--r': null})).all
}

/**
 * Returns the current branch
 * 
 * @returns {string}
 */
async function getCurrentBranch() {
    return (await git.raw(['rev-parse', '--abbrev-ref', 'HEAD'])).trim()
}

/**
 * Returns list of recent commit hashes
 * 
 * @returns {string[]}
 */
async function getCommitHistory() {
  return (await git.raw(['rev-list', 'HEAD'])).trim().split('\n')
}

/**
 * Cherry picks the specified commit hash onto current branch
 * 
 * @param  {string} hash
 */
async function cherryPick(hash) {
  return (await git.raw(['cherry-pick', hash])).trim()
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

/*
  Adds the next step's commit to the current branch
*/
program
  .command('next')
  .description('Adds next step to the current branch')
  .action(async (source, destination) => {
    let hash = await getNextStepsCommitHash()
    await cherryPick(hash)
    console.log(chalk.cyan(`Successfully moved on to the next step!`))
  })

/*
  test
*/
program
  .command('test')
  .description('test')
  .action(async (source, destination) => {
    let hash = await getNextStepsCommitHash()
    await cherryPick(hash)
  })
  
program.parse(process.argv)
