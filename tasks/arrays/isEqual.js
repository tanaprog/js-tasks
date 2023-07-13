/**
 * Наисать функцию которая на вход принимает 2 массива и  проверяет их на идентичность
 *
 * [1, 2, 3] and [2,3,1] => true
 *
 * [1 , 1, 2, 3] and [3, 2, 2, 1] = > false
 */

// function compareArrays(array1, array2){
//     return array1.length === array2.length && array1.every((value, index) => value === array2[index])
// }
// console.log(compareArrays([1, 2, 3], [2,3,1]))

function compareArrays(array1, array2) {
    return array1.length === array2.length && array1.every((index, array) => index === array2[array])
}
console.log(compareArrays([1, 2, 3], [2, 3, 1])) //выводит true если элементы в одном порядке
console.log(compareArrays([1, 1, 2, 3], [3, 2, 2, 1]))



// function compareArrays(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false
//     }
//     array1.length === array2.length && array1.sort().every(function(value, index) { return value === array2.sort()[index]});
// }
// console.log(compareArrays([1, 2, 3], [2, 3, 1]))
// console.log(compareArrays([1, 1, 2, 3], [3, 2, 2, 1]))