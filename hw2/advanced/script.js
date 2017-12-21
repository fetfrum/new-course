/*
  Пользователь через prompt вводит число участников группы.
  Необходимо проверить является ли введенные данные целым
  положительным числом. Вывести alert в случае ошибочного ввода.

  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6

  Если количество мест позволяет, то вывести пользователю
  сообщение через confirm что есть место в группе такой-то,
  согласен ли пользоваетель быть в этой группе?

  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.

  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/

let numTourist,
	resorts = [  {id: 1, name: 'Шарм-эш-Шейх', availableSeats: 15 },
				{id: 2, name: 'Хугарда', availableSeats: 25 } ,
			  	{id: 3, name: 'Таба', availableSeats: 6 } ],
	totalAvailableSeats;



numTourist = prompt (`Введите количество туристов в группе`);
if ( resorts.every((resort)=>{
	return (resort.availableSeats<numTourist) ;
})){
	alert ("Мест нет");
} else {
	resorts.some((resort)=>{
		if (resort.availableSeats>=numTourist){
			let confirmChecout;
			confirmChecout = (confirm (`Хотите преобрести билеты для группы из ${numTourist} в ${resort.name}?`));
			if (confirmChecout) resort.availableSeats = resort.availableSeats - numTourist;
			return confirmChecout;
		}
	})
}

console.log (resorts);
