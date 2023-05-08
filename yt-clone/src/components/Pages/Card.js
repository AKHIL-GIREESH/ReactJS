import "../../App.css"
import APIFeed from "./apireqs"

const CardS = () => {
    return(
        <>
            CardS
        </>
    )
}

const CardL = (search = "javascript") => {
    const generateFeed = async () => {
      const rowList = []
      const resp = await APIFeed("javascript")
      console.log(resp.length)
      for(let element = 0;element<resp.length;element++){
        rowList.push(
          <div className="CardLContainer">
            <img className="CardLThumbnail" alt="img"></img>
            <div className="CardLDesc">
              <p>{resp[element].snippet.title}</p>
              <div className="CardLDes_details">
                <p>Views</p>
                <p>.</p>
                <p>Uploaded</p>
              </div>
            </div>
          </div>
        )
      }
      console.log(rowList[0])
      return rowList
    }
      
    return(
      <>
        {generateFeed()}
      </>
    )
  }
  

export {CardL,CardS}