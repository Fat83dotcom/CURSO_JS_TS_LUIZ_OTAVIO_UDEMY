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
function executar() {
    let resultadoHtml = document.getElementById('resultado')
    let sinalHtml = document.getElementById('sinalOperacao')
    let numeroA = parseFloat(document.getElementById("numeroA").value)
    let numeroB = parseFloat(document.getElementById("numeroB").value)
    if (document.getElementById('adicao').checked) {
        resultado = adicao(numeroA, numeroB)
        sinalHtml.innerHTML = '+'
        resultadoHtml.innerHTML = resultado
    }
    else if (document.getElementById("subtracao").checked) {
        resultado = subtracao(numeroA, numeroB)
        sinalHtml.innerHTML = '-'
        resultadoHtml.innerHTML = resultado
    }
    else if (document.getElementById("divisao").checked) {
        resultado = divisao(numeroA, numeroB)
        sinalHtml.innerHTML = '/'
        resultadoHtml.innerHTML = resultado
    }
    else if (document.getElementById("multiplicacao").checked){
        resultado = multiplicacao(numeroA, numeroB)
        sinalHtml.innerHTML = 'X'
        resultadoHtml.innerHTML = resultado
    }
    else {
        resultadoHtml.innerHTML = "Escolha uma operação"
    }
}
// console.log(adicao(2, 4))