const events = require("events")

const someRandomEvent = (theThing = false) => {
    
    const eventEmiiter = new events()

    eventEmiiter.on('SomeRandomEvent',()=> console.log("Yay! It worked"))
    
    if (theThing){
        console.log("I am the Event")
        eventEmiiter.emit('SomeRandomEvent')
    }
    
}

someRandomEvent()

