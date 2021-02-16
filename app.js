document.addEventListener('DOMContentLoaded', () => {
	//card options

	const cardArray = [
	{
		name: 'bulbasaur',
		img: 'images/bulbasaur.png'
	},
	{
		name: 'ivysaur',
		img: 'images/ivysaur.png'
	},
	{
		name: 'venusaur',
		img: 'images/venusaur.png'
	},
	{
		name: 'charmander',
		img: 'images/charmander.png'
	},
	{
		name: 'charmeleon',
		img: 'images/charmeleon.png'
	},
	{
		name: 'charizard',
		img: 'images/charizard.png'
	},
	{
		name: 'bulbasaur',
		img: 'images/bulbasaur.png'
	},
	{
		name: 'ivysaur',
		img: 'images/ivysaur.png'
	},
	{
		name: 'venusaur',
		img: 'images/venusaur.png'
	},
	{
		name: 'charmander',
		img: 'images/charmander.png'
	},
	{
		name: 'charmeleon',
		img: 'images/charmeleon.png'
	},
	{
		name: 'charizard',
		img: 'images/charizard.png'
	}

	]
// Fisher Yates shuffle
	function shuffle(array) {
  		var currentIndex = array.length, temporaryValue, randomIndex;
 	 	while (0 !== currentIndex) {
   	 		randomIndex = Math.floor(Math.random() * currentIndex);
   	 		currentIndex -= 1;
   	 		temporaryValue = array[currentIndex];
    		array[currentIndex] = array[randomIndex];
    		array[randomIndex] = temporaryValue;
  		}

 	 	return array;
	}
	shuffle(cardArray)
	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	cardChosen = []
	cardChosenId = []
	cardsWon = []

	//create board
	function createBoard() {
		for( let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/pokeball.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipcard)
			grid.appendChild(card)
		}
	}

	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const cardID1 = cardChosenId[0]
		const cardID2 = cardChosenId[1]
		if( cardChosen[0] === cardChosen[1]){
			alert('You Found a Match')
			cards[cardID1].setAttribute('src' , 'images/magikarp.png')
			cards[cardID2].setAttribute('src' , 'images/magikarp.png')
			cardsWon.push(cardChosen)
		}
		else{
			cards[cardID1].setAttribute('src' , 'images/pokeball.png')
			cards[cardID2].setAttribute('src' , 'images/pokeball.png')
			alert('Try Again')
		}
		cardChosen = []
		cardChosenId =[]
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2){
			resultDisplay.textContent = 'Congratulations , YOU WIN !!!'
		}

	}


	function flipcard(){
		var cardId = this.getAttribute('data-id')
		cardChosen.push(cardArray[cardId].name)
		cardChosenId.push(cardId)
		this.setAttribute('src',cardArray[cardId].img)
		if(cardChosen.length == 2){
			setTimeout(checkForMatch, 500)
		}
	}


	createBoard()
})