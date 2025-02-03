//type Props = {}

import { EditorContainerType, EditorElementType } from "../types/editor"

const website:EditorContainerType = {
  styles : {border:"1px solid",minHeight:"200px",width:"200px",maxHeight:"fit-content"},
  kind:"Container",
  contents : [{
    styles: {border:"1px solid"},
    kind:"Elem",
    contents: "works"
  },{
    styles : {border:"1px solid",minHeight:"200px",width:"200px",maxHeight:"fit-content"},
    kind:"Container",
    contents:null
  }]
}

const webBuilder = (prop:EditorContainerType | EditorElementType ) => {
  if(prop.kind == "Elem"){
    return (<p style={prop.styles}>{prop.contents}</p>)
  }else{
    return(<div style={prop.styles}>{prop.contents?.map(item => webBuilder(item))}</div>)
  }
}

const Webplayground = () => {
  return (
    <div style={{width:"80vw",height:"100vh"}}>Webplayground<br/>
    {
      webBuilder(website)
    }
    </div>
    
  )
}

export default Webplayground