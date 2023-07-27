/**
 * Наисать функцию которая на вход принимает массив а возвращает новый массив задом наперед
 *
 *
 * [1, 5, 6, 3, 7] => [7, 3, 6, 5, 1]
 */


// function reversArray(array) {
//     return array.reverse()
// }
// reversArray([1, 5, 6, 3, 7])

function reversArray(array) {
    let newArr = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i])
    }
    return newArr
}
reversArray([1, 5, 6, 3, 7])


// function reversArray(array) {
//     for(let i = array.length; i >= 0; i--){
//         console.log(array[i])
//     }
// }
// reversArray([1, 5, 6, 3, 7])