/**
 * Написать функцию возвращающую отсортированный массив по возрастанию;
 *
 * @args arg: array
 */

// С помощью стандартного метода массива для сортировки
function sortArray(array) {
    return array.sort((a, b) => a - b)
}
console.log(`Сортировка по Возрастанию ${sortArray([5, 3, 23, 1, 18,])}`);


// Сдеать самой, без стандартного метода массива для сортировки
function mySort(array) {
    c = []
    for (; array.length;) {
        c.push(array.splice(array.indexOf(Math.min(...array)), 1)[0])
        console.log(c)
    }

    array = Object.keys(array.reduce((o, v, i) => {o[v] = v; return 0;}, {})).map(num => parseInt(num));
    console.log(array);
}
console.log(`Сортировка по ВОЗрастанию mySort ${mySort([5, 3, 23, 1, 18,])}`);

function mySort(array) {
    let arrCopy = array.slice(0, array.length)
    let result = []
    arrCopy.forEach(() => {
        let minElementIndex = 0
        minElementIndex = array.indexOf(Math.min.apply(Math, array))
        result.push(array[minElementIndex])
        array.splice(minElementIndex, 1)
    })
    console.log(result)
}

console.log(`Сортировка по ВОЗРАСТтанию mySort ${mySort([5, 3, 23, 1, 1, 18])}`);