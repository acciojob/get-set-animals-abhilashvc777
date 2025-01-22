class Animal{
	constructor(species){
		this.species = species
	}
    makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}
class Cat extends Animal{
	constructor(species){
		super(species)
	}
	purr(){
		console.log("purr")
	}
}
class Dog extends Animal{
	constructor(species){
		super(species)
	}
	bark(){
		console.log("woof")
	}
}
const myCat = new Cat("Siamese")
myCat.makeSound()
myCat.purr()
const myDog = new Dog("Golden Retriever")
myDog.makeSound()
myDog.bark()
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
