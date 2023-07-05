//Calculator


const randomNumber = (max = 10, min = 0) => {
    return Math.floor(Math.random() * (max-min) + min)
}

class QnA {
    operatorArray = ["+","-","*","/"]
    constructor(){
        this.param1 = randomNumber()
        this.param2 = randomNumber(this.param1)
        this.operator = this.operatorArray[randomNumber(4)]
    }
    answer(){
        console.log(`${this.param1} ${this.operator} ${this.param2} = ${eval(this.param1+this.operator+this.param2)}`)
    }
}

const newQ = new QnA()

newQ.answer()