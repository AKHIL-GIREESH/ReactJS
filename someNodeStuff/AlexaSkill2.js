const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max-min) + min)

const verifyOption = (list) => {
    let ran = randomNumber(122,97)
    return String.fromCharCode(ran) in list? verifyOption(list) : String.fromCharCode(ran)
}

class findAnimal {
    optionsArray = []
    mocksArray = ["Cat","Apple","Orange","Chocolate","Elephant"]
    constructor(){
        this.item = this.mocksArray[randomNumber(5)]
        this.answer = this.item[randomNumber(this.item.length)]
        this.notItem = this.item.replace(this.answer,"_")
    }

    generateOptions(){
        for(let i=0;i<3;i++){
            this.optionsArray.push(verifyOption(this.optionsArray))
        }
        this.optionsArray.splice(randomNumber(4),0,this.answer)
    }

    printParams(){
        console.log(this.item)
        console.log(this.answer)
        console.log(this.notItem)
        this.generateOptions()
        console.log(this.optionsArray)
    }
}

const quest = new findAnimal()
quest.printParams()