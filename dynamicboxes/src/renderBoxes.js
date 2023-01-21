import './App.css'
function RenderBoxes(props){
    return(
        <div className={props.className} onClick={props.onClick} style={props.style}>
            {props.state?"ON":"OFF"}
        </div>
    )
}

export default RenderBoxes