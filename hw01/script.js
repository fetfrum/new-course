//Создать три const - строки, содержащие символы клавиатуры верхнего, среднего и нижнего ряда английского языка. Например для верхнего ряда русской раскладки строка будет выглядеть 'йцукенгшщзхъ'.

const 	STR1 = 'qwertyuiop[]',
		STR2 = "asdfghjkl;'\\",
		STR3 = 'zxcvbghnm,./';

//Создать три const переменные с числом, содержащим длинну строк, полученных ранее.
let    	str1Lenght = STR1.length,
	 	str2Lenght = STR2.length,
		str3Lenght = STR3.length,
//Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк, используйте имеющиеся константы.
		firstCharSTR1 = STR1.charAt(0),
		lastCharSTR1  = STR1.charAt(STR1.length-1),
		firstCharSTR2 = STR2.charAt(0),
		lastCharSTR2  = STR2.charAt(STR2.length-1),
		firstCharSTR3 = STR3.charAt(0),
		lastCharSTR3  = STR3.charAt(STR3.length-1),
//Сделайте поиск позиции для символов [ и ] с помощью indexOf и сохраните результат в переменных.
		posOpenBrecket  = STR1.indexOf('['),
		posCloseBrecket = STR1.indexOf(']');

//Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения за один console.log.

console.log (`String STR1 = ${STR1}
String STR2 = ${STR2}
String STR3 = ${STR3}

Lenght of STR1 = ${str1Lenght};
Lenght of STR2 = ${str2Lenght};
Lenght of STR3 = ${str3Lenght};

First Char of STR1 = ${firstCharSTR1};
Last  Char of STR1 = ${lastCharSTR1};
First Char of STR2 = ${firstCharSTR2};
Last  Char of STR2 = ${lastCharSTR2};
First Char of STR3 = ${firstCharSTR3};
Last  Char of STR3 = ${lastCharSTR3};

Position of open  square bracket: ${posOpenBrecket}
Position of close square bracket: ${posCloseBrecket}

`);
