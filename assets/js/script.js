const board = [
	'',
	'O',
	'',
	'',
	'',
	'',
	'X',
	'',
	'',
];
var cases = document.getElementsByClassName('cases')
var turnO = true



for (let i = 0; i < cases.length; i++) {
	cases[i].addEventListener('click', function () {
	
	if (turnO == true) {
		
		cases[i].textContent = 'X'
		turnO = false
	}else {
		cases[i].textContent = 'O'
		turnO = true
	}
	checkWin();
	
})
}

function checkWin() {
	// tableau en 2 dimension qui contient l'integralité des combinaisons gagnantes
	const combinaison = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < combinaison.length; i++) {
		if (cases[combinaison[i][0]].textContent != ''
		&& cases[combinaison[i][1]].textContent == cases[combinaison[i][0]].textContent
		&& cases[combinaison[i][2]].textContent == cases[combinaison[i][0]].textContent) {
			alert('les ' + (turnO ? 'O' : 'X') + ' ont gagné');
			
			finish = true;
			
			break;
		}
	}
}

document.getElementById('new-game').addEventListener('click', () => {
	for (let i = 0; i < cases.length; i++) {
		cases[i].textContent = '';
		finish = false;
		turnO = true;
	}
})





























/*
const cases = document.querySelectorAll('.cases');

// Variable pour suivre l'état du jeu
let gameWon = false;
let currentPlayer = 'X'; // Définissez le joueur actuel

// Fonction qui vérifie si un joueur a gagné
function checkWin() {
	// Mettez en place vos propres conditions de victoire ici.
	// Exemple : Si les 3 premières cases sont remplies, le joueur gagne.
	if (
		(cases[0].textContent === currentPlayer && cases[1].textContent === currentPlayer && cases[2].textContent === currentPlayer) ||
		(cases[3].textContent === currentPlayer && cases[4].textContent === currentPlayer && cases[5].textContent === currentPlayer) ||
		(cases[6].textContent === currentPlayer && cases[7].textContent === currentPlayer && cases[8].textContent === currentPlayer) ||
		// Ajoutez d'autres conditions pour les lignes et colonnes
		// ...
		// Exemple : Si les 3 premières cases sont remplies en diagonale, le joueur gagne.
		(cases[0].textContent === currentPlayer && cases[4].textContent === currentPlayer && cases[8].textContent === currentPlayer) ||
		(cases[2].textContent === currentPlayer && cases[4].textContent === currentPlayer && cases[6].textContent === currentPlayer)
	) {
		gameWon = true;
		alert(`Joueur ${currentPlayer} a gagné!`);
	}
}

// Écoutez les événements de clic sur les cases
cases.forEach((caseElement) => {
	caseElement.addEventListener('click', () => {
		// Vérifiez si la case est déjà remplie
		if (!gameWon && caseElement.textContent === '') {
			caseElement.textContent = currentPlayer;
			checkWin();
			// Alternez entre les joueurs
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});

// Réinitialise le jeu lorsque le bouton "Nouvelle partie" est cliqué
const newGameButton = document.getElementById('new-game');
newGameButton.addEventListener('click', () => {
	cases.forEach((caseElement) => {
		caseElement.textContent = '';
	});
	gameWon = false;
	currentPlayer = 'X';
});
*/

