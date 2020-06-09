let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = false;
let runnerAge = 20;

//if statement to decide on race number. Over 18 early participants + 1 000
if(registerEarly && runnerAge > 18){
  raceNumber = raceNumber + 1000};

//if statement to decide what time the participant is running the rance
if (registerEarly && runnerAge > 18){
  console.log(`Your race starts at 9:30. Your race number is ${raceNumber}. Goodluck!`);
}else if (!registerEarly && runnerAge > 18){
  console.log(`Your race starts at 11:00. Your race number is ${raceNumber}. Goodluck!`);
}else if (runnerAge <= 18){
  console.log(`Your race starts at 12:30. Your race number is ${raceNumber}. Goodluck!`);
} else {
  console.log('Sorry there\'s been an error.');
};
