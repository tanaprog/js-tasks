/**
 * Написать функцию возвращающую минимальное число массива;
 * Ксли массив пустой вернуть строку "Пустой массив"
 * Если все элементы равны вернуть значение любого из них
 *
 * @args arg: array
 */

function getMinNumber(array) {
    if (array.length < 1) {
        return console.log("Пустой массив")
    }
    let min = Math.min(...array)
    return min
}

console.log(`Минимальное число массива ${getMinNumber([23, 504, -3, 22])}`);
console.log(`Минимальное число массива ${getMinNumber([-23, -54, -3, -2])}`);
console.log(`Минимальное число массива ${getMinNumber([])}`);
console.log(`Минимальное число массива ${getMinNumber([5])}`);
