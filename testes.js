// let string = 'planeta'

// let novaString = ''

// let lista = []

// for (let i = 0; i < string.length; i++) {
//     if (lista.indexOf(string[i]) > -1) {
//         console.log('tem a leta', `${string[i]}`)
//     }
//     else{
//         console.log('nao tem a letra');
//     }
// }

// console.log(novaString);

// for (let i = 0; i < string.length; i++) {
//     lista.push(string[i])
    
// }

// console.log(lista);

// const func = nome => `Bom dia ${nome}`


// const vari = func

// // console.log(vari('fernando'));


// const ajax = () => {
//     const solicitacao = new XMLHttpRequest()

//     let url = 'https://api-palavra.herokuapp.com/palavra/'

//     solicitacao.open('GET', url, true)

//     solicitacao.responseType = 'json'

//     solicitacao.addEventListener('readystatechange', function () {
//         if (solicitacao.readyState === 4 && solicitacao.status === 200) {
//             alert('deu certo')
//         }

//         let resp = solicitacao.response
//         console.log(resp)
//         // let numeroRegistros = resp.length
//         // let numeroSecreto = Math.floor(Math.random() * numeroRegistros + 1)
//         // for (let i = 0; i < numeroRegistros ; i++) {
//         //     if (resp.id[i] == numeroSecreto) {
//         //         console.log(resp.id[i]);
//         //     }
            
//         // }
//     })

//     solicitacao.send()

// }


// let vare = 'kakaka'

// vare.charAt(4) = 'h'

// console.log(vare);