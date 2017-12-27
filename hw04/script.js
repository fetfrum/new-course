//Модуль 4 - Домашнее задание
//Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая
//на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.
//
//Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.
//
//Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

const ALPHABET  = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let addKeyboardLayout = (alphabet)=>[ALPHABET.slice (0,12),ALPHABET.slice (12,23),ALPHABET.slice (23)];
let random = (min, max) => Math.floor( min + Math.random() * (max + 1 - min));
let getRandCharInRow = (row, keyboardLayout)=>keyboardLayout[row][random(0, keyboardLayout[row].length-1)];
let getRandCharInAlph = (keyboardLayout) =>getRandCharInRow (random(0, keyboardLayout.length - 1), keyboardLayout);

let keyboardLayout = addKeyboardLayout(ALPHABET);
console.log (getRandCharInRow(2, keyboardLayout));
console.log (getRandCharInAlph(keyboardLayout));

