const gifSearch = ()=>{
    function searchApi(urlInp, node){
        let url = "https://api.giphy.com/v1/gifs/translate?api_key=Te3ZBmZYUWLkl6ZwgWZbTIJSeJXVqDiY&s=";
        if(urlInp){
            url +=urlInp;
        } else {
            url += 'error';
        }
        try{
            return retrieveGifUrl(url,node);
        } catch(error){
            console.error('Error: Gif not loaded');
        }
    }
    async function retrieveGifUrl(url,node){
        const response = await fetch(url, {mode: 'cors'});
        const gifData = await response.json();
        node.src = gifData.data.images.original.url;
        console.log(gifData);
    }
    return searchApi;
}

export default gifSearch;