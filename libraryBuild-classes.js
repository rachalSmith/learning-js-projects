class Media {
  constructor(title){
   this._title = title;
   this._isCheckedOut = false;
   this._rating = [];
  }
  get title() {return this._title;}
  get isCheckedOut() {return this._isCheckedOut;}
  get rating() {return this._rating;}

set isCheckedOutSet(value) {
  this._isCheckedOut = value;}

 toggleCheckOutStatus () {
this.isCheckedOutSet = !this.isCheckedOutSet;
 }
getAverageRating(){
   let ratingSum =
   this.rating.reduce((accumulator, rating) =>
   accumulator + rating);
   return ratingSum / this.rating.length
 }
 addRating(value){
   this.rating.push(value);
 }
}

class Book extends Media {
constructor (author, title, pages) {
super(title);
this._author = author;
this._pages = pages;
}
get author() {return this._author;}
get pages() {return this._pages;}
}

class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {return this._director;}
  get runTime() {return this._runTime;}
}

const historyOfEverything = new Book ('B. Bryson', 'A Short History of Nearly Everything', 554);


//historyOfEverything.toggleCheckOutStatus();console.log(historyOfEverything)

historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(4);

console.log(speed.getAverageRating());
