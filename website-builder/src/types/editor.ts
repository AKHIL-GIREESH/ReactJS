import React from "react"

export type EditorContainerType = {
    styles: React.CSSProperties
    contents: EditorContainerType[]
}

export type EditorElementType = {
    styles: React.CSSProperties
    contents: string
}

export type EditorBodyType = {
    styles: React.CSSProperties
    contents: (EditorContainerType | EditorElementType)[]
}

export type editorContextType = {
    state: Number[],
    update: (val: Number[]) => void
}

// export type EditorBtns = 'text'
//     | 'container'
//     | 'section'
//     | 'contactForm'
//     | 'paymentForm'
//     | 'link'
//     | '2Col'
//     | 'video'
//     | '__body'
//     | 'image'
//     | null
//     | '3Col'

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

