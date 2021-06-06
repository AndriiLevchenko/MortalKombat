const $arenas=document.querySelector('.arenas');	
const $randomButton=document.querySelector('.button');
const player1={
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	attack: function (name){
		console.log(name + ' Fight ...');
	}
}
const player2={
	player: 2,
	name: 'Liu Kang',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	attack: function (name){
		console.log(name + ' Fight ...');
	}
}
function createElement(tag, className){
	const $tag=document.createElement(tag);
	$tag.classList.add(className);
	return $tag;
}


function  createPlayer(playerObj){
	const $player=createElement('div', 'player' + playerObj.player);
	const $progressbar=createElement('div','progressbar');
	const $character=createElement('div', 'character');
	const $life=createElement('div', 'life');
	const $name=createElement('div', 'name');
	const $img=createElement('img');

	$life.style.width=playerObj.hp + '%';
	$name.innerText=playerObj.name;
	$img.src=playerObj.img;

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$player.appendChild($progressbar);
	$player.appendChild($character);
	$character.appendChild($img);

	return $player;
}
	function changeHP(player){
		const $playerLife=document.querySelector('.player' + player.player +  ' .life');
		player.hp -=Math.floor(Math.random()*21);
		$playerLife.style.width= player.hp + '%';
		console.log('player in changeHP= ', player, 'hp = ', player.hp);
		if(player.hp < 0){
			$playerLife.style.width= 0;
			$randomButton.disabled= true;
			const playerWinner= player.player === 1 ? player2 : player1;
			console.log('player.name= ', player.name, player.player, 'playerWinner = ', playerWinner);
			$arenas.appendChild(playerWin(playerWinner.name));
		}
	}
	function playerWin(name){
		const $loseTitle= createElement('div', 'loseTitle');
		$loseTitle.innerText= name + ' won!';
		return $loseTitle;
	}
	$randomButton.addEventListener('click', function(){
		console.log('dyfneht Afqn');
		changeHP(player1);
		changeHP(player2);
	})

	$arenas.appendChild(createPlayer(player1));
	$arenas.appendChild(createPlayer(player2));
	
