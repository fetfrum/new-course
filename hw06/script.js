/*
Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив символов алфавита.
chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
Добавьте свойство charCount и метод setCharCount. Метод делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.
Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом. Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).
Создайте свойство task и метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами из массива chars.
Создайте метод startTask, который с помощью prompt выводит строку из массива task и просит набрать эту строку в этом же prompt сообщении.
Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput и task посимвольно. Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.
Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.
Все свойства и методы должны быть внутри одного объекта keyTrainer, но вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию.
*/

// Генерация случайного числа
let random = (min, max) => Math.floor( min + Math.random() * (max + 1 - min));


function Trainer(){

	let task = [],
		charCount,
		userInput = [],
		userErrors=0,
		chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
	let setCharCount =()=> {
		while (!checkPositiveInteger(charCount)){
			charCount = prompt ("Сколько символов вы хотите набрать?")
		}
	}
	let createTask=(len)=>{
		while(task.length < +charCount){
			task.push(chars[random(0, chars.length - 1)])
		}
	}

	let startTask =()=>{
		userInput = prompt (task)
		if (userInput.length) {userInput=userInput.split('');
			userInput.forEach((char, index)=>{(char!==task[index])?userErrors++:userErrors})
			if (userInput.length<task.length) userErrors = userErrors + task.length - userInput.length;
		}else userErrors=task.length;
		userErrors?console.warn(`Количество допущенных ошибок: ${userErrors}.\n Желаем успехов в последующих попытках!`):console.info("Поздравляем, вы отлично справились с заданием!");
	}
	let checkPositiveInteger=(int)=>int>0 && Number.isInteger(+int);
	this.run=()=>{
		setCharCount();
		createTask ();
		startTask();
	}
}

let keyTrainer = new Trainer;
keyTrainer.run();
