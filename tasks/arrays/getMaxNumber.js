/**
 * Написать функцию возвращающую максимальное число массива;
 * Ксли массив пустой вернуть строку "Пустой массив"
 * Если все элементы равны вернуть значение любого из них
 *
 * @args arg: array
 */

function getMaxNumber(array) {
    let max = Math.max.apply(null, array)
    if(array == []){
        return console.log("Пустой массив")
    }
    console.log(max)
}

console.log(`Максимальное число массива ${getMaxNumber([23, 504, -3, 22])}`);
console.log(`Максимальное число массива ${getMaxNumber([-23, -54, -3, -2])}`);
console.log(`Максимальное число массива ${getMaxNumber([])}`);
console.log(`Максимальное число массива ${getMaxNumber([5])}`);
