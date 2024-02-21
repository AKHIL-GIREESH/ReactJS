import { useContext } from "react"
import { ValOfNum } from "./ContextHook"

const Next = () => {
    let num = useContext(ValOfNum)
    return(
        <>
            <br/>Number is {num+1}
        </>
    )
}

export default Next