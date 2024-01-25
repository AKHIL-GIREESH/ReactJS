import Sidebar from "./navbar"

const Page = ({data}) => {
    return(
    <>
        <Sidebar/>
        {data}
    </>
)}

export default Page