interface LivingEntity {
    attackDamage: number;
    health: number;
    name: string;
    takeDamage(amount: number): void;
    move(): void;
    attack(victim: {name: string, health: number, takeDamage(attackDamage: number): null }): void
}

interface NonLivingEntity {
    attackDamage: number;
    name: string;
    attack(victim: {name: string, health: number, takeDamage(attackDamage: number): null }): void
}

// A character can move, attack and take damage.
class Characterr implements LivingEntity {
   attackDamage: number;
    health: number;
    name: string; //declaring class variables

   constructor(name: string, attackDamage: number, health: number){
       this.name = name,
       this.attackDamage = attackDamage,
       this.health = health
       // assigning values to class variables
   }

   move() {
       console.log(`${this.name} moved.`)
   }
   
   attack(victim: {name: string, takeDamage(amount:number): void}) {
    console.log(`${this.name} attacked ${victim.name} and might have inflicted ${this.attackDamage} damage.`)
    victim.takeDamage(this.attackDamage)
}

   takeDamage(amount: number) {
       this.health -= amount
       console.log(`Remaining health of ${this.name} is ${this.health}.`)
   }
} // A video game character implements an Entity interface. It implements name, attackDamage and health attributes along
// with the takeDamage method. In addition, it defines the move and attack methods of its own.


// A turret can't move or take damage but it can attack when characters fall into it.
class Turrett implements NonLivingEntity {
   attackDamage: number;
    name: string; //declaring class variables

   constructor(name: string, attackDamage: number){
       this.name = name,
       this.attackDamage = attackDamage
       // assigning values to class variables
   }

   attack(victim: {name: string, takeDamage(amount:number): void}) {
       console.log(`${this.name} attacked ${victim.name} and might have inflicted ${this.attackDamage} damage.`)
       victim.takeDamage(this.attackDamage)
   }
}

let Mario1 = new Characterr ('mario', 3, 100 )
let Turr1 = new Turrett('turr', 5)

Turr1.attack(Mario1)
// An error will be thrown if Mario.attack(Turr1) is invoked.


// In this example, it can be seen that takeDamage is free from being implemented by Turret class.
// In fact, an error is thrown when when the Mario object tries to attack and invoke the takeDamage function for the turret.
// Thus, Interface segregation has been implemented successfully.