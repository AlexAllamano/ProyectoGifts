export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gCuuwyc0VERts4BEBImwbDBFWmx0ctMs&q=${categoria}&limit=20`;
    const respuesta = await fetch(url);

    const {data = []} = await respuesta.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            titulo: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return(gifs);
}