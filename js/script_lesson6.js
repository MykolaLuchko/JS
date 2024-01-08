class Bank {
    constructor (options){
        this.summ = options.summ;
        this.month = options.month;
        this.p = options.p;
    }
    credit (){
        return console.log( this.summ + this.p * this.month);
    }
}

userBank = new Bank({
    summ: 3000,
    month: 5,
    p: 500,
})

userBank.credit();