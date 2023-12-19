'use strict';

/*
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что
значение задано неверно
Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль
текст "Размер заработной платы за вычетом налогов равен значение"
*/

/**
 * Convert gross salary to net salary (gross - 13%)
 * @param {number} salary gross salary
 * @returns {number} net salary
 */
const getNetSalary = function convertGrossSalaryToNetSalary(salary) {
  return Math.round(salary * 0.87 * 100) / 100;
};

const grossSalary = +prompt('Введите размер заработной платы до вычета налога');

if (Number.isFinite(grossSalary) && grossSalary > 0) {
  console.log(`Размер заработной платы за вычетом налогов равен ${getNetSalary(grossSalary)}`);
} else {
  console.log('Значение задано неверно');
}
