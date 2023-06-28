/**
 * Написать функцию возвращающую массив с уникальными значениями (убрать дуботкаты);
 *
 *
 * [1, 2, 1, 3, 3, 43, 3] => [1, 2, 3, 43]
 * @args arg: array
 */

function unique(array) {
    let result = []
    for (let num of array) {
        if (!result.includes(num)) { //! преобразовывает в логическую оценку. Если оценка истина вернет false
                                     // если ложь вернет true
            result.push(num)
        }
    }
    return result
}
console.log(`Уникальные номера ${unique([1, 3, 1, 3, 23, 23, -5, -5, 6, 7, 7])}`);
