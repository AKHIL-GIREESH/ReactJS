import Sidebar from "./navbar"

const Page = ({data}) => {
    return(
    <div style={{display:"flex"}}>
        <Sidebar/>
        <div>
            {data}<br/>
            <br/><br/>
            <textarea></textarea>
        </div>
    </div>
)}

export default Page