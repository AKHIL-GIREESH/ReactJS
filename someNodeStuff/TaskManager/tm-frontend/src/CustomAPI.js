const CustomAPI = (method,route,data) => {
    fetch(`http://localhost:3001/api/v1/tasks`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task:newTask
            })
        }
        )
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(() => setRenderFlag(!renderflag))
        .then(() => setNewTask(""))
        .catch(err => console.log(err))
}