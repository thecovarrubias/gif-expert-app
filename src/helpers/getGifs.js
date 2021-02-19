export const getGifs = async ( category ) => {
    const api_key = 'rCun9WJciE0EClufBg6sI5RZjrQIpabO', 
          limit = 10;      
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ encodeURI(category) }&limit=${ limit }`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}