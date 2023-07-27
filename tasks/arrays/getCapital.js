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

const myObj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
}

function getObject(myObj) {
    let capital = []
    for (let key in myObj) {
        capital.push(key + ' - это ' + myObj[key])
    }
    console.log(capital)
}
getObject(myObj)


// const myObj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// }

// function getObject(myObj) {
//     let capital = []
//     for (let key in myObj) {
//         console.log(key + ' - это ' + myObj[key]);
//     }
// }
// getObject(myObj)