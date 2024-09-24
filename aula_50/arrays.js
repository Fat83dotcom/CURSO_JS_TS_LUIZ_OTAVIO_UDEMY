// Atribuição via desestruturação

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];

[a, b, c] = letras; // As variaveis do lado esquerdo são atribuidas conforme o array letras

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [n1, n2, n3, ...resto] = numeros;

console.log(n1, n2, n3, resto);

const arrNumeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let [arr1, arr2, arr3] = arrNumeros;

console.log(arr1[2]);


