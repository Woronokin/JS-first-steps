// ПЕРЕМЕННЫЕ

// use strict - строгий режим, располагается в начале кода.
// строгий режим не учитывает то, что написано перед ним
// допускается использование комментариев перед use strict, запускается следующим образом:
// "use strict"

let size; 
/* название переменных всегда начинаются с прописной буквы.
Всегда нужно закрывать строку c помощью ";" .
Нельзя начинать название переменной с цифры */

let leftSideBar;
//каждое новое слово в переменное начинается с заглавной буквы.

// Присвоение значения переменной\

/*
// Объявляем без значения
let myFirstScript;

// Присваивание значения (не работает в строгом режиме) 
myFirstScript = '111';  
*/
// Объявление переменной и присваивание значения
let  myFirstScript = '333';
// вывод переменной в консоль
console.log(myFirstScript);

// Передача значений переменных

let myAge = 18;
let myNewAge = 24;
// Копируем значение переменной myNewAge в переменную myAge
myAge = myNewAge;
console.log(myAge);


/* Константа - постоянная переменная, заранее известные
Константы записываются в вверхнем регистре */
const MY_HEIGHT = '199';
// Смена значения в константе
// Объект с данными
const userProfile = {
	name: 'Про Турбо Юзер 9000',
	age: 11,
	message: 'Живи чтобы жить, а жить чтобы живи (с) Сократ'
}
console.log(userProfile);
// Меняем значение одного из полей объекта
userProfile.age = 13;
//ошибки нет, данные изменились
console.log(userProfile);


// var - устарело, но можно использовать в разных случаях
// Использование переменной до ее объявления (работает и в строгом режиме) 
mySecondScript = '1111';  
console.log(mySecondScript);
var mySecondScript;
// так же переменная блока будет видна за его пределами, если вместо var использовать let, то переменную нельзя будет вывести отдельно
if (true) {
	var myAgeVar = 25;
}
console.log(myAgeVar);