
import assert from 'assert';
import { Money }  from './money.js';
import { Portfolio } from './portfolio.js' 

console.log('test 1: Add 2 different money')

let fiveDollars = new Money(5, "USD");
let tenEuros = new Money(10, "EUR");
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenEuros);
let expectedValue = new Money(17, "USD"); 
assert.deepStrictEqual(portfolio.evaluate("USD"), expectedValue);

console.log('all test pass successfully')

console.log('test 2: Add 2 different money')

let oneDollar = new Money(1, "USD");
let elevenHundredWon = new Money(1100, "KRW");
let portfolio2 = new Portfolio();
portfolio2.add(oneDollar, elevenHundredWon);
let expectedValue2 = new Money(2200, "KRW"); 1
assert.deepStrictEqual(portfolio2.evaluate("KRW"), expectedValue2);

console.log('all test pass successfully')