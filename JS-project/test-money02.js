const assert = require('assert');

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }
}

let tenEur = new Money(10, 'Eur');

let twentyEur = tenEur.times(2);
assert.strictEqual(twentyEur.amount, 20)
assert.strictEqual(twentyEur.currency, 'Eur')

let fiveUSD = new Money(5, "USD");
let tenUSD = fiveUSD.times(2);
assert.strictEqual(tenUSD.amount, 10);
assert.strictEqual(tenUSD.currency, "USD");