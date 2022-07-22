const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'dados.txt')

function showContent(_, content) {
    console.log(content.toString())
}

fs.readFile(pathFile, {}, showContent)

console.log('Inicio Sync...')
const content = fs.readFileSync(pathFile)
console.log(content.toString())
console.log('Fim Sync...')