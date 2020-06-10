const getSleepHours = (day) => {
if (day === 'monday'){
  return 5
} else if (day === 'tuesday'){
  return 6
} else if (day === 'wednesday'){
  return 7
}else if (day === 'thursday'){
  return 8
}else if (day === 'friday'){
  return 8
}else if (day === 'saturday'){
  return 9
}else if (day === 'sunday'){
  return 5
} else {
  return 'check your spelling'
}
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours *7;
};

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('Good job doing a sleep')
} else if (actualSleepHours > idealSleepHours) {
  console.log('you lazy, but I\'m still proud')
} else if (actualSleepHours < idealSleepHours) {
  console.log('go to bed now')
} else {
  console.log('something went wrong')
}
}

console.log(`You slept for ${getActualSleepHours()} hours a week, but you need to sleep for ${getIdealSleepHours()} so...`)
calculateSleepDebt();
