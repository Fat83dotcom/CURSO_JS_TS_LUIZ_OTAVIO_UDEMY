function somadora() {
    let numero1 = prompt('Digite um numero: ')
    let numero2 = prompt('Digite outro número: ')
    const resultadoF = Number(numero1) + Number(numero2)
    return resultadoF
}

let resultado

do {
    resultado = somadora()
    if (isNaN(resultado)) {
        alert(`Digite somente números`)
    }
    else{
        alert(`O resultado da soma dos dois números é: ${resultado}`)
    }
} while (isNaN(resultado)); 
