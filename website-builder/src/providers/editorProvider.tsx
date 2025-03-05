import React, { createContext, useReducer } from "react";
import { Action, EditorContainerType, editorContextType, EditorElementType } from "../types/editor";
import { v4 as uuidv4 } from 'uuid';
import useGetElem from "../hooks/useGetElem";

export const EditorContext = createContext<editorContextType | null >(null)

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
      contents:[]
    }]
}

const findElemAndUpdate = (container:EditorContainerType,parent:string,index:number):boolean => {
    if(container.id == parent){
        if (Array.isArray(container.contents)){
            const newContainer = useGetElem(parent)
            container.contents.splice(index,0,newContainer)
            return true
        }
    }

    if (Array.isArray(container.contents)) {
        for (const item of container.contents) {
          const found:boolean = findElemAndUpdate(item as EditorContainerType, parent,index);
          if (found) return found;
        }
      }

    return false
}

const reducer = (state:EditorContainerType,action:Action) => {
    switch (action.type) {
        case "addElement":
            const {parent,index} = action
            const newState = JSON.parse(JSON.stringify(state));
            findElemAndUpdate(newState,parent,index)

            return newState;
        default:
          return state;
      }
}

const EditorProvider = ({children}:React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, website);

    return(
    
        <EditorContext.Provider value={{
            state:state,
            action:dispatch
        }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider