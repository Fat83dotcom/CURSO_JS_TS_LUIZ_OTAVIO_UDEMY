function recarregar() {
    location.reload(true)
}
function verificaPonto(funcao) {
    display = document.getElementById('calc').value
    cont = 0
    for (let index = 0; index < display.length; index++) {
        if (display[index] == '.'){
            cont++
        }
    }
    if (cont == 0){
        funcao()
    }
}
function recuperaValorDisplay() {
    return document.getElementById("calc").value
}
function apagaDisplay() {
    document.getElementById("calc").value = ''
}
function display(valor) {
    document.getElementById("calc").value = valor
}
function valorDisplay(valor) {
    if (recuperaValorDisplay() == '0') {
        document.getElementById("calc").value = valor
    }
    else {
        document.getElementById("calc").value += valor
    }
}
function n1() {
    valorDisplay('1')
}
function n2() {
    valorDisplay('2')
}
function n3() {
    valorDisplay('3')
}
function n4() {
    valorDisplay('4')
}
function n5() {
    valorDisplay('5')    
}
function n6() {
    valorDisplay('6')    
}
function n7() {
    valorDisplay('7')    
}
function n8() {
    valorDisplay('8')    
}
function n9() {
    valorDisplay('9')    
}
function n0() {
    valorDisplay('0')    
}
function ponto() {
    valorDisplay('.')   
}
function executaPonto() {
    verificaPonto(ponto)
}
function soma(a, b) {
    return a + b 
}
function sub(a, b) {
    return a - b 
}
function divi(a, b) {
    if (b == 0) {
        alert('Operação Invalida, Divisão por Zero!!!')
        return false
    }
    else{
        return a / b 
    }
}
function mult(a, b) {
    return a * b 
}
function rQdr(a) {
    const parcelaA = parseFloat(recuperaValorDisplay())
    apagaDisplay()
    return valorDisplay(Math.sqrt(parcelaA))
}
function receptor() {
    const parcelaA = parseFloat(recuperaValorDisplay())
    return parcelaA
}
let arrayDeOperandos = [0, 0]
let arrayDeOperacoes = []
function executor(operacao) {
    var doc = document.getElementById('teste')
    arrayDeOperandos.push(parseFloat(receptor()))
    arrayDeOperacoes.push(operacao)
    apagaDisplay()

   if (arrayDeOperandos[0] != 0 && arrayDeOperandos[1] != 0) {
    
   }
    doc.innerHTML = 'entrou aqui'
    if (arrayDeOperacoes[0] == 'soma'){
        arrayDeOperandos[0] = soma(arrayDeOperandos[0], arrayDeOperandos[1])
        display(arrayDeOperandos[0])
        arrayDeOperandos.shift()
        arrayDeOperacoes.shift()
    } 
    else if (arrayDeOperacoes[0] == 'sub'){
        arrayDeOperandos[0] = sub(arrayDeOperandos[0], arrayDeOperandos[1])
        display(arrayDeOperandos[0])
        arrayDeOperandos.shift()
        arrayDeOperacoes.shift()
    }
    else if (arrayDeOperacoes[0] == 'mult'){
        arrayDeOperandos[0] = mult(arrayDeOperandos[0], arrayDeOperandos[1])
        display(arrayDeOperandos[0])
        arrayDeOperandos.shift()
        arrayDeOperacoes.shift()
    }
    else if (arrayDeOperacoes[0] == 'div'){
        arrayDeOperandos[0] = divi(arrayDeOperandos[0], arrayDeOperandos[1])
        display(arrayDeOperandos[0])
        arrayDeOperandos.shift()
        arrayDeOperacoes.shift()
    }
    
    doc.innerHTML = arrayDeOperandos[0]
    // doc.innerHTML += arrayDeOperandos[1]
    doc.innerHTML = arrayDeOperacoes[0]
    // doc.innerHTML += arrayDeOperacoes[1]
    // doc.innerHTML += cont  

}