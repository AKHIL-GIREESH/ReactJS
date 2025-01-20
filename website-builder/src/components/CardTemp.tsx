import CardArea from "./CardArea"
import { card } from "./playground"

type Props = {
    index: number
    side: Number
    setCard: (val: card | null) => void
    onDRag: (val: card) => void
}

const CardTemp = ({index,side,setCard,onDRag}: Props) => {
  return (
    <>
        <div draggable style={{backgroundColor:"white",height:"50px",width:"50px",marginBottom:"10px"}} onDragStart={() => setCard({index:index,side:side})} onDragEnd={() => setCard(null)}>{""+index}</div>
        <CardArea index={index+1} side={side} onDRag={onDRag}/>
    </>
  )
}

export default CardTemp