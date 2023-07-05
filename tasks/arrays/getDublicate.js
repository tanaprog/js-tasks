/**
 * Написать функцию возвращающую объект;
 * Ксли массив пустой вернуть строку "Пустой массив"
 * Если все элементы равны вернуть значение любого из них
 *
 *
 * [1, 'cat', 2, 3 , 5, 1] => {
 *  1: 2,
 * 'cat': 1,
 * 2: 1,
 * 3: 1,
 * 5: 1,
 * 1: 2
 * }
 *
 * @args arg: array
 */


function getDublicate(array) {
    if (array.length < 1) {
        console.log("Array is empty")
    }
    const result = {}
    for (let element of array) {
        if (result[element] != undefined) {
            result[element]++
        } else {
            result[element] = 1
        }
    }
    return console.log(result)
}
console.log(`${getDublicate([1, 1, 1, 3, 23, 23, -5])}`);
console.log(`${getDublicate([1, 1, 1, 1, 1, 1, 1])}`);
console.log(`${getDublicate([])}`);

