#! /usr/bin/env node
require('module-alias/register');
require("dotenv").config();
const { program } = require("commander");

const commands = require("@commands");

commands.forEach(command => {    
    program.addCommand(command);
});

program.parse();