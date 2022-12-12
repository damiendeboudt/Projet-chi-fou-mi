//recup boutton
const stones = document.getElementById("Pierre");
const cisors = document.getElementById("Ciseaux");
const paper = document.getElementById("Feuille");

//affichage score
let player = document.getElementById("score-joueur");
let ia = document.getElementById("score-IA");

//variable score à ++ suivant result
let playerScore = 0;
playerScore.toString()
let iaScore = 0;
iaScore.toString()

stones.addEventListener("click", ()=> {
game(0)
})
cisors.addEventListener("click", ()=> {
game(2)
})
paper.addEventListener("click",()=> {
  game(1)
})

//fonction avec paramètre
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
        ia.innerText = "Score IA = " + iaScore
    }
};
