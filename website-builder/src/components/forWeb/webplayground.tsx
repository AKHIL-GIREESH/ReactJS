//type Props = {}
import { v4 as uuidv4 } from 'uuid';
import { EditorContainerType, EditorElementType } from "../../types/editor"
import Component from "./Component"
import Elem from "./Elem"

const website:EditorContainerType = {
  parent : "0",
  id : "1",
  styles : {border:"1px solid red",minHeight:"200px",width:"200px",height:"fit-content",resize:"both",overflow:"auto"},
  kind:"Container",
  contents : [{
    parent:"1",
    id:uuidv4(),
    styles: {border:"1px solid"},
    kind:"Elem",
    contents: "works"
  },{
    parent:"1",
    id:uuidv4(),
    styles : {border:"1px solid",minHeight:"200px",width:"200px",height:"fit-content"},
    kind:"Container",
    contents:null
  }]
}

const Webplayground = () => {

  const webBuilder = (prop:EditorContainerType | EditorElementType ) => {
    if(prop.kind == "Elem"){
      return (<Elem contents={prop.contents} styles={prop.styles} kind={prop.kind} parent={prop.parent} key={prop.id} id={prop.id}/>)
    }else{
      return(<Component contents={prop.contents} styles={prop.styles} kind={prop.kind} recFunc={webBuilder} parent={prop.parent} key={prop.id} id={prop.id}/>)
    }
  }

  return (
    <div style={{width:"80vw",height:"100vh"}}>Webplayground<br/>
    {
      webBuilder(website)
    }
    </div>
    
  )
}

export default Webplayground