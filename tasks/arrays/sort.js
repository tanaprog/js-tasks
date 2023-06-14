/**
 * Написать функцию возвращающую отсортированный массив по возрастанию;
 *
 * @args arg: array
 */

// С помощью стандартного метода массива для сортировки
function sortArray(array) {
    return array.sort((a, b) => a - b)
}
console.log(`Сортировка по возрастанию ${sortArray([5, 3, 23, 1, 18,])}`);

// Сдеать самой, без стандартного метода массива для сортировки
function mySort(array) {
    c = []
    for (; array.length;) {
        c.push(array.splice(array.indexOf(Math.min(...array)), 1)[0])
        console.log(c)
    }
    // let obj = array.reduce((o, v, i) => {o[v] = v; return 0; }, {})
    // array = Object.keys(obj).map(num => parseInt(num))
    // return console.log(array)

    array = Object.keys(array.reduce((o, v, i) => {o[v] = v; return 0;}, {})).map(num => parseInt(num));
    console.log(array);
}
console.log(`Сортировка по возрастанию mySort ${mySort([5, 3, 23, 1, 18,])}`);
