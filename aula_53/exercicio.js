const elemen = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'},
];

// function insertText(source) {
//     let result = document.getElementById('result');
//     for (let i = 0; i < source.length; i++) {  
//         result.innerHTML += `<${source[i].tag}>${source[i].text}</${source[i].tag}>`;
//     }
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//     insertText(elemen);
// });

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elemen.length; i++) {
    let {tag, text} = elemen[i];
    let tagCreated = document.createElement(tag);
    let textCreated = document.createTextNode(text);

    tagCreated.appendChild(textCreated);
    div.appendChild(tagCreated);
}

container.appendChild(div);
