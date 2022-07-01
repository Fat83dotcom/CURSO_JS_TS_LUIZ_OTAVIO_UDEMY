const nome = 'Fernando'
const sobreNome = 'Mendes'
const idade = 39
const peso = 100
const alturaEmMetros = 1.74
const imc = peso / (alturaEmMetros * alturaEmMetros)
let anoNascimento
anoNascimento = 2022 - idade
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmMetros} mts de altura`)
console.log(`e seu IMC é ${imc.toFixed(2)}`)
console.log(`${nome} nasceu em ${anoNascimento}`)