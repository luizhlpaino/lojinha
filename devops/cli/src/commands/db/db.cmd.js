const { Command } = require("commander");

const databaseActions = {
    make: require("./make.cmd"),
}

function db(action, options) {
    console.log(`user selected: `, action);
    databaseActions[action]();
}

module.exports = new Command("db")
    .description("Database management.")
    .argument("<action>", "Database action [make]")    
    .action(db);