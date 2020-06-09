let userName = '';
userName = 'Rachal';

let defaultName = userName || 'stranger';
console.log(`Well hello there ${defaultName}.`)

let userQuestion = `${defaultName}\'s question: Will it ever stop raining in Manchester?`;
console.log(userQuestion);

//generates a random number to select answer from conditional statement. console.log(randomNumber) generates integer between 0-8
const randomNumber = Math.floor(Math.random()*8);

let eightBall
if (randomNumber === 0 || 2 || 3){
 eightBall = 'Never.';
} else if (randomNumber === 3 || 4 || 5){
  eightBall = 'We can hope...';
} else if (randomNumber === 6 || 7){
  eightBall = 'It did once, in 2006.'
}
else {'Just invest in a good umbrella and stop complaining.'
}

console.log(`Eight ball says: ${eightBall}`);
