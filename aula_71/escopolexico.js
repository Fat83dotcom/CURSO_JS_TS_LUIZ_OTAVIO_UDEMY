// Uma variavel declarada em um escopo acima do escopo da função, pode ser acessada pela função.

let num = 3;

function pseudoLog() {
    //let num = 5;
    console.log(num);
}

function chamaPseudoLog() {
    // Essa variavel não é mostrada: não está no escopo acima da declaração
    let num = 4;
    pseudoLog();
}

function pseudoLog2() {
    // Essa é a variavel mostrada em pseudoLog3: um escopo acima da declaração.
    let num = 9;
    function pseudoLog3() {
        console.log(num);
    }
    pseudoLog3();
}

pseudoLog();

chamaPseudoLog();

pseudoLog2();
