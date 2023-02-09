//recup boutton
const rock = document.getElementById("Pierre");
const scissor = document.getElementById("Ciseaux");
const paper = document.getElementById("Feuille");

//affichage score
let player = document.getElementById("score-joueur");
let ia = document.getElementById("score-IA");

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
        alert("égalité")
    }
    //win
    else if ( player_choice  === 0 && ia_choice === 2
            || player_choice === 1 && ia_choice === 0
            || player_choice === 2 && ia_choice === 1) {
        alert("Gagné, l'IA avait choisit " + ia_choice)
        playerScore++
        player.innerText = "Score joueur = " + playerScore
    }
    //loose
    else if ( player_choice  === 2 && ia_choice === 0
            || player_choice === 0 && ia_choice === 1
            || player_choice === 1 && ia_choice === 2)
    {
        alert("Perdu, l'IA avait choisit " + ia_choice)
        iaScore++
        ia.innerText = "Score IA = " + iaScore;
    }

    if (playerScore === 10) {
        alert("Vous avez gagné la partie");
        playerScore = 0;
        iaScore = 0;
        player.innerText = "Score joueur = " + playerScore
        ia.innerText = "Score IA = " + iaScore;
    } else if ( iaScore === 10) {
        alert("Vous avez perdu contre un Ordinateur");
        iaScore = 0;
        playerScore = 0;
        player.innerText = "Score joueur = " + playerScore
        ia.innerText = "Score IA = " + iaScore;
    }
};
