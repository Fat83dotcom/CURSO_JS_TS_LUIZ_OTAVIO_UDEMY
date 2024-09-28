function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia Date.');
    }

    if (!data) {
        data = new Date();
    }
    
    return data.toLocaleTimeString(
        'pt-BR',
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }
    );
}

try {
    const data = new Date('01-02-1989 12:52:41');
    const hora = retornaHora(data);
    console.log(hora);
} catch (error) {
    // tratar erro.
} finally {
    console.log('Tenha um Bom Dia.');
}

const d = retornaHora();
console.log(d);
