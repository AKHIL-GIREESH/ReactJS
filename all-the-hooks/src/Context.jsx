import { useState } from "react"
import {ValOfNum} from "./ContextHook"
import Num from "./num"

const Context = () => {
    
    let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Jack"]
    const [counter,setCounter] = useState(0)
    
    return(
        <>
            <h1>Context Hook</h1>
            <h2>{counter}</h2><br/>
            <button onClick={() => setCounter(prev => prev+1)}>INCREMENT</button><br/>
            <ValOfNum.Provider value={counter}>
                <Num/>
            </ValOfNum.Provider>
        </>
        
    )
}

export default Context