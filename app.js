//There is only one Governor in the state; add static methods and properties you'd expect a Governor to have.
//Log the properties and test the methods (but don't instantiate an object of the class)
class Governor {
    static name = "Greg Abbott";
    static state = "Texas";
    static terms = 4;

    static introduceGovernor() {
        console.log(`${Governor.name} is the current governor of ${Governor.state} and he gets to serve for ${Governor.terms} years.`);
    }
}
Governor.introduceGovernor();
console.log(Governor.name);
console.log(Governor.state);
console.log(Governor.terms);

/**For the Person class:

Think of three properties all people share, and set them with the constructor.
Think of three methods all people share, and create them.
Create a PostalWorker class that inherits from Person, and add some methods specific to postal workers.
Create a Chef class that inherits from Person, and add some methods specific to chefs.
Create two PostalWorkers and two Chefs. Log them and test all of their methods */
class Person{
    constructor(eyes, legs, arms) { //Think of three properties all people share, and set them with the constructor.
        this.eyes = eyes;
        this.legs = legs;
        this.arms = arms
    }

    introduce() {
        console.log(`People have 2 ${this.eyes}, 2 ${this.legs}, and 2 ${this.arms}.`);
    }

    usage() {
        console.log(`They use their ${this.eyes} to see, ${this.legs} to walk/ran, and ${this.arms} to eat.`);
    }

    like() {
        console.log("Happiness is what they long for.")
    }
}
const thisPerson = new Person("eyes", "legs", "arms");
thisPerson.introduce();
thisPerson.usage();
thisPerson.like();
//Create a PostalWorker class that inherits from Person, and add some methods specific to postal workers.
class PostalWorker extends Person {
    constructor(name, ID, age) {
        super("eyes", "legs", "arms");
        this.name = name;
        this.ID = ID;
        this.age = age
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and this is my ID number ${this.ID}.`)
    }

    getMail() {
        console.log(`When employees get a mail in the office, they give their ID ${this.ID} so that they can be identified.`);
    }

    deliverMail() {
        console.log(`${this.name}, delivers mail to the house nextdoor a lot.`);
    }
}
const employees = new PostalWorker("BJ","1234567", 79);
employees.introduce();
employees.getMail();
employees.deliverMail();

//Create a Chef class that inherits from Person, and add some methods specific to chefs.
class Chef extends Person {
    constructor(name, cook, bake) { 
        super("eyes", "legs", "arms");
        this.name = name;
        this.cook = cook;
        this.bake = bake
    }

    introduce() {
        console.log(`Chef ${this.name} is the best cook, he makes the best ${this.cook}.`);
    }

    experience() {
        console.log("He is very experienced, He has been a chef for 15+ years.");
    }
}
const bestChef = new Chef("Alain", "Congolese food", "French bread");

bestChef.introduce();
bestChef.experience();

//Create two PostalWorkers and two Chefs. Log them and test all of their methods.
const employees2 = new PostalWorker("Jane Doe", "8910111", 30);

employees2.introduce();
employees2.getMail();
employees2.deliverMail();


const bestChef2 = new Chef("Lee", "Ethiopian food", "bread");
bestChef2.introduce();
bestChef2.experience();
