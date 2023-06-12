const CustomAPI = (method,route,dataObj = {},reRenderFunc) => {
    return fetch(`http://localhost:3001/api/v1/tasks${route}`,{ //route
            method:method,                       //method
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                dataObj                   //data
            )
        }
        )
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(() => reRenderFunc())
        .catch(err => console.log(err))
}

export default CustomAPI