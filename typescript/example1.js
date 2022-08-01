"use strict";
(() => {
    /**Inicio */
    function sayyourname(name, age) {
        console.log(`her name is ${name}, her age is ${age}`);
    }
    let values = {
        name: 'alex',
        age: 123
    };
    sayyourname(values.name, values.age);
    /**cambio de variable: el cambio de variable no sera el mismo que en javascript, este
     * dependera de su tipo de datos
     */
})();
let nombre = 'Alexis';
nombre = 'LINUX';
let add = 'linux';
console.log(`su nombre es ${nombre}`);
/**Al crear datos podemos tiparlos */
let apellido = 'lopezz';
let edadtrabando = 2;
/**Les decimos los tipos de datos con los cuale
 * su valor podra ser reasignado
 */
let entornos = 123;
entornos = 1;
