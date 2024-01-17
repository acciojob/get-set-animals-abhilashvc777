// Base class Animal
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make sound
    makeSound() {
        console.log("Generic animal sound");
    }
}

// Subclass Cat extending Animal
class Cat extends Animal {
    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Subclass Dog extending Animal
class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Example usage
const genericAnimal = new Animal("Unknown");
console.log(genericAnimal.species); // Output: Unknown
genericAnimal.makeSound(); // Output: Generic animal sound

const cat = new Cat("Domestic Cat");
console.log(cat.species); // Output: Domestic Cat
cat.makeSound(); // Output: Generic animal sound
cat.purr(); // Output: purr

const dog = new Dog("Labrador Retriever");
console.log(dog.species); // Output: Labrador Retriever
dog.makeSound(); // Output: Generic animal sound
dog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
