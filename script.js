// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

  		var scorePlayer1 = 0;
  		var scorePlayer2 = 0;
  		var maxNumberScore = 5;


    	//Definindo o número Máximo para o Score
		document.getElementById("maxNumberScore")
			.addEventListener("change", function() {
				var numberSelected = this.value;
				document.querySelector("#playingToNumber").textContent  = numberSelected;
				maxNumberScore = numberSelected;
			});

		//Icrementar pontuação
		document.getElementById("player1")
			.addEventListener("click", function() {
				if (scorePlayer1 < maxNumberScore) {
					scorePlayer1 += 1;
					document.querySelector("#scorePlayer1").textContent  = scorePlayer1;
					if (scorePlayer1 === maxNumberScore) { 						
						document.querySelector("#scorePlayer1").classList.add("winner");
						document.getElementById("player1")
							.addEventListener("click", function(event){
								event.preventDefault();
							})
					}
				}				  											
			});			

		document.getElementById("player2")
			.addEventListener("click", function() {
				if (scorePlayer2 < maxNumberScore) {
					scorePlayer2 += 1;
					document.querySelector("#scorePlayer2").textContent  = scorePlayer2;
				if (scorePlayer2 === maxNumberScore) { 						
						document.querySelector("#scorePlayer2").classList.add("winner");
					}
				}				
				
			});

		//RESETAR PLACAR
		document.getElementById("reset")
			.addEventListener("click", function() {
			scorePlayer1 = 0;
  			scorePlayer2 = 0;
  			document.querySelectorAll(".winner");
			document.querySelector("#scorePlayer1").textContent  = scorePlayer1;
			document.querySelector("#scorePlayer2").textContent  = scorePlayer2;

			});

		
		// if (scorePlayer1 === maxNumberScore) { 						
		// 	document.querySelector("#scorePlayer1").classList.add("winner");
		// 	document.getElementById("player1")
		// 		.addEventListener("click", function(event) {
		// 			this.preventDefault();
		// 		}
		// }				

	
  }
);