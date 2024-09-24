for (let i = 0; i < 10; i++) {
    const element = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, element);
}

// Com passo de 3 em 3

for (let i = 0; i < 100; i+= 3) {
    console.log(i);    
}

// Voltando

for (let i = 100; i > 0; i--) {
    console.log(i);    
}

// Percorrendo um array

const frutas = ['Pêra', 'Uva', 'Maça', 'Salada Mista']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Percorrendo um array de trás para frente

for (let i = frutas.length -1; i >= 0; i--) {
    console.log(frutas[i]);
}