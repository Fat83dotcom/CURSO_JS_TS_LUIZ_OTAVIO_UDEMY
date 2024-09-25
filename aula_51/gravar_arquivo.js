
const fs = require('fs')

const text = 'Aqui tem conteudo'

fs.writeFileSync('file.txt', text, {flag: 'a+'}, err => {
    if (err) {
        console.log(err);
        return
    }
});

for (let i = 0; i < 500000; i++) {
    fs.writeFileSync('file.txt', `${i}\n`, {flag: 'a+'}, err => {
        if (err) {
            console.log(err);
            return
        }
    });
}