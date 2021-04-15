// A character can move, attack and take damage.
var Character = /** @class */ (function () {
    function Character(name, attackDamage, health) {
        this.name = name,
            this.attackDamage = attackDamage,
            this.health = health;
        // assigning values to class variables
    }
    Character.prototype.move = function () {
        console.log(this.name + " moved.");
    };
    Character.prototype.attack = function (victim) {
        console.log(this.name + " attacked " + victim.name + " and might have inflicted " + this.attackDamage + " damage.");
        victim.takeDamage(this.attackDamage);
        console.log("Remaining health of " + victim.name + " is " + victim.health + ".");
    };
    Character.prototype.takeDamage = function (amount) {
        this.health -= amount;
        console.log(this.name + " has " + this.health + " health remaining.");
        return null;
    };
    return Character;
}()); // A video game character implements an Entity interface. It implements name, attackDamage and health attributes along
// with the takeDamage method. In addition, it defines the move and attack methods of its own.
// A turret can't move or take damage but it can attack when characters fall into it.
var Turret = /** @class */ (function () {
    function Turret(name, attackDamage) {
        this.name = name,
            this.attackDamage = attackDamage,
            this.health = -1;
        // assigning values to class variables
    }
    Turret.prototype.attack = function (victim) {
        console.log(this.name + " attacked " + victim.name + " and might have inflicted " + this.attackDamage + " damage.");
        victim.takeDamage(this.attackDamage);
        console.log("Remaining health of " + victim.name + " is " + victim.health + ".");
    };
    Turret.prototype.takeDamage = function (amount) {
        return null; // forced to implement this method, although not actually required in the context of the class.
    };
    return Turret;
}());
var Mario = new Character('mario', 3, 100);
var Turr = new Turret('turr', 5);
Mario.attack(Turr);
Turr.attack(Mario);
