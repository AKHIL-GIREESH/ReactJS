const CustomAPI = (method,route,data) => {
    fetch(`http://localhost:3001/api/v1/tasks`,{ //route
            method:"POST",                       //method
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task:newTask                    //data
            })
        }
        )
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(() => setRenderFlag(!renderflag))
        .then(() => setNewTask(""))
        .catch(err => console.log(err))
}