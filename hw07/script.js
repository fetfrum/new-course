echo= (str)=>console.log(str);

/*
Визуализируем клавиатуру.

Написать метод createLayout() который создает клавиатуру состоящую из 3-х строк, в каждой строке такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
Можно использовать либо createElement либо создавать строку из тегов и вешать через insertAdjacentHTML или innerHTML.
Добавить минимальное оформление на свой вкус.
*/

function Keyboard(){
	let keys = {
		topRow: '',
		middleRow: '',
		bottomRow: ''
	},
		out="";
	this.createLayout = (alphabet)=>{
		alphabet.slice (0,12).split('').forEach((char, index)=>keys.topRow += createKey(char));
		alphabet.slice (12,24).split('').forEach((char, index)=>keys.middleRow += createKey(char));
		alphabet.slice (24).split('').forEach((char, index)=>keys.bottomRow += createKey(char));
		out +=`<div class="topRow">${keys.topRow}</div>`
		out +=`<div class="middleRow">${keys.middleRow}</div>`
		out +=`<div class="bottomRow">${keys.bottomRow}</div>`
		out = `<div class="keyboard">${out}</div>`
	}

	let createKey = (key) =>`<div class="key">${key}</div>`;
	this.render=(id)=>document.getElementById(id).innerHTML=out;
}

let keyboardEn = new Keyboard();
keyboardEn.createLayout("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./")
keyboardEn.render("en");

let keyboardRu = new Keyboard();
keyboardRu.createLayout("йцукенгшщзхъфывапролджэ\\ячсмитьбю.")
keyboardRu.render("ru");

let keyboardUA = new Keyboard();
keyboardUA.createLayout("йцукенгшщзхїфівапролджєґячсмитьбю.")
keyboardUA.render("uk");
