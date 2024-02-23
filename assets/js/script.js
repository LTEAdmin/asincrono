async function desafioAsincrono() {
    const Albums = await fetch('https://jsonplaceholder.typicode.com/albums');
    try {

        fetch(Albums)
          .then((response) => response.json())
          .then((data) => console.log(data));
        const albums = await response.json();
        console.log(albums);
    } catch (error) {
        
    }

    
}