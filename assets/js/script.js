async function desafioAsincrono() {
  debugger;
  const Albums = await fetch("https://jsonplaceholder.typicode.com/albums");

  try {
    const respuesta = await Albums.json();
    respuesta.forEach((element) => {
      if (element.id < 21) {
        console.log(`ID: ${element.id} , Titulo: ${element.title}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
desafioAsincrono();
