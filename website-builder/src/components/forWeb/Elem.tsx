import { EditorElementType } from '../../types/editor'
import TPlaceHolderArea from './TPlaceHolderArea'

const Elem = ({contents,styles,kind} : EditorElementType) => {
  return (
    <>
      <input type="text" value={contents} style={styles}></input>
      <TPlaceHolderArea/>
    </>
  )
}

export default Elem