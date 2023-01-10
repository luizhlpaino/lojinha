const fs = require('fs');
const path = require('path');
const chalk = require("chalk");
const { spawnSyncChildProcess } = require("../utils");

function setupDatabaseContainers() {
    const commandFilePath = path.resolve(__dirname);
    const dbComposeFoldersPath = `${commandFilePath.replace("\\cli\\commands", "")}\\docker\\db`;
    const dbComposeFolders = fs.readdirSync(dbComposeFoldersPath);

    console.log(chalk.blueBright.bold(`Setting up databases containers...`));
    dbComposeFolders.forEach(composeFolder => {                
        console.log(chalk.blue.bold(`Running ${chalk.redBright.bold(composeFolder)} docker-compose...`));
        spawnSyncChildProcess({
            command: "docker-compose",
            args: ["up", "-d"],
            options: {
                cwd: `${dbComposeFoldersPath}\\${composeFolder}`
            }
        });
        console.log(chalk.blue.bold(`Finished... \n`));
    });    
}

function setup() {
    setupDatabaseContainers();
}

module.exports = {
    name: "setup",
    description: "Setup the local development environment.",
    action: setup
}