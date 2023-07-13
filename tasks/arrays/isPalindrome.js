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
    str = str.toLowerCase().replace(/\W/g, '')
    const strArray = [...str]
    const newArray = []
    strArray.forEach(element => {
        newArray.unshift(element)
    })
    const reversedStr = newArray.join('')
    console.log(str)
    return str === reversedStr
}
console.log(isPolindrom('sos'))
console.log(isPolindrom('abba'))
console.log(isPolindrom('hello'))
console.log(isPolindrom('a roza upala na lapu Azora'))