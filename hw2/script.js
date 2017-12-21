/*
   Есть три курорта: taba, sharm или hurgada.

   Необходимо через prompt попросить ввести число, от 1 до 3-х.

   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.

   После этого вывести сообщение о том, что пользователь
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/



let resort = { 'taba':    {id: 1, name: 'Таба'} ,
			   'sharm':   {id: 2, name: 'Шарм-эш-Шейх'},
			   'hugarda': {id: 3, name: 'Хугарда'} },
	choiceOfResort,
	out;

choiceOfResort = prompt (`Сделайте выбор курорта, введя его номер
${resort.taba.name} — ${resort.taba.id};
${resort.sharm.name} — ${resort.sharm.id};
${resort.hugarda.name} — ${resort.hugarda.id};
		`);
switch (choiceOfResort){
	case '1': out = `Вы выбрали ${resort.taba.name}`; break;
	case '2': out = `Вы выбрали ${resort.sharm.name}`; break;
	case '3': out = `Вы выбрали ${resort.hugarda.name}`; break;
	default: out = 'Вы ввели ошибочное значение номера курорта';
}
alert (out);
