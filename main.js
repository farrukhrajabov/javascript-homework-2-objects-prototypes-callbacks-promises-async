//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function displayFavoriteFoodDishes(person) {
    for (let key in person) {
        let value = person[key];
        if (Array.isArray(value)) {
            console.log(`${key}: ${value.join(", ")}`);
        } else if (typeof value === "object") {
            console.log(`${key}:`);
            for (let shake in value[0]) {
                console.log(`  ${shake}: ${value[0][shake]}`);
            }
        } else {
            console.log(`${key}: ${value}`);
        }
    }
}

displayFavoriteFoodDishes(person3);

  

  //=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  

  
  const person1 = new Person('John', 25);
  const person2 = new Person('Robert', 30);

  Person.prototype.addAge = (years) => {
    this.age += years;
  };
  
  person1.printInfo(); 
  person2.printInfo(); 
  
  person1.addAge(3);
  person2.addAge(3);
  
  person1.printInfo(); 
  person2.printInfo(); 
  

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(string) {
    return new Promise((resolve, reject) => {
      if (string.length > 10) {
        resolve('Big word');
      } else {
        resolve('Small Number');
      }
    });
  }
  
  checkStringLength(`How are you feeling?`)
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });
  
  checkStringLength(`Hi!`)
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });


  