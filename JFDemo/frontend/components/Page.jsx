const Page = ({date,content}) => {
    console.log()
    return(
        <div>
            {date}<br/>
            <br/><br/>
            <textarea value={content}></textarea>
        </div>
)}

export default Page