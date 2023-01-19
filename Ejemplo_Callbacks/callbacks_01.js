// Utilizar un array de prueba
let valoresOriginales = [1, 2, 3, 4, 5]

//Estamos acostumbrados a leer una función map de la siguiente forma:
let nuevosValores = valoresOriginales.map(x=>x+1) 

/*
    Sin embargo, lo que pasamos dentro de una función map es otra función (arrow function) que le indica que sume 1 al valor del numero del array

    ¿Siempre tenemos que sumar 1?
    ¡No!, podemos pasarle cualquier parametro que nosotros definamos en el codigo y map lo va a ejecutar como tal, si el parametro es correcto.  
*/
let otrosValores = valoresOriginales.map(x=>x*2);
let masValores = valoresOriginales.map(x=>"a");

/*
    Notamos que no importa cuanto cambie la función que estamos pasando a map ya que map esta diseñado para recibir una función como parametro.

    Ahora si, vamos a estructurar un callback por fuera
*/

//Callback por fuera
const funcionCallback = (valor) => { // evaluar si un numero es par
    if(valor%2 === 0){
        return valor
    } else {
        return "No es par"
    }
}

const evaluacionPares = valoresOriginales.map(funcionCallback);
console.log(evaluacionPares);

/*
EXTRA:

Queremos que una función se ejecute sobre el mismo array y no tener que pasarlo como parametro, para eso debemos agregar nuestra nueva funcion en el prototipo del objeto array

*/

Array.prototype.miPropiaFuncionMap = function(callback){
    let nuevoArray = [];
    for(let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArray.push(nuevoValor)
    }
    return nuevoArray;
}
let arrayPrueba = [1, 2, 3, 4, 5];
let newValues = arrayPrueba.miPropiaFuncionMap(x=>x+1)
console.log(newValues)