const { Command } = require("commander");

function make(tableName) {
    console.log(`creating new table... ${tableName}`);
}

module.exports = new Command("make")
    .description("Creates a new migration file.")
    .argument("<migration_name>", "New migration name.")
    .action(make);