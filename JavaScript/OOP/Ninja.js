class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Ninja's name is " + this.name + ", Ninja's Strength is " + this.strength + ", Ninja's speed is " + this.speed + ", Ninja's health is " + this.health)
    }

    drinkSake(){
        this.health += 10
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10)
    }
    speakWisdom(){
        const sake = super.drinkSake();
        console.log("I have more wisedom after drinking some sake " )
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();