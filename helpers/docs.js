const packageName = process.env.LERNA_PACKAGE_NAME;
const newReadmeFileName = packageName.startsWith('@rooks') ? packageName.split('@rooks/')[1] : packageName;

const writeFileSync = require('fs').writeFileSync;
const readFileSync = require('fs').readFileSync;

function ls() {
    const readmeFileContent = readFileSync(`./README.md`, 'utf8');
    let examplesFileContent = null;
    try{
        examplesFileContent = readFileSync(`./Examples.md`, 'utf8')
    }catch(err){
        console.log("Error reading examples " + newReadmeFileName);
    }
    const fileBody = examplesFileContent ? `
${readmeFileContent}
    
---

${examplesFileContent}



    ` : readmeFileContent;

    const updatedFileContent = `---
id: ${newReadmeFileName}
title: ${newReadmeFileName}
sidebar_label: ${newReadmeFileName}
---

${fileBody}
    `;
    writeFileSync(`../docusaurus/docs/${newReadmeFileName}.md`, updatedFileContent, 'utf8');
}




function addToSidebarJson() {
    if (newReadmeFileName === 'rooks') {
        return;
    }
    let currentSidebarJson
    let fileContent
    try {
        fileContent = readFileSync(`../docusaurus/sidebars.json`, 'utf8');
        if (!fileContent || fileContent === '') {
            console.log({ newReadmeFileName })
        }
        currentSidebarJson = JSON.parse(fileContent);
        console.log(currentSidebarJson)
        if (Object.keys(currentSidebarJson.docs['Independent Packages']).includes('newReadmeFileName')) {
            return;
        }
        const independentPackages = Array.from(new Set([...currentSidebarJson.docs["Independent Packages"], newReadmeFileName].sort()));
        const newSidebarJson = {
            ...currentSidebarJson,
            docs: {
                ...currentSidebarJson.docs,
                ["Independent Packages"]: independentPackages
            }
        }
        writeFileSync(`../docusaurus/sidebars.json`, JSON.stringify(newSidebarJson, null, 2), 'utf-8');
    } catch (err) {
        console.log("----")
        console.log(err);
        console.log("----")
    }


}

try {
    ls();
    addToSidebarJson();
} catch (err) {
    console.log(err)
}