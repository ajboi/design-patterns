// A character can move, attack and take damage.
var Characterr = /** @class */ (function () {
    function Characterr(name, attackDamage, health) {
        this.name = name,
            this.attackDamage = attackDamage,
            this.health = health;
        // assigning values to class variables
    }
    Characterr.prototype.move = function () {
        console.log(this.name + " moved.");
    };
    Characterr.prototype.attack = function (victim) {
        console.log(this.name + " attacked " + victim.name + " and might have inflicted " + this.attackDamage + " damage.");
        victim.takeDamage(this.attackDamage);
    };
    Characterr.prototype.takeDamage = function (amount) {
        this.health -= amount;
        console.log("Remaining health of " + this.name + " is " + this.health + ".");
    };
    return Characterr;
}()); // A video game character implements an Entity interface. It implements name, attackDamage and health attributes along
// with the takeDamage method. In addition, it defines the move and attack methods of its own.
// A turret can't move or take damage but it can attack when characters fall into it.
var Turrett = /** @class */ (function () {
    function Turrett(name, attackDamage) {
        this.name = name,
            this.attackDamage = attackDamage;
        // assigning values to class variables
    }
    Turrett.prototype.attack = function (victim) {
        console.log(this.name + " attacked " + victim.name + " and might have inflicted " + this.attackDamage + " damage.");
        victim.takeDamage(this.attackDamage);
    };
    return Turrett;
}());
var Mario1 = new Characterr('mario', 3, 100);
var Turr1 = new Turrett('turr', 5);
Turr1.attack(Mario1);
// In this example, it can be seen that takeDamage is free from being implemented by Turret class.
// In fact, an error is thrown when when the Mario object tries to attack and invoke the takeDamage function for the turret.
// Thus, Interface segregation is here implemented successfully.
