"use strict";
/**esta es la forma en la cual podemos crear promesas
 * en typescript
 */
console.log('Iniciando las promesas');
(() => {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('se cumple la promesa');
        }, 1000);
    });
    promesa.then(mensaje => console.log(mensaje))
        .catch(error => console.warn(error));
    console.log('Final de la promesa');
})();
/**esta es la forma en la cual vamos a poder definir el tipado de las promesas
 * al momento de retornarlos
 */
/**Devolver la cantidad de dinero en el banco si es mayor a 3000$ */
/**necesitamos especificar el valor que devuele la promesa
 * en este caso  si se cumple devuelve un tipo string
 */
const DevolverDinero = (Cantidad) => {
    let Fondos = 3000;
    return new Promise((resolve, reject) => {
        if (Cantidad > Fondos) {
            resolve('felicidades si puede retirar');
        }
        else {
            reject('ups no puede retirar el dinero');
        }
    });
};
DevolverDinero(3200)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.warn(error));
