import { useState } from "react";
import "./Heading.css"

const Heading = () => {

  const [search,setSearch] = useState("")
    return(
      <div className='header'>
        <div className="SandwitchLogo">
          <button>Sandwitch</button>
          <button>Logo</button>
        </div>
        <div className="Search">
          <input type="text" placeholder='Search' onChange={({target}) => setSearch(target.value)}></input>
          <button className="searchButton" onClick={() => console.log(search)}>Search</button>
        </div>
        <button className="profile_button">Profile</button>
      </div>
    )
}

export default Heading;