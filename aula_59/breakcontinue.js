const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8
];

for (const numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o 2');
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log('Saindo no 7 ...');
        break;
    }
}

