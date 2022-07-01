function adicao(a, b) {
    return a + b
}
function subtracao(a, b) {
    return a - b
}
function divisao(a, b) {
    if (b == 0) {
        alert("Operação não permitida, divisão por ZERO!!!")
        return false
    }
    else {
        return a / b
    }
}
function multiplicacao(a, b) {
    return a * b
}
function recarregar() {
    location.reload()    
}
function imprimeResultado(valor) {
    let resultadoHtml = document.getElementById('resultado')
    resultadoHtml.innerHTML = valor
}
function sinal(valor) {
    let sinalHtml = document.getElementById('sinalOperacao')
    sinalHtml.innerHTML = valor
}
function executar() {
    let numeroA = parseFloat(document.getElementById("numeroA").value)
    let numeroB = parseFloat(document.getElementById("numeroB").value)
    if (document.getElementById('adicao').checked) {
        resultado = adicao(numeroA, numeroB)
        sinal('+')
        imprimeResultado(resultado)
    }
    else if (document.getElementById("subtracao").checked) {
        resultado = subtracao(numeroA, numeroB)
        sinal('-')
        imprimeResultado(resultado)
    }
    else if (document.getElementById("divisao").checked) {
        resultado = divisao(numeroA, numeroB)
        sinal('/')
        imprimeResultado(resultado)
    }
    else if (document.getElementById("multiplicacao").checked) {
        resultado = multiplicacao(numeroA, numeroB)
        sinal('X')
        imprimeResultado(resultado)
    }
    else {
        imprimeResultado("Escolha uma operação") 
    }
}
// console.log(adicao(2, 4))