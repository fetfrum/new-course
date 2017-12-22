//Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.
//
//Массив keyboard будет иметь такую струтуру: [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].
//
//const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
//Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:
//
//hello
//javascript
//trainer

// Keycodes:
// 01234567890
// qwertyuiop[]
// asdfghjkl;'
// zxcvbnm,./
const ALPHABET  = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [
			 ALPHABET.slice (0,12),
			 ALPHABET.slice (12,23),
			 ALPHABET.slice (23)
		   ];
	hello = [
			[1, 5],
			[0, 2],
			[1, 8],
			[1, 8],
			[0, 8]],
	javascript 	= [
			[1, 6],
			[1, 0],
			[2, 3],
			[1, 0],
			[1, 1],
			[2, 2],
			[0, 3],
			[0, 7],
			[0, 9],
			[0, 4]],
	trainer	= [
			[0, 4],
			[0, 3],
			[1, 0],
			[0, 7],
			[2, 5],
			[0, 2],
			[0, 3]
	];
console.log (keycodeToString(hello, keyboard));



function keycodeToString(arr, keyboard){
	return arr.reduce((line, curChar )=>{
		 return line + keyboard[curChar[0]][curChar[1]] ;
	}, '');
}

console.log (keycodeToString(hello, keyboard));
console.log (keycodeToString(javascript, keyboard));
console.log (keycodeToString(trainer, keyboard));
