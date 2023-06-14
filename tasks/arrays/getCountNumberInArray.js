/**
 * Написать функцию возвращающую колличество повторений переданного числа;
 *
 * @args arg: array, num: number
 */

function getCountNumber(array, num) {
    return array.filter(i => i === num).length
}

 console.log(`Число встречается : ${getCountNumber([1, 1, 3, 3, 3, 23, 23, 23, 23, -5], 23)} раз(а)`);
