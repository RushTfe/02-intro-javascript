const findImagen = async() => {
    try {
        const apiKey = '7mmZNL56QHm56pSMJqhgxSDWNsXia1B1';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await respuesta.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        // Manejar el error
        console.error(error);
    }
};

findImagen();

/*


peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    
    })
    .catch(console.warn);
    
*/