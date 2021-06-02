function  createPlayer(type, name, live){
	const $player=document.createElement('div');
	$player.name= name;
	$player.hp= 10;
	$player.lives= live;
	$player.weapon= ['pistol', 'knife', 'bazooka'];

	$player.classList.add('player1');
	const $progressbar=document.createElement('div');
	$progressbar.classList.add('progressbar');
	$player.appendChild($progressbar);

	const $character=document.createElement('div');
	$character.classList.add('character');
	$player.appendChild($character);

	const $live=document.createElement('div');
	$live.classList.add('life');
	$live.innerText=live;
	const $name=document.createElement('div');
	$name.classList.add('name');
	$name.innerText=name;
	$progressbar.appendChild($live);
	$progressbar.appendChild($name);

	const $img=document.createElement('img');
	if(type==='Player2'){ $img.src='http://reactmarathon-api.herokuapp.com/assets/liukang.gif';} 
	else {$img.src='http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';}
	$character.appendChild($img);

	$player.addEventListener('click', function(){
		console.log($player.name + ', Fight!');
	})

const $arena=document.querySelector('.arenas');	
	$arena.appendChild($player);		
}


	createPlayer('Player1', 'Scorpion', 100);
	createPlayer('Player2', 'Liukang', 50);
	
