function entraNumero1() {
    let n = prompt('Digite um número inteiro positivo: ')
    if (isNaN(n) || n < 0) {
        alert('Digite somente números inteiros e positivos.')
        return entraNumero1()
    }
    else{
        return n
    }
}
function entraNumero2() {
    let n = prompt('Digite um número inteiro positivo: ')
    if (isNaN(n) || n < 0) {
        alert('Digite somente números inteiros e positivos.')
        return entraNumero2()
    }
    else{
        return n
    }
}
function divisao(vetor) {
    if (vetor[1] == 0) {
        alert('Operação invalida, divisão po zero.')
        divisaoInteiros()
    }
    else{
        let divi = vetor[0] / vetor[1]
        alert(`A divisão entre ${vetor[0]} e ${vetor[1]} é igual a ${divi}`)
        return
    }
}
function divisaoInteiros() {
    let num = []
    num[0] = parseInt(entraNumero1())
    num[1] = parseInt(entraNumero2())
    divisao(num)

}
divisaoInteiros()
