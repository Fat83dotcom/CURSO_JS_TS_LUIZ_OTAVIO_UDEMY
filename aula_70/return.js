// Uma função pode retornar um valor após efetuar alguma tarefa.

function multiplicador(multiplicador) {
    return (n) => {
        return multiplicador * n;
    }
}

const multiplica = multiplicador(5);

console.log(multiplica(10));
