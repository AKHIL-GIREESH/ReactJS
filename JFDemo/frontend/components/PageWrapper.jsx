import { Outlet } from "react-router"
import Sidebar from "./sidebar"

const PageWrapper = () => {
    return(
        <>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default PageWrapper