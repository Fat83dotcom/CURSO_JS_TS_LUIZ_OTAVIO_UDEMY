function geraHora() {
    let data = new Date();

    return data.toLocaleTimeString(
        'pt-BR',
        {
            hour12: false,
        }
    )
}

const timer = setInterval(()=>{
    console.log(geraHora());
}, 1000);

setTimeout(() =>{
    clearInterval(timer);
}, 11000);