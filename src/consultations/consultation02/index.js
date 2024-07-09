// Необходимо вывести в консоль true, если заданная строка присутствует в массиве и false, если нет
// const arrayExample= ['1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33', '9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba' , 'c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e'];

// const data = '9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba';
// result = false;
// for (i = 0; i < arrayExample.length; i++) {
//         if (arrayExample[i] == data) {
//             result = true;
//         }
// }

// console.log(result);
// console.log(arrayExample.length);

// Решение 2

// console.log(arrayExample.includes(data));
// arrayExample.find

// Задача 2.
// Создайте новый массив, в который будут входить только значения имен

// const persons = [
//   { name: "John", age: 20 },
//   { name: "Tom", age: 22 },
//   { name: "Bob", age: 21 },
// ];
// let personsName = [];
// for (i=0; i<persons.length; i++ ) {
//     personsName[i] = persons[i].name
// }
// console.log(personsName);

// let personsName2 = persons.map(el => el.name)
// console.log(personsName2);

// Необходимо получить новый массив, в котором будет отсутствовать выбранный элемент
const element = "d1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4";

const arrayExample = [
  "1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33",
  "9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba",
  "c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e",
  "d1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4",
  "e3a9b7d1-4f8b-41a9-a3f1-1e6a9d1c3b2e",
  "f4b1c8d2-5c7a-42e9-9d7b-4c6a5f8e9b7c",
];

let arrayResult = [];
for (i = 0; i < arrayExample.length; i++) {
  if (arrayExample[i] !== element) {
    arrayResult.push(arrayExample[i]);
  }
}
console.log(arrayResult);
