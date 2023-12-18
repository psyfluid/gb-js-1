'use strict';

/*
Создайте функцию которая возводит переданное число в куб, необходимо вывести в
консоль результат 2^3 степени + 3 ^ 3 степени
*/

/**
 * Calculate third power of input number
 * @param {number} num original number
 * @returns {number} third power of number
 */
const getPow3 = function calculateThirdPowerOfNumber(num) {
    return num ** 3;
};

console.log(getPow3(2) + getPow3(3));
