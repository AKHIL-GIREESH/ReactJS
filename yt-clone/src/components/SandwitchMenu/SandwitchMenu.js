import { NavLink,Outlet } from "react-router-dom"

const SandwitchMenu = () => {
    return(
        <div className="Links">
            <NavLink to="Home">Home</NavLink>
            <NavLink to="History">History</NavLink>
            <NavLink to="Liked">Liked</NavLink>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default SandwitchMenu