const chalk = require("chalk");

function spawnSyncChildProcess({ command, args, options }) {
    const { spawnSync } = require("node:child_process");
    const child = spawnSync(command, args, options);        
    if(child.error)
        console.log(
            chalk.red.bold(`[error]`, JSON.stringify({
                parameters: {
                    command,
                    args,
                    options                    
                },
                name: child.error.name,
                message: child.error.message
            }))
        );

    if(child.stderr?.length > 0) 
        console.log(chalk.green.bold(`[message]: `, child.stderr.toString().trimEnd()));        
}

module.exports = {
    spawnSyncChildProcess
}