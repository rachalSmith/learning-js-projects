class School {
  constructor (name, level, numberOfStudents){
  this._name = name;
  this._level = level;
  this._numberOfStudents = numberOfStudents;
     }

  get name() {
    return this._name;}
  get level() {
    return this._level;}
  get numberOfStudents () {
    return this._numberOfStudents;}

set numberOfStudents(value){
  if (value.isNaN()){
console.log('Invalid input: numberOfStudents must be set to a Number.')
  } else {
this._numberOfStudents = value
    }
  }

quickFacts(){
  console.log(`${this.name} ${this.level} school educakes ${this.numberOfStudents} pupils`)
      }

static pickSubstituteTeacher(subTeacher){
const randomNumber = Math.floor(Math.random() * subTeacher.length);
return console.log(`${subTeacher[randomNumber]} will be your substituteTeacher for today.`)
      }
  }

class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickupPolicy) {
    super (name, 'Primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

get pickupPolicy() {return this._pickupPolicy;}
}

class HighSchool extends School {
constructor (name, numberOfStudents, sportsTeams){
  super (name, 'High', numberOfStudents);
  this._sportsTeams = [];
    }
get sportsTeams(){return this._sportsTeams}
}

const PriSch1 = new PrimarySchool ('PriSch1', 500, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

PriSch1.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
