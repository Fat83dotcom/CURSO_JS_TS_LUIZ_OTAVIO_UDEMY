// Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função. fonte: MDN

function cumprimento(cump) {

    return (nome) => {
        return `${cump} ${nome} !`;
    }
}

const cumpOla = cumprimento('Olá');
const cumpOi = cumprimento('Oi');

console.log(cumpOla('Fernando'));
console.log(cumpOi('Jorge'));
console.log(cumpOla('Andrea'));
console.log(cumpOi('Maria'));


const nomes = [
    'João',
    'Rogerio',
    'Carla',
    'Cirilo',
    'Maria Joaquina',
    'Jaime',
]

for (const element of nomes) {
    console.log(cumpOla(element));
    console.log(cumpOi(element));
}