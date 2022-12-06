class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        // target.res
    }
    show(){
        console.log("Name of the card: "+this.name+"\nRest: "+this.res+"\nPower: "+this.power+"\n*************");
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,mag){
        super(name,cost);
        this.text=text;
        this.stat = stat;
        this.mag = mag;
    }
    play(unit){
        if(unit instanceof Unit){
            if(this.stat=="resilience"){
                unit.res+=this.mag;
            }
            else{
                unit.power+=this.mag;
            }
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const red = new Unit("Red Belt Ninja",3,3,4);
const alg = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",+3);
alg.play(red);
red.show();


const black = new Unit("Black Belt Ninja",4,5,4);

const prom = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
prom.play(red);
red.show();
const pair = new Effect("Pair Programming",3,"increase target's power by 2","power",+2);
pair.play(red);
red.show();


