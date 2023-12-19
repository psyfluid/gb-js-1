'use strict';

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randNumbers = [];

for (let i = 0; i < 5; i++) {
  randNumbers.push(Math.floor(Math.random() * 10));
}

console.log(`Array of random numbers: [${randNumbers}]`);

let arrSum = 0;
const arrIndices = [];

randNumbers.forEach((element, index) => {
  arrSum += element;
  if (element === 3) {
    arrIndices.push(index);
  }
});

console.log(`Sum of array: ${arrSum}`);
console.log(`Minimum value of array: ${Math.min(...randNumbers)}`);
console.log(`Array of indices with value '3': [${arrIndices}]`);
