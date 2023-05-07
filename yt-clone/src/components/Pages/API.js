//import { useEffect } from "react";
import { useState } from "react";

//require("dotenv").config({ path: ".env" });

const APIs = async () => {

    const [feedData,setFeedData] = useState("Void")

    // useEffect(() => {
    //     async () => {
    //     const url = 'https://youtube-v31.p.rapidapi.com/search?q=javascript&part=snippet%2Cid&regionCode=US&maxResults=9&order=date';
    //     const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '31b2aeff68msh27c5219c00d5a3bp167985jsnef2029d403b3',
    //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result.items);
    //     setFeedData(result.items)
    // } catch (error) {
    //     console.error(error);
    // }
    // }},[])
    return(
        <>
            {feedData}
        </>
    )
}

export default APIs
