import { memo } from "react"

const TextUI = () => {
    console.log("TextUI")
    return(
        <h3>Text</h3>
    )
}

export default memo(TextUI)