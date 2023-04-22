import { NavLink,Outlet } from "react-router-dom"
import "./SandwitchMenu.css"

const SandwitchMenu = () => {
    return(
        <div className="feed">
            <div className="SandWitchMenu">
                <NavLink to="Home">Home</NavLink>
                <NavLink to="History">History</NavLink>
                <NavLink to="Liked">Liked</NavLink>
            </div>
            <div className="emptyDiv"></div>
            <div className="videoFeed">
                <div className="CardLContainerOuter">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default SandwitchMenu