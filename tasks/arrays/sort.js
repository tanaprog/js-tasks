/**
 * Написать функцию возвращающую отсортированный массив по возрастанию;
 *
 * @args arg: array
 */

// С помощью стандартного метода массива для сортировки
function sortArray(array) {
    return array.sort((a, b) => a - b)
}
console.log(`Сортировка по Возрастанию ${sortArray([5, 3, 23, 1, 18])}`);


// Сдеать самой, без стандартного метода массива для сортировки

function mySort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    return array
}
console.log(`Сортировка по ВОЗРАСТтанию mySort ${mySort([5, 3, 23, 1, 18])}`);