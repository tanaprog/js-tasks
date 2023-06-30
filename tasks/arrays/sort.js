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
    let arrCopy = array.slice(0, array.length)
    let result = []
    arrCopy.forEach(() => { //forEach - перебор элементов массива
        let minElementIndex = 0
        minElementIndex = array.indexOf(Math.min.apply(Math, array))//indexOf() возвращает первый индекс
        result.push(array[minElementIndex])//с помощью push() добавляются в другой массив
        array.splice(minElementIndex, 1) //удаляет один эл. по индексу minElementIndex
    })
    return result
}


console.log(`Сортировка по ВОЗРАСТтанию mySort ${mySort([5, 3, 23, 1, 18])}`);