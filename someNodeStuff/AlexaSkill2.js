const randomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max-min) + min)

const verifyOption = (list) => {
    console.log(list)
    let ranString = String.fromCharCode(randomNumber(122,97))
    if(list.includes(ranString)){
        console.log("Works")
        return verifyOption(list)
    }else{
        return ranString
    }
}

class findAnimal {
    optionsArray = []
    mocksArray = ["Cat","Apple","Orange","Chocolate","Elephant"]

    constructor(){
        this.item = this.mocksArray[randomNumber(5)]
        this.answer = this.item[randomNumber(this.item.length)]
        this.notItem = this.item.replace(this.answer,"_").split("").join(" ")
    }

    question(){
        console.log(`Guess the missing letter in ${this.notItem}?`)
    }

    generateOptions(){
        this.optionsArray.push(this.answer)
        console.log(this.optionsArray)
        for(let i=0;i<3;i++){
            this.optionsArray.push(verifyOption(this.optionsArray))
        }
        console.log(this.optionsArray)
        this.optionsArray.shift()
        this.optionsArray.splice(randomNumber(4),0,this.answer)
        console.log(this.optionsArray)
    }

    getParams() {
        this.generateOptions();
        return {
          item: this.item,
          answer: this.answer,
          notItem: this.notItem,
          optionsArray: this.optionsArray,
        };
      }
}

const quest = new findAnimal()
//console.log(quest.notItem)
console.log(quest.getParams())