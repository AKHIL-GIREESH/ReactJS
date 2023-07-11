const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max-min) + min)

const verifyOption = (list) => {
    let ran = randomNumber(100)
    return ran in list? verifyOption(list) : ran
}

class findAnimal {
    optionsArray = []
    mocksArray = ["Cat","Apple","Orange","Chocolate","Elephant"]
    constructor(){
        this.item = mocksArray[randomNumber(5)]
    }
}