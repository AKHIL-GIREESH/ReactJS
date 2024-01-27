const Page = ({date,content}) => {
    console.log("Page")
    return(
        <div>
            {date}<br/>
            <br/><br/>
            <textarea value={content}></textarea>
        </div>
)}

export default Page