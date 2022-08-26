
// function repete(n, s) {
//     let num = n
//     let string = s
//     let resultado = n * s
//     console.log(resultado);
// }

// repete(4, 'f')



const letrasEncontradas = []
const formarPalavra = [] 
let palavraOculta = []


let palavra = 'cavalo'
// let letrasEncontradas = leEnc
// let formarPalavra = forPal
// let pChave = document.getElementById("palavraChave")
// pChave.innerHTML = ' '

let palpite = 'c'

for (let i = 0; i < palavra.length; i++) {
    if (palpite == palavra[i]) {
        if (!(palpite  in letrasEncontradas))
            letrasEncontradas.push(palavra[i])
    }
}

if (letrasEncontradas.length != 0) {
    for (let i = 0; i < letrasEncontradas.length; i++) {
        if (palavra[i] == palpite) {
            palavraOculta.push(palavra[i])
        }
        else{
            palavraOculta.push('*')
        }
    }           
}

// for (let i = 0; i < palavraOculta.length; i++) {
//     pChave.innerHTML =+ palavraOculta[i]
