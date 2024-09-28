// A variavel do laço retorna o indice, no caso de um array ou a chave no case de um objeto.

const carros = [
    'fusca',
    'opala',
    'monza',
    'belina'
];

const pessoa = {
    nome: 'Fernando',
    idade: 40
};

const pessoas = [
    {nome: 'Meria', idade: 65},
    {nome: 'Jão', idade: 23},
    {nome: 'Mauro', idade: 100}
]

for (const i in carros) {
    console.log(carros[i]);
}

for (const key in pessoa) {
    console.log(pessoa[key]);
}

for (const i in pessoas) {
    for (const key in pessoas[i]) {
        console.log(pessoas[i][key]);
    }
}
