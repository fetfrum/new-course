/*

Массив строк клавиатуры из прошлого модуля преобразовать в объект keyboard следующего формата.
поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры
поле langs содержит массив доступных языков
поле currentLang будет содержать язык который сейчас выбран

*/
const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};
/*

Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере. Это обычный prompt в котором написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel. При cancel прекратить выполнение скрипта.

Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.

Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.

*/

// Алфавиты
const ALPHABETS ={
	"en": "qwertyuiop[]asdfghjkl;'\\zxcvbnm,./",
	"ru": "йцукенгшщзхъфывапролджэ\\ячсмитьбю.",
	"ua": "йцукенгшщзхїфівапролджєґячсмитьбю."
};

// Генерация случайного числа
let random = (min, max) => Math.floor( min + Math.random() * (max + 1 - min));

// Заполнение объекта алфавитами
function feelKeyboard(layouts, alphabets ) {
	let addLayout = (alphabet)=>{
		let keys = {};
			keys.topRow=alphabet.slice (0,12).split('');
			keys.middleRow=alphabet.slice (12,24).split('');
			keys.bottomRow=alphabet.slice (24).split('');
		return keys;
	};
	Object.keys (alphabets).map((lang)=>{
		layouts[lang] = addLayout(alphabets[lang]);
	});
	return layouts;
}

// Получение случайной буквы в ряду
let getRandCharInRow = (row, keyboardLayout)=>keyboardLayout[row][random(0, keyboardLayout[row].length-1)];

// Получение случайной буквы из объекта алфавита
let getRandCharInAlph = (keyboardLayout) => {
	let curLine = Object.keys (keyboardLayout);
	return getRandCharInRow (curLine [random (0, curLine.length - 1)], keyboardLayout);
}

// Заполняем алфавиты
keyboard.layouts = feelKeyboard (keyboard.layouts, ALPHABETS);

// Получаем от пользователя значение текущего языка
keyboard.currentLang = keyboard.langs [prompt ( Object.keys(keyboard.layouts).map((lang, index)=>lang=` ${lang}: ${index}`) )];


console.log (getRandCharInAlph(keyboard.layouts[keyboard.currentLang]))
