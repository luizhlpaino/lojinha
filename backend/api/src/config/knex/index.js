const knexClients = [];

function createKnexClients() {
    const fs = require('fs');
    const clientFolders = fs.readdirSync(__dirname)
        .filter(fileName => !fileName.endsWith('.js'));
    clientFolders.forEach(clientFolder => {
        const client = require(`./${clientFolder}/${clientFolder}.knex.js`);
        knexClients.push(client);
    })
}

createKnexClients();

module.exports = knexClients;