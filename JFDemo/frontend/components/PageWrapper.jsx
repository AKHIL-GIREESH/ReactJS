import { Outlet } from "react-router"
import Sidebar from "./sidebar"

const PageWrapper = (props) => {
    return(
        <div style={{display:"flex"}}>
            <Sidebar data = {props.data} />
            <Outlet/>
        </div>
    )
}

export default PageWrapper