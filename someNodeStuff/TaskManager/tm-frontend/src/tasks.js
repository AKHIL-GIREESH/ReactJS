import { useState } from "react"
import CustomAPI from "./CustomAPI"

const Tasks = ({element,reRenderFunc}) => {

    const [valModified,setValModified] = useState(false)
    const [val,setVal] = useState(element.task)
    //const [checked,setChecked] = useState(element.condition)

    const checkModified = (event) => {
        setVal(event.target.value)
        event.target.value !== element.task ? setValModified(true) : setValModified(false)
        //console.log(modifyField)
    }

    const updateStatus = () => {
        // fetch(`http://localhost:3001/api/v1/tasks/${element._id}`,{
        //     method:"PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         condition: !element.condition
        //     })
        // }
        // )
        // .then(resp => resp.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
        CustomAPI("PATCH","/${element._id}",dataObj = {condition: !element.condition},reRenderFunc)
    }

    const updateTask = () => {
        // fetch(`http://localhost:3001/api/v1/tasks/${element._id}`,{
        //     method:"PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         task:val
        //     })
        // }
        // )
        // .then(resp => resp.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
        CustomAPI("PATCH","/${element._id}",dataObj = {task:val},reRenderFunc)

    }

    return(
        <div className='newTask' key={element._id}>
          <input type="text" value={val} name="modifyField" onChange={(e) => checkModified(e)}/>
          <button className='saveButton' onClick={() => updateTask()} disabled={valModified?false:true}>Save</button>
          <input type="checkbox" checked={element.condition} onChange={() => updateStatus()}/>
          <button>🗑️</button>
        </div>
    )
}

export default Tasks