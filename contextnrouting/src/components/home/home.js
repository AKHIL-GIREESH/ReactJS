import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    return(
        <>
            Home
            <button onClick={()=> navigate("NextPage")}>
                NextPage
            </button>
        </>
    )
}

export default Home