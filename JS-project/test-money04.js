const assert = require('assert');

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }
    divide(divisor) {
        return new Money(this.amount / divisor, this.currency)
    }  
}


let fifteenDollars = new Money(15, "USD");
let portfolio = new Portfolio(); 1
portfolio.add(fiveDollars, tenDollars); 2
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars); 