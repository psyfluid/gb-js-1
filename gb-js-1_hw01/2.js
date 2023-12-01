"use strict";

/*
Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.
*/

function show_admin_console(admin) {
    console.log(`admin = ${admin}`);
}

const username = prompt("Введите ваше имя:");
const admin = username;

show_admin_console(admin);
