
const fs = require('fs')

const text = 'Aqui tem conteudo'

fs.writeFile('file.txt', text, {flag: 'a+'}, err => {
    if (err) {
        console.log(err);
        return
    }
});

for (let i = 0; i < 500; i++) {
    fs.writeFile('file.txt', `${i}\n`, {flag: 'a+'}, err => {
        if (err) {
            console.log(err);
            return
        }
    });
    
}