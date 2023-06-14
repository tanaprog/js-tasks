/**
 * Написать функцию возвращающую объект;
 * Ксли массив пустой вернуть строку "Пустой массив"
 * Если все элементы равны вернуть значение любого из них
 *
 *
 * [1, 'cat', 2, 3 , 5, 1] => {
 *  1: 2,
 * 'cat': 1,
 * 2: 1,
 * 3: 1,
 * 5: 1,
 * 1: 2
 * }
 *
 * @args arg: array
 */

function getDublicate(array) {
    let result = {}
    for (let i = 0; i < array.length; ++i) {
        let num = array[i]
        if(result[num] != undefined)
        {++result[num]}
        else 
        {result[num] = 1}
    }
    for (let key in result){
    console.log('число ' + key + ' : ' + result[key] )}
}
console.log(`${getDublicate([1, 1, 1, 3, 23, 23, -5])}`);


//Второй вариант

function getDublicate(array, num) {
    let number = {}
    array.forEach(item => {
        number[item] = (number[item] || 0) + 1
      });
      return number
}

console.log(getDublicate([1, 1, 3, 3, 3, 23, 5], 3))

//{ '1': 2, '3': 3, '5': 1, '23': 1 } - эта функция выводит такой результат
