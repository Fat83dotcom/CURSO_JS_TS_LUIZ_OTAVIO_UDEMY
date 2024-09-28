const parag = document.querySelector('.paragrafos');
const p = parag.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backGroundColorBody = styleBody.backgroundColor;

for (const element of p) {
    element.style.backgroundColor = backGroundColorBody;
    element.style.color = '#fff';
    element.style.padding = '10px';
    element.style.textAlign = 'center';
    element.style.borderRadius = '5px';
}