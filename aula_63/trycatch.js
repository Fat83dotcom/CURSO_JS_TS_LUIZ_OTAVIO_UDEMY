
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(4, 6));
    console.log(soma(4, '89'));
} catch (error) {
    console.log('Mensagem amigavel para o usuario.');
}
