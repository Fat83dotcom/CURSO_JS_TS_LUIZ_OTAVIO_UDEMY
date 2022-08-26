const display = (id, texto, concatenar) => {
    const displayFunc = document.getElementById(id)
    concatenar ? displayFunc.innerHTML += texto : displayFunc.innerHTML = texto
}

let numeroChances = 0
let flag = false
const setNivel = () => {
    const checkEasy = document.getElementById('facil')
    const checkMedium = document.getElementById('medio')
    const checkHard = document.getElementById('dificil')
    if (numeroChances == 0 && flag == false) {
        flag = true
        if (checkEasy.checked) {
            numeroChances = 7
            display('tentativas', numeroChances, false)
        }
        else if (checkMedium.checked) {
            numeroChances = 5
            display('tentativas', numeroChances, false)
        }
        else if (checkHard.checked) {
            numeroChances = 3
            display('tentativas', numeroChances, false)
        }
    }
    else {
        display('tentativas', 'Você não pode mais mudar o nível de dificuldade !!', false)
    }
}

let vitoria = false
let contadorAcertos = 0
const palpitesAcumulados = []
const letrasIndividuais = []
const palavra = {
    palavra: 'uva',
    categoria: 'fruta'
}

for (let i = 0; i < palavra.palavra.length; i++) {
    letrasIndividuais.push(palavra.palavra[i])
}

const palpitar = () => {
    display('tentativas', numeroChances, false)
    if (flag) {
        if (numeroChances > 0) { 
            if (!vitoria) {
                let palavraChave = palavra.palavra
                display('palavraChave', ' ', false)
                let palpite = document.getElementById('entraLetra').value
                
                if (palpitesAcumulados.indexOf(palpite) == -1) {
                    palpitesAcumulados.push(palpite)
                }
                else{
                    alert('Você já digitou essa letra !!!')
                    return
                }
                if (letrasIndividuais.indexOf(palpite) == -1) {
                    numeroChances--
                    display('tentativas', numeroChances, false)
                    display('textoFinal', 'Errou ...', false)
                }
                else {
                    contadorAcertos++
                    if (contadorAcertos == palavraChave.length) {
                        vitoria = true
                        display('tentativas', 'Você Ganhou !!!')
                    }
                    else{
                        display('textoFinal', 'Acertô, Mizeravi !!! XD', false)
                    }
                }
                for (let i = 0; i < palavraChave.length; i++) {
                    (palpitesAcumulados.indexOf(palavraChave[i]) > -1) ? 
                    display('palavraChave', palavraChave[i], true) : 
                    display('palavraChave', '*', true)
        
                }
            }
            else{
                display('palavraChave', 'O jogo Terminou !! Você Venceu !!!', false)
            } 
        }
        else {
            display('tentativas', 'GAME OVER!!!', false)
            display('textoFinal', 'Tente Novamente ...', false)
            numeroChances = -1
        }
    }
    else {
        display('tentativas', 'Escolha o nível do Jogo !!!', false)
    }
}

let cont = 0
const dicas = () => {
    alert(cont == 0 ? `Número de Letras: ${palavra.palavra.length}\nTipo: ${palavra.categoria}` : 'Chega de dicas !!!')
    cont++
}
