import { Money } from './money.js';

export class Portfolio {
    constructor() {
        this.moneys = [];
   }
    add(...moneys) {
        this.moneys = this.moneys.concat(moneys);
    }

    convert(money, currency) {
        let exchangeRates = new Map();
        let key = money.currency + "->" + currency;
        
        exchangeRates.set("EUR->USD", 1.2);
        exchangeRates.set("USD->KRW", 1100);

        if (money.currency === currency) {
            return money.amount;
        }
        return money.amount * exchangeRates.get(key);
    }

    evaluate(currency) {
        let total = this.moneys.reduce((sum, money) => {
            return sum + this.convert(money, currency);
        }, 0);
        return new Money(total, currency);
    }
}