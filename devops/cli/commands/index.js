const fs = require('fs');

const commands = [];
const fileNames = fs.readdirSync(__dirname).filter(fileName => !fileName.includes("index"));

fileNames.forEach(fileName => {
    const command = require(`./${fileName}`);
    commands.push(command);
});

module.exports = commands;