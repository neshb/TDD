
import assert from 'assert';
import { Money }  from './money.js';
import { Portfolio } from './portfolio.js' 

console.log('Add 2 different money')

let fiveDollars = new Money(5, "USD");
let tenEuros = new Money(10, "EUR");
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenEuros);
let expectedValue = new Money(17, "USD"); 
assert.deepStrictEqual(portfolio.evaluate("USD"), expectedValue);

console.log('all test pass successfully')