#!/usr/bin/env node

const chalk = require('chalk')
const { Command } = require('commander')
const fs = require('fs');
const inquirer = require('inquirer')
const git = require('simple-git')()

const program = new Command()

/**
 * gets the config from tutorial.json
 * 
 */
function getConfig() {
  try {
    return JSON.parse(fs.readFileSync('./tutorial.json'));
  } catch (err) {
    console.log(err)
    console.log(chalk.cyan("err: unable to read config file tutorial.json"))
    process.exit(1)
  }
}

/**
 * updates the config in tutorial.json
 * 
 */
function updateConfig(config) {
  try {
    fs.writeFileSync('./tutorial.json', JSON.stringify(config, null, 4));
  } catch (err) {
    console.log(err)
    console.log(chalk.cyan("err: unable to write config file tutorial.json"))
    process.exit(1)
  }
}

/**
 * Returns the next step's commit hash
 * 
 * @returns {string}
 */
async function getNextStepsCommitHash() {
  let config = getConfig();

  return config.steps[config.currentStep]
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
 * Prompts user to select a branch and then proceeds to check out that branch
 * $ rn-tutorial-cli start
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
 * Lists out all remote branches
 * $ rn-tutorial-cli list
 */
program
  .command('list')
  .description('List out tutorial steps')
  .action(async (source, destination) => {
    console.log(chalk.cyan(await getRemoteBranches()))
  })

/*
 * Lists out current branch
 * $ rn-tutorial-cli branch
 */
program
  .command('branch')
  .description('List out current branch')
  .action(async (source, destination) => {
    console.log(chalk.cyan(`Current branch: ${await getCurrentBranch()}`))
  })

/*
 * Adds the next step's commit to the current branch
 * $ rn-tutorial-cli next
 */
program
  .command('next')
  .description('Adds next step to the current branch')
  .action(async (source, destination) => {
    let hash = await getNextStepsCommitHash()

    if(!hash) return // if empty, don't cherrypick

    await cherryPick(hash)

    // increment currentStep in the config
    let config = getConfig()
    config.currentStep++;
    updateConfig(config)
    
    console.log(chalk.cyan(`Successfully moved on to the next step!`))
  })

program.parse(process.argv)
