const fs = require('fs');

export async function importDefaultModulesByFolder(modulesFoldersPath): Promise<any[]> {            
    const modules: any[] = [];
    const moduleFolderNames: string[] = fs.readdirSync(modulesFoldersPath)
        .filter((itemName: string) => !itemName.endsWith(".ts"));

    for(const folderName of moduleFolderNames) {        
        const moduleFileNames: string[] = fs.readdirSync(`${modulesFoldersPath}\\${folderName}`);
        for(const fileName of moduleFileNames) {                                  
            await import(`${modulesFoldersPath}/${folderName}/${fileName}`).then((importedModules: any[]) => {                
                modules.push(...importedModules["default"]);
            });
        }
    }    

    return modules;
}