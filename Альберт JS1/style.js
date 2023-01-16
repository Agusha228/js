// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years myDog guests
// Функции: dogYears makeTea secret
// Встроенные функции: dogYears(myDog, 4); makeTea(guests, 'Earl Grey'); secret();
// Аргументы: (myDog, 4) (guests, 'Earl Grey') ()
// Параметры: (dogname, age) (cups, tea) secret()
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();



//let txt1 = 'JS';
//console.log(txt1.toLowerCase());



let txt2 = 'я люблю JS!';
console.log(txt2.substr(2, 5), txt2.substr(8,2));
console.log(txt2.substring(2, 7), txt2.substring(8,10));
console.log(txt2.slice(2, 7), txt2.slice(8,10));



let txt3 = 'я люблю JS!';
console.log(txt3.indexOf('люблю'))


let txt4 = 'abcdefghijklmnopqrstuvwxyz';
let n = 5;
if (txt4.length > n) {
    let result = txt4.slice(0, n);
    console.log(result + '...');
}
else {
    let result = txt4;
    console.log(result)
}





let txt5 = 'Я-люблю-JS!';
console.log(txt5.replace(/-/g, '!'));


let txt6 = 'я люблю JS';
console.log(txt6.split(' '));

let txt7 = 'привет мир';
console.log(txt7.split(''));