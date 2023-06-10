import { useState } from "react"

const Tasks = ({element}) => {

    const [valModified,setValModified] = useState()

    const checkModified = (event) => {
        console.log(event)
    }

    const updateTask = () => {
        fetch(`http://localhost:3001/api/v1/tasks/${element._id}`,{
            method:"PATCH",
            body: JSON.stringify({
                task:""

            })
        }
        )
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return(
        <div className='newTask' key={element._id}>
          <input type="text" value={element.task} onChange={() => checkModified()}/>
          {<button className='saveButton' onClick={() => console.log(element)}>Save</button>}
          {element.condition?<input type="checkbox" checked></input>:<input type="checkbox"></input>}
          <button>🗑️</button>
        </div>
    )
}

export default Tasks