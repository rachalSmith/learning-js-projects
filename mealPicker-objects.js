const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
get appetizers1 () {return this._courses.appetizers;
},
get mains1 () {return this._courses.mains;
},
get desserts1 () {return this._courses.desserts;
},
set appetizers2 (appetizers) {
  this._courses.appetizers = appetizers;
  },
set mains2 (mains) {
  this._courses.mains = mains;
  },
set desserts2 (desserts) {
  this._courses.desserts = desserts;
   },
get _courses1 () {
return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
   }
  },

addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
  return this._courses[courseName].push(dish)
    },

getRandomDishFromCourse(courseName) {
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
    },

generateRandomMeal () {
const appetizers = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
  return `Your meal is ${appetizers.name}, ${mains.name} and ${desserts.name}. The price of your meal is £${totalPrice}.`;
      }
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 5.00);
menu.addDishToCourse('appetizers', 'prawns', 6.00);
menu.addDishToCourse('appetizers', 'Calamari', 7.00);

menu.addDishToCourse('mains', 'Large Ceasar Salad', 10.00);
menu.addDishToCourse('mains', 'Roast dinner', 11.00);
menu.addDishToCourse('mains', 'Duck', 15.00);

menu.addDishToCourse('desserts', 'Ice cream', 4.00);
menu.addDishToCourse('desserts', 'Chocolate', 4.50);
menu.addDishToCourse('desserts', 'just a pile of sugar', 2.50);

let meal = menu.generateRandomMeal();

console.log(meal);
