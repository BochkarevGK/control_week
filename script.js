//================================================================================================

function srznach(nums) 
{
	if(Array.isArray(nums)) {
		let num = nums.reduce((a, b) => (a + b)) / nums.length;
		return num.toFixed(1);
	}
}

//================================================================================================   

$.get( "http://217.71.129.139:4003/students.php", function(data) {		
let tabs = document.querySelector('.tabs');

//================================================================================================
			
let response = JSON.parse(data).response;
let groups = {};
let blocks = [];

//================================================================================================		

response.forEach((item) => 
{
	let group = item['group'] ?? 'Нет группы';
	groups[group] = groups[group] ?? [];
	groups[group].push(item);
});

//================================================================================================

let zagolovok = document.createElement('ul');
let counter = 1;

//================================================================================================

for (const group in groups) 
{
	zagolovok.innerHTML += '<li><a href="#tabs-' + counter + '">' + group + '</a></li>';
	let block = document.createElement('div');
	block.setAttribute('id', 'tabs-' + counter);
	let table = document.createElement('table');
	table.innerHTML = '<tr><td>ID</td><td>Фамилия</td><td>Имя</td><td>Средняя оценка</td></tr>';

	//============================================================================================
	
	table.insertAdjacentHTML('beforeend', groups[group].map((item) => 
	{
		return '<tr><td>' + item.id + '</td><td>' + item.surname + '</td><td>' + item.name + '</td><td>' + srznach(item.scores) + '</td></tr>';
	}).join(''));
	
	//============================================================================================
	
	block.append(table);
	blocks.push(block);
	counter++;
}

//================================================================================================

			tabs.append(zagolovok);
			tabs.append(...blocks);
			$(tabs).tabs();
	});
	
//================================================================================================