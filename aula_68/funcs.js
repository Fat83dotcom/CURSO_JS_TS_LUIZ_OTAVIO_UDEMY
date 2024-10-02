// Em JS, funções são objetos de primeira classe, quer dizer que podem ser tratadas
// como uma variavel. Podem ser passadas como argumeto ou retornadas.

function oi() {
    console.log('Oi');
}

const soufuncao = function () {
    // function expression
    console.log('Tambem sou função.');
}

const arrow = () => {
    console.log('Sou uma arrow function.');
}

function recebendo(funcao) {
    funcao();
}

oi();
soufuncao();
arrow();
recebendo(soufuncao);