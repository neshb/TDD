const assert = require('assert');


let tenEur = new Money(10, 'Eur');

let twentyEur = tenEur.times(2);
assert.strictEqual(twentyEur.amount, 20)
assert.strictEqual(twentyEur.currency, 'Eur')