/*Agregamos la funcion para poder generar numeros aleatorios, en una variable indicamos el nombre de la funcion posteriormente 
colocamos un parametro de una funcion flecha, y gracias a esto podemos escribir las nuevas funciones.*/
let getRandomNumber = size => {

  /*colocamos la funcion Maht, la cual nos permite jugar con funciones matematicas con su metodo floor, 
  colocamos el metodo Random que va ha generar un metodo aleatrorio desde el 0 y con  size, va a 
  multiplicar el numero aleatorio con el tamaño que uno desee */
  return Math.floor(Math.random() * size);
}

  /*colocamos la variable con el nombre la funcion para poder medir la distancia
  tomando a su vez dos parametros, los cuales el. 1er punto: es el punto donde 
  el usuario ha dado un clik, nombrado(e significado de "evento"), colocamos 
  en donde esta el mapa del tesoro nombrado(target) y estos dos puntos, son los 
  que vamos a tener que medir y tendremos que calcularlos*/
let getDistance = (e, target) => { 

  /*Calcularemos eje de las X y Y, vamos a obtener la diferencia  del eje de las X. Para ello tendremos que obtener primero 
  la distancia de donde esta ubicado el clik del usuario del e.offsetX. */
let diffX = e.offsetX - target.x; 

/*Esta sera la diferencia del eje de las y, simplemente hacemos lo mismo, vamos a obtener la diferencia  del eje de las Y. 
Para ello tendremos que obtener primero la distancia de donde esta ubicado el clik del usuario. Del e.offsetY.*/
let diffY = e.offsetY - target.y;

/*Aplicarmos el teorema de pitagoras, vamos a retornar desde la biblioteca de matematicas, vamos a obtener la raiz cuadrada de 
la suma de los catetos al cuadrado(colocamos al cuadrado al eje de las X  y para hacer eso lo  mulltiplico por si mismo) 
y lo vamos a sumar con y, que seria practicamente al cuadrado. Y eso es loq ue necesitamos para obtener la distancia entre los dos puntos*/
return Math.sqrt((diffX * diffX) + (diffY * diffY));

}
let getDistanceHint = distance => { /*Funcion para darle al usuario pistas de que tan cerca esta del tesoro
                                    Tomamos como parametros con (distance) la distancia la vamos a obtener gracias a la funcion getDistance*/

  if (distance < 30) {/*Si la distancia  que me esta dando es menor a 30, es decir, esta muy cerca del mapa del mapa del tesoro*/

    return "Boiling hot!"; /*entonces retornamos que esta hirviendo, osea, que esta muy cerca */

  } 
    else if (distance < 40) {/* Si la distancia es menor a 40, es dicir, no esta tan cerca */

    return "Really Hot"; /*entonces retornamos que esta muy caliente */

  } 
    else if (distance < 60) {/*Si la distancia es menor a 60 */

    return "Hot";/* retornamos que esta caliente*/

  } 
    else if (distance < 100) { /*Si la distancia es menos a 100 */
    
    return "Warm";/* retornamos que esta calido */

  } 
    else if (distance < 180) {/*Si la distancia es menor a 180*/

    return "Cold";/* retornamos que esta frio*/

  } 
    else if (distance < 360) {/*Si la diatncia es menor a 360 */

    return "Really Cold";/*retornamos que esta verdaderamente frio*/

  }
  else { /*Cuuando no hay ninguno de estos parametros */

    return "Freezing!";/*retornamos a congelado */
  }
}
