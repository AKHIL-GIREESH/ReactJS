const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max-min) + min)

const verifyOption = (list) => {
    let ran = randomNumber(100)
    return ran in list? verifyOption(list) : ran
}

class findAnimal {
    optionsArray = []
    mocksArray = ["Cat","Apple","Orange","Chocolate","Elephant"]
    constructor(){
        this.item = this.mocksArray[randomNumber(5)]
        this.answer = this.item[randomNumber(this.item.length)]
        this.notItem = this.item.replace(this.answer,"_")
    }

    printParams(){
        console.log(this.item)
        console.log(this.answer)
        console.log(this.notItem)
    }
}

const quest = new findAnimal()
quest.printParams()