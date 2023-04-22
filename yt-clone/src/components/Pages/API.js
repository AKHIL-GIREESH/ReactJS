require("dotenv").config({ path: ".env" });

const APIs = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API-KEY,
            'X-RapidAPI-Host': process.env.HOST
        }
    };
    
    const resp = await fetch('https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return(
        <>
            {resp}
        </>
    )
}

export default APIs
