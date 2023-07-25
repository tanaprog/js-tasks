/**
 * Написать функцию сложения всех чисел массива;
 * Ксли массив пустой вернуть строку "Пустой массив"
 *
 * @args arg: array
 */

function sum(array) {
    if (array.length < 1) {
        return console.log("Пустой массив")
    }
    return array.reduce((acc, item) => acc + item, 0) //указываем с какого числа мы хотим начать суммировать, 0 указываем если вдруг пустой масив
}

console.log(`Сумма чисел массива ${sum([1, 3, 23, -5])}`);
console.log(`Сумма чисел массива  ${sum([9])}`);
console.log(`Сумма чисел массива ${sum([33, 78, 105])}`);
console.log(`Сумма чисел массива  ${sum([])}`);


function sum(array) {
    let mySum = 0
    if (array.length < 1) {
        return console.log("Пустой массив")
    }
    for (let el of array) {
        mySum += el
    }
    return mySum
}

console.log(`Сумма чисел массива ${sum([1, 3, 23, -5])}`);
console.log(`Сумма чисел массива  ${sum([9])}`);
console.log(`Сумма чисел массива ${sum([33, 78, 105])}`);
console.log(`Сумма чисел массива  ${sum([])}`);