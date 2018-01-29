// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

  		//Iniciando
  		var scorePlayer1 = 0;
  		var scorePlayer2 = 0;
  		var maxNumberScore = 5;
  		var winner = "";



if (scorePlayer1 !== maxNumberScore && scorePlayer2 !== maxNumberScore){

    	//Definindo o número Máximo para o Score - OK
		document.getElementById("maxNumberScore")
			.addEventListener("change", function() {
				var numberSelected = this.value;
				document.querySelector("#playingToNumber").textContent  = numberSelected;
				maxNumberScore = numberSelected;
			});
}


		//Icrementar pontuação
		document.getElementById("player1")
			.addEventListener("click", function(event) {
				
					if (scorePlayer1 < maxNumberScore) {
						scorePlayer1 += 1;
						document.querySelector("#scorePlayer1").textContent  = scorePlayer1;
					}	
					if (scorePlayer1 === maxNumberScore) {
						winner = "Player1";
						document.querySelector("#" + "score" + winner).classList.add("winner");
						document.querySelector("#winner").textContent = "Player 1 Won!";
						document.querySelector("h4").textContent = "Click on Reset Button to start a new game."						
					}
								  											
			});			

		document.getElementById("player2")
			.addEventListener("click", function() {
					if (scorePlayer2 < maxNumberScore) {
						scorePlayer2 += 1;				
						document.querySelector("#scorePlayer2").textContent  = scorePlayer2;
					}
					if (scorePlayer2 === maxNumberScore) {
						winner = "Player2";
						document.querySelector("#" + "score" + winner).classList.add("winner");				
						document.querySelector("#scorePlayer2").classList.add("winner");
						document.querySelector("#winner").textContent = "Player 2 Won!";
						document.querySelector("h4").textContent = "Click on Reset Button to start a new game."
					}		
				
			});

// }
		//RESETAR PLACAR
		document.getElementById("reset")
			.addEventListener("click", function() {
			scorePlayer1 = 0;
  			scorePlayer2 = 0;
  			document.querySelector("#" + "score" + winner).classList.remove("winner");
			document.querySelector("#scorePlayer1").textContent  = scorePlayer1;
			document.querySelector("#scorePlayer2").textContent  = scorePlayer2;
			document.querySelector("#winner").textContent = "";	
			document.querySelector("h4").textContent = "";

			});


	
  }
);