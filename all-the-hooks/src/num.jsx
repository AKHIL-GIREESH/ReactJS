import Prev from "./prev"
import Next from "./next"

const Num= ({num}) => {
    
    return(
        <>
            <Prev num={num}/>
            <Next num={num}/>
        </>
    )
}

export default Num