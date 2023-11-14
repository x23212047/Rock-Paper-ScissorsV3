let wins=0; //track of users wins
let gamesPlayed=0;//track the games played
let userGuesses = []; //array to store user guesses

//generate computer choice and call game result
function playGame(playerChoice){
    
    if(wins===3){
        //logical opertor to check if the user has won three times
        document.getElementById("result").textContent="You've won three times in a row!";
        //exit the function to stop the game
        return;
    }
    
    const computerChoice=["rock","paper","scissors"][Math.floor(Math.random()*3)];
    const result=getGameResult(playerChoice,computerChoice);

    //user guesses
    userGuesses.push(`You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`);
    
    //check if the player has won three times in a row
    if(result==="You win!"){
        wins++;
    }else{
        wins=0;
    }

    //go up in ones for games to be played
    gamesPlayed++;

    //game result to the user
    document.getElementById("result").textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;

    //check if game has been played 5 times
    if (gamesPlayed===5){
        displayUserGuesses();
        }
    }

    //display user guesses when the game is played 5 times
function displayUserGuesses(){
    //set the HTML element
    document.getElementById("result").textContent = "You've played 5 times. Here are your guesses:\n"+userGuesses.join("\n");
}

//calculate the game result based on choices
function getGameResult(playerChoice, computerChoice){
    //check if player and computer choice is the same
    if(playerChoice===computerChoice){
        return "It's a tie!";
    }else if(
        //check if player wins according to game rules
        (playerChoice==="rock"&&computerChoice==="scissors")||
        (playerChoice==="paper"&&computerChoice==="rock")||
        (playerChoice==="scissors"&&computerChoice==="paper"))
    {
        return "You win!";
    }else{
        //if none of the conditions are met computer wins
        return "Computer wins!";
    }
}
