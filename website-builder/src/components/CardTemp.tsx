import { card } from "./playground"

type Props = {
    index: Number
    side: Number
    setCard: (val: card | null) => void
}

const CardTemp = ({index,side,setCard}: Props) => {
  return (
    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px",marginBottom:"10px"}} onDragStart={() => setCard({index:index,side:side})} onDragEnd={() => setCard(null)}>{""+index}</div>
  )
}

export default CardTemp