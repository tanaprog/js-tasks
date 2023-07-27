/**
 * Наисать функцию которая на вход принимает 2 массива и  проверяет их на идентичность
 *
 * [1, 2, 3] and [2,3,1] => true
 *
 * [1 , 1, 2, 3] and [3, 2, 2, 1] = > false
 */

function compareArrays(array1, array2) {
    let first = [...array1].sort()
    let second = [...array2].sort()
    return first.length === second.length && first.every((value, index) => value === second[index])
}
console.log(compareArrays([1, 2, 3], [2, 3, 1]))