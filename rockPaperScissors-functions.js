const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  console.log(`You chose ${userInput}.`);
} else {
  console.log('there\'s been an error, check your spellerooseys.');
  }
}

const makeComputerChoice = (randomNumber) => {
randomNumber = Math.floor(Math.random()*3);
if (randomNumber === 0){
    console.log('The computer chose ROCK')
  } else if (randomNumber === 1){
    console.log('The computer chose PAPER')
     } else if (randomNumber === 2){
    console.log('The computer chose SCISSORS')
    }else{console.log('error.')}
 }


const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {return console.log('It\'s a tie.')
} if ( userChoice === 'rock'){ if (computerChoice === 'paper') {return console.log('The computer won!')
} else {return console.log('User won!')}
 if ( userChoice === 'paper'){ if (computerChoice === 'scissors') {return console.log('The computer won!')
} else {return console.log('User won!')}
 if ( userChoice === 'scissors'){ if (computerChoice === 'rock') {return console.log('The computer won!')
} else {return console.log('User won!')}
      }
    }
  }
}

const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = makeComputerChoice();
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();
