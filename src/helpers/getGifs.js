
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4LloqC5eZR22guF6mIxhmA5wSUwUmVyE&q=${ category }&limit=20`;
    const resp = await fetch( url );
    //La respuesta de la API es un objeto, en este caso nuestra resp sería el objeto
    //Dentro de ese objeto tenemos data, podemos desestructurar resp para obtener data
    const { data } = await resp.json();
    //Extraemos cierta info que nos da data
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log( gifs );
    return gifs;
}