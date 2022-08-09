"use strict";
/**Las clases en typescript nos sirven para no cometer errores en javascript
 * por ejemplo la inicializacion de nuevos objetos
 */
class empresa {
    constructor() {
        /**Inicializamos los valores por defecto en una clase*/
        this.nombre = 'diverzu';
        this.vigencia = '20 años';
        this.publica = false;
        this.privada = true;
    }
}
/**instanciamos la clase */
let Diverzu = new empresa();
console.log(Diverzu);
class empleados {
    constructor(nombre, apellido, estadocivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estadocivil = estadocivil;
    }
}
let Alexis = new empleados('alexis', 'lopez', true);
console.log('el nuevo empleado es ');
console.log(Alexis);
