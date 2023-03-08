import { useNavigate } from "react-router-dom"

const NextPage = () => {
    const navi = useNavigate()
    return(
        <>
            <h1>NextPage</h1>
            <button onClick={()=>navi(-1)}>Back</button>
        </>
    )
}

export default NextPage