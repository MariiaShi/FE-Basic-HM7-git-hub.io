//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function minNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function printNumbers(a, b) {


    if (a >= b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }


    for (let num = start; num >= end; num--) {

        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
printNumbers(40, 35)
//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени.
//Значение степени должно быть указано по умолчанию 2.
function power(base, exponent = 2) {
    return pow(base, exponent);
}
let result1 = power(2);
console.log(result1);

let result2 = power(3, 3);
console.log(result2);
//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function sumEvenOdd(n, m) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }
}