import React, { createContext, useState } from "react";
import { editorContextType, elementKind, sideBarSelectionContext } from "../types/editor";

export const EditorContext = createContext<editorContextType | null >(null)
export const SideBarDrag = createContext<sideBarSelectionContext | null >(null)

const EditorProvider = ({children}:React.PropsWithChildren) => {
    const [editorState,setEditorState] = useState<Number[]>([])
    const [sideBarSelection,setSideBarSelection] = useState<elementKind|null>(null)

    return(
    <SideBarDrag.Provider value={{
        state:sideBarSelection,
        update: setSideBarSelection
    }}>
        <EditorContext.Provider value={{
            state:editorState,
            update:setEditorState
        }}>
            {children}
        </EditorContext.Provider>
    </SideBarDrag.Provider>
    )
}

export default EditorProvider