'use strict';

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять
одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций
могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа
равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

/**
 * Calculates the sum of two numbers.
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @return {number} the sum of two numbers
 */
const sum = function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
};

/**
 * Calculates the difference of two numbers.
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @returns {number} the difference of two numbers
 */
const diff = function differenceOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
};

/**
 * Calculates the product of two numbers.
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @returns {number} the product of two numbers
 */
const mul = function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
};

/**
 * Divides two numbers.
 * @param {number} num1 first number
 * @param {number} num2 second number
 * @returns {number} the result of dividing num1 by num2
 */
const div = function divideTwoNumbers(num1, num2) {
  return num1 / num2;
};

const n1 = +prompt('Введите первое число');
const n2 = +prompt('Введите второе число');

if (Number.isFinite(n1) && Number.isFinite(n2)) {
  console.log(`Сумма двух чисел ${n1} и ${n2} равна ${sum(n1, n2)}`);
  console.log(`Разность двух чисел ${n1} и ${n2} равна ${diff(n1, n2)}`);
  console.log(`Произведение двух чисел ${n1} и ${n2} равно ${mul(n1, n2)}`);
  console.log(`Частное двух чисел ${n1} и ${n2} равно ${div(n1, n2)}`);
} else {
  console.log('Введены некорректные данные');
}
