
import assert from 'assert';
import { Money }  from './money.js';
import { Portfolio } from './portfolio.js' 


let fiveDollars = new Money(5, "USD");
let tenDollars = new Money(10, "USD");

let fifteenDollars = new Money(15, "USD");
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars); 
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars); 
console.log('all test pass successfully')