const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Mendes',
    idade: 40,
    endereco: {
        rua: 'jpc-5',
        numero: 333
    }
};

//const {nome, idade} = pessoa;

//console.log(nome, idade);

const {endereco: {rua, numero}} = pessoa;

//console.log(rua, numero);

const {nome, idade, ...resto} = pessoa;

console.log(nome, idade, resto);

