import React, { createContext, useState } from "react";

const EditorContext = createContext<{editorState:Number[]setEditorState:(Number[]) => void}>([])


const EditorProvider = ({children}:React.PropsWithChildren) => {
    const [editorState,setEditorState] = useState([])
    return(
    <EditorContext.Provider value={editorState,setEditorState}>
        {children}
    </EditorContext.Provider>)
}
