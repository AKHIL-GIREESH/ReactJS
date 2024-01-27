import {Link} from "react-router-dom"

const Sidebar = (mocks) => {
    console.log(mocks.data[0])
    // let mocks = [
    //     {
    //         "_id": "65b398d51986791809e8e849",
    //         "date": "2024-01-26T11:28:43.882Z",
    //         "content": "Hello World 1",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65b48322cd8345ac914f9428",
    //         "date": "2024-01-25T00:00:02.024Z",
    //         "content": "Hello World 2",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65b398d51986791809e8e847",
    //         "date": "2024-01-24T11:28:43.882Z",
    //         "content": "Hello World 3",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65b48322cd8345ac914f9426",
    //         "date": "2024-01-23T00:00:02.024Z",
    //         "content": "Hello World 4",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65b398d51986791809e8e845",
    //         "date": "2024-01-22T11:28:43.882Z",
    //         "content": "Hello World 5",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65b48322cd8345ac914f9424",
    //         "date": "2024-01-21T00:00:02.024Z",
    //         "content": "Hello World 6",
    //         "__v": 0
    //     },{
    //         "_id": "65b398d51986791809e8e843",
    //         "date": "2024-01-20T11:28:43.882Z",
    //         "content": "Hello World 7",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65b48322cd8345ac914f9422",
    //         "date": "2024-01-19T00:00:02.024Z",
    //         "content": "Hello World 8",
    //         "__v": 0
    //     }
    // ]
    return(
        <div className="Sidebar">
            {mocks && mocks.data.map((item) => 
                <div key={item._id}>
                    <Link to={`/${item._id}`}>
                        {item.content}
                    </Link>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default Sidebar