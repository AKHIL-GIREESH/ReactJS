const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31b2aeff68msh27c5219c00d5a3bp167985jsnef2029d403b3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?q=blockchain&part=snippet%2Cid&regionCode=US&maxResults=5&order=date', options)
	.then(response => response.json())
	.then(response => console.log(response.items[2]))
	.catch(err => console.error(err));