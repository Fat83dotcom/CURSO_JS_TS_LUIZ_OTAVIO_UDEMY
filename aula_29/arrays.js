const alunos = ['maria', 'zezinho', 'jotinha'] // listas são indexados por elementos

console.log(alunos) //mostra a lista completa
console.log(alunos[0]) // mostra um indice da lista, no caso, indice zero

alunos[2] = 'Paty Maionese' // atribui um novo valor no indice 2
alunos[alunos.length] = 'valor' // adiciona um valor ao final da lista usando o tamanho do array como referencia
alunos.push('valor') // adiciona um valor ao final do array

console.log(alunos.slice(0, -2)); // fatia o array 

console.log(alunos) //mostra a lista completa
