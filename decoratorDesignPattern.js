// Component interface
class Beverage {
    constructor() {
        this.description = "Unknown beverage";
    }

    getDescription() {
        return this.description;
    }

    cost() {
        throw new Error("Method 'cost()' must be implemented");
    }
}

// Concrete component
class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cost() {
        return 1.99;
    }
}

// Decorator
class CondimentDecorator extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ", " + this.constructor.name;
    }
}

// Concrete decorators
class Milk extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    getDescription() {
        return super.getDescription() + " with Milk";
    }

    cost() {
        return this.beverage.cost() + 0.5;
    }
}

class Whip extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }

    getDescription() {
        return super.getDescription() + " with Whip";
    }

    cost() {
        return this.beverage.cost() + 0.4;
    }
}

// Usage
const espresso = new Espresso();
console.log(espresso.getDescription() + " $" + espresso.cost());

const milkEspresso = new Milk(espresso);
console.log(milkEspresso.getDescription() + " $" + milkEspresso.cost());

const whipMilkEspresso = new Whip(milkEspresso);
console.log(whipMilkEspresso.getDescription() + " $" + whipMilkEspresso.cost());
