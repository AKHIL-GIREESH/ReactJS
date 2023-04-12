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
        <input placeholder='Search' onChange={({target}) => setSearch(target.value)}></input>
        <button onClick={() => console.log(search)}>Search</button>
        <button>Profile</button>
      </div>
    )
}

export default Heading;