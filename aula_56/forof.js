// Retorna o valor do iteravel diretamente e não funciona com objetos.

const nome = 'Fernando Mendes Oliveira';

const animais = [
    'gato',
    'cachorro',
    'vaca',
    'porco'
]

for (const element of nome) {
    console.log(element);
}

for (const element of animais) {
    console.log(element);
}
