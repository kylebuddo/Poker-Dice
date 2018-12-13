document.exitFullscreen();

////// get everything
const roll1Btn = document.querySelector('.roll1');
const roll2Btn = document.querySelector('.roll2');
const roll3Btn = document.querySelector('.roll3');
const resetBtn = document.querySelector('.reset');
const newBtn = document.querySelector('.newgame');

const originalDice = document.querySelectorAll('.dice'); // divs with dice class

const allCards = ['nine', 'ten', 'jack','queen', 'king', 'ace'];

// emtpy array to put new cards attached to dice
let roll1Dice = [];
let roll2Dice = [];
let roll3Dice = [];


// go through each original dice and if clicked
originalDice.forEach(dice => dice.addEventListener('click', function(){
	this.classList.toggle('hold'); //toggle the hold class
	this.querySelector('img').classList.toggle('img-hold');
}));


//// first roll function
function firstRoll () {
	originalDice.forEach(function(card) {
		const random = Math.floor(Math.random() * allCards.length);
		roll1Dice.push({dice : card.dataset.num, card: allCards[random]});
	});
	roll1Dice.forEach(function(dice){
		const ranSuit = Math.floor(Math.random() * 4);
		const diceDiv = document.querySelector(`.${dice.dice}`);
		diceDiv.innerHTML = `<img class='card--image' src='imgs/card_${dice.card}${ranSuit}.jpg'>`;

		//disable first roll button, enable second roll and reset
		roll1Btn.disabled = true;
		roll2Btn.disabled = false;
		resetBtn.disabled = false;
	});

};


function secondRoll () {
	originalDice.forEach(dice => {
		if(dice.classList.contains('hold')) {
		} else {
			const random = Math.floor(Math.random() * allCards.length);
			roll2Dice.push({dice : dice.dataset.num, card: allCards[random]});
		}

	});

	roll2Dice.forEach(dice => {
		const ranSuit = Math.floor(Math.random() * 4);
		const diceDiv = document.querySelector(`.${dice.dice}`);
		diceDiv.innerHTML = `<img class='card--image' src='imgs/card_${dice.card}${ranSuit}.jpg'>`;

		//disable first roll button, enable second roll and reset
		roll2Btn.disabled = true;
		roll3Btn.disabled = false;
	});
}

function finalRoll () {

	originalDice.forEach(dice => {
		if(dice.classList.contains('hold')) {
		} else {
			const random = Math.floor(Math.random() * allCards.length);
			roll3Dice.push({dice : dice.dataset.num, card: allCards[random]});
		}
	});

	roll3Dice.forEach(dice => {
		const ranSuit = Math.floor(Math.random() * 4);
		const diceDiv = document.querySelector(`.${dice.dice}`);
		diceDiv.innerHTML = `<img class='card--image' src='imgs/card_${dice.card}${ranSuit}.jpg'>`;
		//disable first roll button, enable second roll and reset
		roll3Btn.disabled = true;
		newBtn.disabled = false;
		resetBtn.disabled = true;
	});

}

function reset(){
	roll1Dice = [];
	roll2Dice = [];
	roll3Dice = [];

	roll1Btn.disabled = false;
	roll2Btn.disabled = true;
	roll3Btn.disabled = true;
	resetBtn.disabled = true;
	newBtn.disabled = true;

	originalDice.forEach(dice => {
		dice.innerHTML = `<img class='card--image' src='imgs/back.jpg'>`;
		if(dice.classList.contains('hold')) {
			dice.classList.remove('hold');
		} else {
		}
	});
}



const buttons = document.querySelectorAll('button');

function checkBtns() {
	buttons.forEach(button => {
		console.log(button.disabled);
		if(button.disabled === true){
			button.style.display = "none";
		} else {
			button.style.display = "block";
		}
	});
}

checkBtns();

buttons.forEach(button => button.addEventListener('click', checkBtns));







