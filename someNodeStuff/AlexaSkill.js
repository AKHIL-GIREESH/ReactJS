const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max-min) + min)

const verifyOption = (list) => {
    let ran = randomNumber(100)
    return ran in list? verifyOption(list) : ran
}

class QnA {
    operatorArray = ["+","-","*","/"]
    optionsArray = []
    constructor(){
        this.param1 = randomNumber()
        this.param2 = randomNumber(this.param1)
        this.operator = this.operatorArray[randomNumber(4)]
    }
    question(){
        console.log(`What is ${this.param1} ${this.operator} ${this.param2}?`)
    }
    answer(){
        console.log(`${this.param1} ${this.operator} ${this.param2} = ${eval(this.param1+this.operator+this.param2)}`)
    }
    generateOptions(){
        for(let i=0;i<3;i++){
            this.optionsArray.push(verifyOption(this.optionsArray))
        }
        this.optionsArray.splice(randomNumber(4),0,eval(this.param1+this.operator+this.param2)) && console.log(this.optionsArray)
    }
}

const newQ = new QnA()

newQ.question()
newQ.answer()
newQ.generateOptions()