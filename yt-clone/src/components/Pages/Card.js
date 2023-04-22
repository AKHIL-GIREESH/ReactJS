import "../../App.css"

const CardS = () => {
    return(
        <>
            CardS
        </>
    )
}

const CardL = () => {
    return(
            <div className="CardLContainer">
                <img className="CardLThumbnail" alt="img"></img>
                <div className="CardLDesc">
                    <p>Channel Name</p>
                    <div className="CardLDes_details">
                        <p>Views</p>
                        <p>.</p>
                        <p>Uploaded</p>
                    </div>
                </div>
            </div>
    )
}

export {CardL,CardS}