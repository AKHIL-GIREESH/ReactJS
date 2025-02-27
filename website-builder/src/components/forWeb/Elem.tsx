import { EditorElementType } from '../../types/editor'
import TPlaceHolderArea from './TPlaceHolderArea'

const Elem = ({contents,styles,kind, parent , id} : EditorElementType) => {
  return (
    <>
      <input type="text" value={contents} style={styles}></input>
      <TPlaceHolderArea parent={parent} id={id} key={parent+id}/>
    </>
  )
}

export default Elem