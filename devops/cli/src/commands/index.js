const fs = require('fs');

const commands = [];

const folderNames = fs.readdirSync(__dirname)
    .filter(fileName => !fileName.includes("index"));

folderNames.forEach(folderName => {
    const command = require(`./${folderName}/${folderName}.cmd.js`);
    commands.push(command);
});

module.exports = commands;