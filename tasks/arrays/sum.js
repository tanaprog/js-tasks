/**
 * Написать функцию сложения всех чисел массива;
 * Ксли массив пустой вернуть строку "Пустой массив"
 *
 * @args arg: array
 */

sum = function (array) {
    return array.reduce((a,b) => a + b, 0)
    if (array === []) {
        return console.log("Пустой массив")
    }
}

console.log(`Сумма чисел массива ${sum([1, 3, 23, -5])}`);
console.log(`Сумма чисел массива  ${sum([9])}`);
console.log(`Сумма чисел массива ${sum([33, 78, 105])}`);
console.log(`Сумма чисел массива  ${sum([])}`);
