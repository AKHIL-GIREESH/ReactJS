const Sidebar = () => {

    let mocks = [
        "25 Jan",
        "24 Jan",
        "23 Jan",
        "22 Jan",
        "21 Jan"
    ]

    return(
        <div className="Sidebar">
            {mocks.map(item => {
                <div>
                    {item}
                </div>
            })}
        </div>
    )
}

export default Sidebar