type Props = {
    index: Number
    setCard: (val:Number | null) => void
}

const CardTemp = ({index,setCard}: Props) => {
  return (
    
    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px",marginBottom:"10px"}} onDragStart={() => setCard(index)} onDragEnd={() => setCard(null)}>{""+index}</div>
  )
}

export default CardTemp