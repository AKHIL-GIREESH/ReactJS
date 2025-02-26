import { EditorElementType } from '../../types/editor'
import TComponentArea from './TComponentArea'

const Elem = ({contents,styles,kind} : EditorElementType) => {
  return (
    <>
      <input type="text" value={contents} style={styles}></input>
      <TComponentArea styles={styles}/>
    </>
  )
}

export default Elem