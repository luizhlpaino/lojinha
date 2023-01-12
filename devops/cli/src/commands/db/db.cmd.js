const { Command } = require("commander");

const databaseActions = {
    make: require("./sub/make.cmd"),
}

module.exports = new Command("db")
    .description("Database management.")
    .usage("<action> [make]")
    .addCommand(databaseActions.make);