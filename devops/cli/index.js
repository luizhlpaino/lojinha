#! /usr/bin/env node
const { program } = require("commander");

const commands = require("./commands");

commands.forEach(command => {
    program
    .command(command.name)    
    .description(command.description)
    .action(command.action);    
});

program.parse();