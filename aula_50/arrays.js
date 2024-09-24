// Atribuição via desestruturação

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];

[a, b, c] = letras; // As variaveis do lado esquerdo são atribuidas conforme o array letras

console.log(a, b, c);
