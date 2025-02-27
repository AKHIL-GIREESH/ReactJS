import React from "react"

export type elementKind = 'Elem' | 'Container'

export type sideBarSelectionContext = {
    state: elementKind | null,
    update: (val: elementKind) => void
}

export type EditorElementType = {
    parent: string
    id: string
    styles: React.CSSProperties
    kind: "Elem"
    contents: string
}

export type EditorContainerType = {
    parent: string
    id: string
    styles: React.CSSProperties
    kind: "Container"
    contents: (EditorContainerType | EditorElementType)[] | null
}

export type editorContextType = {
    state: Number[],
    update: (val: Number[]) => void
}

// | 'section'
// | 'contactForm'
// | 'paymentForm'
// | 'link'
// | '2Col'
// | 'video'
// | '__body'
// | 'image'
// | null
// | '3Col'

// export type DeviceTypes = "Desktop" | "Mobile" | "Tablet"

// export type EditorElement = {
//     id: string
//     styles: React.CSSProperties
//     name: string
//     type: EditorBtns
//     content: EditorElement[] | { href?: string; innerText?: string; src?: string }
// }

// export type Editor = {
//     // livemode: boolean
//     elements: EditorElement[]
//     selectedElement: EditorElement
//     device: DeviceTypes
//     previewMode: boolean
// }

// export type HistoryState = {
//     history: Editor[]
//     currentIndex: number
// }

// export type EditorState = {
//     editor: Editor
//     history: HistoryState
// }

