// Escreva uma função que recebe um número e retorne:
// Divisivel por 3 -> Fizz
// Divisivel por 5 -> Buzz
// Divisivel por 3 e 5 -> FizzBuzz
// Não divisivel por 3 e 5 -> retorna o proprio número
// Checar se a entrada realmente é um número.

util = require('util');


function fizzBuzz(n) {
    if (!util.isNumber(n)) return n;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}

console.log(fizzBuzz('88'));
console.log(fizzBuzz('15'));
console.log(fizzBuzz('Fernando'));
