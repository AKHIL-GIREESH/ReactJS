import './App.css'
function RenderBoxes(props){
    return(
        <button className={props.className} onClick={props.onClick}>
            {props.state?"ON":"OFF"}
        </button>
    )
}

export default RenderBoxes