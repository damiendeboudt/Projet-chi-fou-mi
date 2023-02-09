const rock = document.getElementById("Pierre");
const scissor = document.getElementById("Ciseaux");
const paper = document.getElementById("Feuille");

//screen score
let player = document.getElementById("score-joueur");
let ia = document.getElementById("score-IA");
let roundResult = document.getElementById("round-result");

//Player score and IA score = 0
let playerScore = 0;
playerScore.toString()
let iaScore = 0;
iaScore.toString()

rock.addEventListener("click", ()=> {
game(0)
})
paper.addEventListener("click",()=> {
    game(1)
})
scissor.addEventListener("click", ()=> {
game(2)
})


//function with parameter
let game = (player_choice) => {
    ia_choice = Math.floor(Math.random() * 3)

    //egalité
    if(player_choice === ia_choice) {
        roundResult.innerText = "Egalité"
        roundResult.style.color = "black"
    }
    //win
    else if ( player_choice  === 0 && ia_choice === 2
            || player_choice === 1 && ia_choice === 0
            || player_choice === 2 && ia_choice === 1) {
        if (ia_choice === 0) {
            roundResult.innerText = "Gagné, l'IA avait choisit Pierre"
            roundResult.style.color = "green"
            playerScore++
            player.innerText = "Score joueur = " + playerScore;
        } else if (ia_choice === 1) {
            roundResult.innerText = "Gagné, l'IA avait choisit Feuille"
            roundResult.style.color = "green"
            playerScore++
            playerScore.innerText = "Score joueur = " + playerScore;
        } else {
            roundResult.innerText = "Gagné, l'IA avait choisit Ciseaux"
            roundResult.style.color = "green"
            playerScore++
            player.innerText = "Score joueur = " + playerScore;
        }
    }

    //loose
    else if ( player_choice  === 2 && ia_choice === 0
            || player_choice === 0 && ia_choice === 1
            || player_choice === 1 && ia_choice === 2) {
                if (ia_choice === 0) {
                    roundResult.innerText = "Perdu, l'IA avait choisit Pierre"
                    roundResult.style.color = "red"
                    iaScore++
                    ia.innerText = "Score IA = " + iaScore;
                } else if (ia_choice === 1) {
                    iaScore++
                    ia.innerText = "Score IA = " + iaScore;
                    roundResult.innerText = "Perdu, l'IA avait choisit Feuille"
                    roundResult.style.color = "red"
                } else {
                    iaScore++
                    ia.innerText = "Score IA = " + iaScore;
                    roundResult.innerText = "Perdu, l'IA avait choisit Ciseaux"
                    roundResult.style.color = "red"
                }

    }

    if (playerScore === 10) {
        alert("Vous avez gagné la partie");
        playerScore = 0;
        iaScore = 0;
        player.innerText = "Score joueur = " + playerScore
        ia.innerText = "Score IA = " + iaScore;
        roundResult.innerText = ""
    } else if ( iaScore === 10) {
        alert("Vous avez perdu contre un Ordinateur");
        iaScore = 0;
        playerScore = 0;
        player.innerText = "Score joueur = "
        ia.innerText = "Score IA = "
        roundResult.innerText = ""
    }
};
