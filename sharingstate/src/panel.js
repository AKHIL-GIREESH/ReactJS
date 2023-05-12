import { useState } from "react"

const Panel = ({heading,content,status,modifyStatus}) => {
    return(
        <>
            <h2>{heading}</h2>
            {status?
            <p>{content}</p>:
            <button onClick={() => modifyStatus()}>Show Content</button>}
        </>
    )
}

export default Panel