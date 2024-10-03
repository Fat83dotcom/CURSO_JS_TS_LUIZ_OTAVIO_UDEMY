function sum(x, y) {
    return x + y;
}

console.log(sum(3, 5));

function sum2() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum2(3, 4, 5, 6, 7, 8, 9, 0));

function foo(a, b, c, ...rest) {
    let sum = a + b + c;
    let sum1 = 0;
    for (let i = 0; i < rest.length; i++) {
        sum1 += rest[i];
    }

    return sum - sum1;
}


console.log(foo(23, 54, 45, 5, 67, 8, 9, 6, 34, 56));

function bar() {
    return arguments[0] + arguments[1]
}


console.log(bar(2, 8, 9, 0));
