class Ninja{
    constructor(Name,Health){
        this.name = Name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name);
        console.log(this.speed);
        console.log(this.strength);
        console.log(this.health);
    }
    drinkSake(){
        this.health+=10;
    }
    
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja{
    constructor(Name){
        super(Name)
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


