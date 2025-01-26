const a = ['banana', 'maça', 'pera', 'uva', 'jaca', 'coco']

const [b, c, ...d] = a


console.log(b)
console.log(c)
console.log(d)


for (const key in a) {
    console.log(a[key]);
    
}

const post = async (url) =>{
    try {
        const response = await fetch(url)
        if (response.ok) {
            const responseJson = await response.json()
            console.log(response.status);
            return responseJson    
        }
        return {err: response.statusText}
    } catch (error) {
        console.log(error);
    }
}

const postJson = async () => {
    const obj = await post('https://jsonplaceholder.typicode.com/posts')

    console.log(obj);
    
    
    // for (const element of obj) console.log(element)
    obj.map((post) =>{
        console.log(post.title.toUpperCase());
    })
    
}

postJson()


// Funçõe de call back são funções que são chamadas após o termino de alguma tarefa executada por uma função.
// Mesmo que a tarefa seja assincrona, há possibilidade de ordenar a execução de uma serie de funções
// Isso não é considerado mais uma boa pratica de programaçao, pois o encadeamente de muitas funções
// pode levar a um codigo sujo e de dificil manutenção.

function rand(min, max) {
    const ran = Math.random() * (max -min) + min
    // return Math.floor(ran)
    return Math.floor(ran)
}

function f1(callBack) {
    setTimeout(function() {
        console.log('f1')
        if (callBack) callBack()
    }, rand(1, 6))
}

function f2(callBack) {
    setTimeout(function() {
        console.log('f2')
        if (callBack) callBack()
    }, rand(1, 9))
}

function f3(callBack) {
    setTimeout(function() {
        console.log('f3')
        if (callBack) callBack()
    }, rand(2, 28))
}

f1(function() {
    f2(function () {
        f3(function () {
            console.log('terminou');
            
        })
    })
})
