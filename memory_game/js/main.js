
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

cardOne = cards[2];
cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a Match!');
		} else {
			alert('Sorry, Try Again!');
		}
	}


