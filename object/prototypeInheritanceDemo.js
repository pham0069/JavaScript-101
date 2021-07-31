/**
 * Make bird inherit from animal by assigning its proto to animal
 */
var animal = {
    legs: 4,
    walk: function() {
        console.log('Walking on ', this.legs, 'legs');
    },
    sleep: function() {
        console.log('Sleep sleep');
    },
    eat: function() {
        console.log('Eating');
    }
}

var bird = {
    legs: 2,
    fly: function() {
        console.log('Flying');
    },
    eat: function() {
        console.log('Tok tok');
    }
}

// Make bird inherit all properties from animal object
bird.__proto__ = animal;
// When a property of bird object does not exist, JS engines follows the prototype chain and finds the property in the animal object
bird.sleep(); // Sleep sleep
// If JS engine found a property in  bird object, it would not follow the __proto__ link 
bird.fly(); // Flying
// walk() method is found in animal object and when executed, this refers to bird, thus 2 legs
bird.walk(); // Walking on 2 legs
// eat() method in bird shadows that in animal()
bird.eat(); // Tok tok