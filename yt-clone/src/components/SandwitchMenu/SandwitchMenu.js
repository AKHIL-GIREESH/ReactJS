import { NavLink,Outlet } from "react-router-dom"
import "./SandwitchMenu.css"

const SandwitchMenu = () => {
    return(
        <>
            <div className="SandWitchMenu">
                <NavLink to="Home">Home</NavLink>
                <NavLink to="History">History</NavLink>
                <NavLink to="Liked">Liked</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default SandwitchMenu