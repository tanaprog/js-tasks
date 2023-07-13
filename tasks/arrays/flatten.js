/**
 * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
 * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Глубокий массив
 * @returns {Array}
 */

function getSimpleArray(array){
    return array.flat(2)
}
console.log(getSimpleArray([1, 2, [3, 4, [5]]]))