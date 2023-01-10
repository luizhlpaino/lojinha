const fs = require('fs');

const routes = [];

function getRoutesByFolders() {
    const routesFolders = fs.readdirSync(__dirname)
    .filter((itemName) => !itemName.endsWith(".js"));

    routesFolders.forEach((folderName) => {
        const routesFilenames = fs.readdirSync(`${__dirname}\\${folderName}`);
        routesFilenames.forEach((fileName) => {
            const route = require(`./${folderName}/${fileName}`);
            routes.push(...route);
        })                ;
    })
}

getRoutesByFolders();

module.exports = routes;