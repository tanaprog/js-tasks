/**
 *   var obj = {
 *    'Минск': 'Беларусь',
 *    'Москва': 'Россия',
 *    'Киев': 'Украина'
 *   };
 *  Написать функцию принимающу объект
 *  получить: Минск - это Беларусь, Москва - это Россия, Киев - это Украина
 *
 */

// let capital = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина',
// }

// function getCapital(capital) {
//     for (const [key, value] of Object.entries(capital)) {
//         return console.log(`${key} - это ${value}`)
//     }
// }

// console.log(getCapital(capital))

const myObj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина',
}

function getObject(myObj) {
    for (const [key, value] of Object.entries(myObj)) {
        console.log(`${key} - это ${value}`)
    }
}
getObject(myObj)