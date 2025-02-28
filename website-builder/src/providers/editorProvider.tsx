import React, { createContext, useState } from "react";
import { editorContextType } from "../types/editor";

export const EditorContext = createContext<editorContextType | null >(null)

const EditorProvider = ({children}:React.PropsWithChildren) => {
    const [editorState,setEditorState] = useState<Number[]>([])
    

    return(
    
        <EditorContext.Provider value={{
            state:editorState,
            update:setEditorState
        }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider