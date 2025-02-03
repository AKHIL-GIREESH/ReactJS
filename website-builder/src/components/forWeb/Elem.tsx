import React from 'react'
import { EditorElementType } from '../../types/editor'

const Elem = ({contents,styles,kind} : EditorElementType) => {
  return (
    <input type="text" value={contents} style={styles}></input>
  )
}

export default Elem