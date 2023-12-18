'use strict';

/*
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая
определяет максимальное значение среди этих чисел
*/

/**
 * Find the maximum of three numbers
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @param {number} num3 third number
 * @returns {number} maximum number
 */
const findMax = function findMaximumOfThreeNumbers(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
};

const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');

if (Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c)) {
  console.log(`Максимальное число из [${a}, ${b}, ${c}]: ${findMax(a, b, c)}`);
} else {
  console.log('Введены некорректные данные');
}
