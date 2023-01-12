const fs = require('fs');
import { LojinhaRoute } from "../models/LojinhaRoute.model";

const routes: LojinhaRoute[] = [];

async function getRoutesByFolders() {
    const routesFolders: string[] = fs.readdirSync(__dirname)
    .filter((itemName: string) => !itemName.endsWith(".js"));

    for(const folderName of routesFolders) {
        const routesFilenames: string[] = fs.readdirSync(`${__dirname}\\${folderName}`);
        for(const fileName of routesFilenames) {            
            const importedRoutes: LojinhaRoute[] = await import(`./${folderName}/${fileName}`);
            routes.push(...importedRoutes);
        }
    }
}

(async () => {
    await getRoutesByFolders();
});

export default routes;