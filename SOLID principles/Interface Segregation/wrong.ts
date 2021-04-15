interface Entity {
     attackDamage: number;
     health: number;
     name: string;
     takeDamage(amount: number): void
}

// A character can move, attack and take damage.
class Character implements Entity {
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
    
    attack(victim: {name: string, health: number, takeDamage(attackDamage: number): null }) {
        console.log(`${this.name} attacked ${victim.name} and might have inflicted ${this.attackDamage} damage.`)
        victim.takeDamage(this.attackDamage)
        console.log(`Remaining health of ${victim.name} is ${victim.health}.`)
    }

    takeDamage(amount: number) {
        this.health -= amount
        return null
    }
} // A video game character implements an Entity interface. It implements name, attackDamage and health attributes along
// with the takeDamage method. In addition, it defines the move and attack methods of its own.


// A turret can't move or take damage but it can attack when characters fall into it.
class Turret implements Entity {
    attackDamage: number;
     health: number;
     name: string; //declaring class variables

    constructor(name: string, attackDamage: number){
        this.name = name,
        this.attackDamage = attackDamage,
        this.health = -1
        // assigning values to class variables
    }

    attack(victim: {name: string, health: number, takeDamage(attackDamage: number): null }) {
        console.log(`${this.name} attacked ${victim.name} and might have inflicted ${this.attackDamage} damage.`)
        victim.takeDamage(this.attackDamage)
        console.log(`Remaining health of ${victim.name} is ${victim.health}.`)
    }

    takeDamage(amount: number) {
        return null // forced to implement this method, although not actually required in the context of the class.
    }
}

let Mario = new Character ('mario', 3, 100 )
let Turr = new Turret('turr', 5)

Mario.attack(Turr)
Turr.attack(Mario)

// In this example, it can be seen that takeDamage is being forced to be implemented by Turret class. Hence, it fails the Interface Segregation principle.