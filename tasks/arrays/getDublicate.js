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

// function getDublicate(array) {
//     let result = {}
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         if (result[num] != undefined)
//             result[num]++
//         else
//             result[num] = 1
//     }
//     for (let key in result) {
//         console.log('число ' + key + ' : ' + result[key])
//     }
// }
// console.log(`${getDublicate([1, 1, 1, 3, 23, 23, -5])}`);
// console.log(`${getDublicate([1, 1, 1, 1, 1, 1, 1])}`);

function getDublicate(array){
    let result = []
    for(let i = 0; i < array.length; i++){
        let num = array[i]
        if(result[num] != undefined)
            result[num]++
        else 
            result[num] = 1
    }
        for (let item in result){
            console.log('число ' + item + ' : ' + result[item])
        }
    }
console.log(`${getDublicate([1, 1, 1, 3, 23, 23, -5])}`);
console.log(`${getDublicate([1, 1, 1, 1, 1, 1, 1])}`);



function getDublicate(array){
    const result = {}
    for(let element of array){
        if(result[element] != undefined){
            result[element]++
        }else{
            result[element] = 1
        }
    }
    return console.log(result)
}
console.log(`${getDublicate([1, 1, 1, 3, 23, 23, -5])}`);

