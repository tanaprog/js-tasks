/**
 * Наисать функцию которая на вход принимает строку, и возвращает булево значение, является ли строка палиндромом
 * НЕ учитываем пробелы и Регистр
 *
 * ['sos'] => true
 * ['abba'] => true
 * ['привет'] => false
 * ['а роза упала на лапу Азора'] => true
 */


function isPolindrom(str) {
    str = str.toLowerCase().split(' ').join('')
    if (str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPolindrom('sos'))
console.log(isPolindrom('abba'))
console.log(isPolindrom('привет'))
console.log(isPolindrom('а роза упала на лапу Азора'))



// function isPolindrom(str) {
//     str = str.toLowerCase().replace(/\s/g, '');
//     if (str === str.split('').reverse().join('')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPolindrom('sos'))
// console.log(isPolindrom('abba'))
// console.log(isPolindrom('привет'))
// console.log(isPolindrom('а роза упала на лапу Азора'))