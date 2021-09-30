//Este archivo esta encargado de  la logica del mapa

//Creacion de una constante, para obtener el ancho de la imagen
const WIDTH = 400;

//Creacion de una constante, para obtener el alto de la imagen
const HEIGH = 400;

//generacion del mapa para saber en donde se va a ubicar, agregamos llave de apertura
let target = {

  /*Creacion de parametro "X", y con getRandomNumber(WIDTH) y con este parametro
  va a obtener un numero aleatorio desde todo el ancho de la imagen*/
  x: getRandomNumber(WIDTH),

  /*Creacion de parametro "X", y con getRandomNumber(WIDTH) y con este parametro
  va a obtener un numero aleatorio desde todo el largo de la imagen*/
  y: getRandomNumber(HEIGH)

//llave de cierre
};


/*Con la variable let $map se indica que estamos mandando a llamar la imagen situada en el HTML al igual que con 
document.querySelecctor "mapa",indicamos que vamos a obtener el mapa del id del HTMl, es por eso que ahora
vamos a tener el mapa en el nombre de la variable*/
let $map = document.querySelector('#map');

/*obtenemos la distancia de la pista y para eso vamos a guardar en una varible llamada $distance y le vamosa dar 
la referencia del documento a la etiqueta html llamada "distance" */
let $distance = document.querySelector('#distance');

/*Creacion de variable clicks para saber en cuantos clics, encontramos el tesoro, y para eso va a comenzar en cero*/
let clicks = 0;

/*Si nosotros queremos saber el momento en el que el usuario da un clic, entonces colocamos el elemento mapa "$mapa", 
y para eso le vamos a agregar un escuchador al evento"addEventListener" y este nos indicara cuando el usuario haga clik,
en ese momento se va a ejecutar una funcion del evento "e" */
$map.addEventListener('click', function (e) {

  /*Impresion para saber si el clic esta funcionando con la imagen de el juego */
  console.log('click');

  /*Variable para saber en cuantos clics, el usuario encontra el tesoro, este a su vez va a ir incrementando*/
  clicks++;

  /*Colocamos la distancia, y para esto se utiliza la funcion "getDistance" esta funcion esta encargada de hacer uso  del teorema de 
  pitagoras, que a su vez esta recibe dos parametros. 1: El evento del clic y 2:  la ubicacion del mapa del tesoro de el juego*/
  let distance = getDistance(e, target);

  /*La funcion getDistanceHint, esta encargada de tener los diferentes tipos de distancias.colocando la varibale let para que me 
  devuelva un string, junto con distanceHint, y con la funcion "getDistanceHint" vamos a pasarle la distancia que ya estamos obteniendo 
  de la otra funcion, con el fin de que devuelva la distancia con las siguientes opciones: fria, caliente y asi saber a que distancia
  se encuentra el usuario del tesoro.*/
  let distanceHint = getDistanceHint(distance);

  /*Esa etiqueta distance  en su HTML le colocamos el string que esta devolviendo, y de esta manera nos va devolviendo la pista*/
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  /*Si la distancia, es menor a 20 esta bastnate cerca*/
    if (distance < 20 ) {

      /*Mandamos una alerta y le mostramos un mensaje ,has encontrado el tesoro agregando la cantidad de clics*/
      alert(`Found the treasure in ${clicks} clicks!`);

      /*Gracias a esto podemos refresacar la pagina en JavaScrip*/
      location.reload();
    }
});
