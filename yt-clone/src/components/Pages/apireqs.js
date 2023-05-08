const APIFunc = async () => {
    const trow = []
    const url = 'https://youtube-v31.p.rapidapi.com/search?q=javascript&part=snippet%2Cid&regionCode=US&maxResults=5&order=date';
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
        console.log(result);
        console.log(result.items)
        const feedData = result.items
        for(let i=0;i<feedData.length;i++){
            trow.push(feedData[i].snippet.title)
            // setRowList(prev => [prev]+[feedData[i].snippet.description])
        }
    } catch (error) {
        console.error(error);
    }
    console.log(trow)
    }
    
module.exports = APIFunc