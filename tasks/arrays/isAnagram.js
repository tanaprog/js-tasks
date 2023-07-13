/**
 * Наисать функцию которая на вход принимает 2 аргумента (строки)
 * Определить являются ли они анаграмой
 *
 * nap - pan => true
 * Pap - paP => true;
 *
 * asaab - asab  => false
 */

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     let word1 = str1.split('').sort().join('')
//     let word2 = str2.split('').sort().join('')
//     let result = (str1 === str2)
//     return result
// }
// console.log(isAnagram('Pap', 'paP'))

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let word1 = str1.toLowerCase().split('').sort().join('')
    let word2 = str2.toLowerCase().split('').sort().join('')
    if (word1 === word2) {
        return true
    }
}
console.log(isAnagram('nap', 'pan'))

