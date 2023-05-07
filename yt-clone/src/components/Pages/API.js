import { useEffect } from "react";
import { useState } from "react";

//require("dotenv").config({ path: ".env" });

const APIs = () => {

    const [rowList,setRowList] = useState([])

    useEffect(() => {
        (async function feedData(){
        const trow = []
        const url = 'https://youtube-v31.p.rapidapi.com/search?q=javascript&part=snippet%2Cid&regionCode=US&maxResults=2&order=date';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '31b2aeff68msh27c5219c00d5a3bp167985jsnef2029d403b3',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.items)
        const feedData = result.items
        for(let i=0;i<feedData.length;i++){
            trow.push(feedData[i].snippet.title)
            // setRowList(prev => [prev]+[feedData[i].snippet.description])
        }
        console.log(trow)
        setRowList(trow)
    } catch (error) {
        console.error(error);
    }
    })()
},[])

// for(let i=0;i<feedData.length;i++){
//     console.log(feedData.length)
//     console.log(typeof(feedData))
//     console.log("h")
//     rowList.push(feedData[i][snippet][description])
// }
    console.log(rowList)
    return(
        <>
            {/* {feedData.forEach(element => element.snippet.title)} */}
            {rowList}
        </>
    )
}

export default APIs
