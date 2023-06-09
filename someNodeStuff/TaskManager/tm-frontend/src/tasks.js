const Tasks = ({element}) => {
    return(
        <div className='newTask' key={element._id}>
          <input type="text" value={element.task}/>
          {<button className='saveButton' onClick={() => console.log(element)}>Save</button>}
          {element.condition?<input type="checkbox" checked></input>:<input type="checkbox"></input>}
          <button>🗑️</button>
        </div>
    )
}

export default Tasks