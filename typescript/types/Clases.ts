/**Las clases en typescript nos sirven para no cometer errores en javascript
 * por ejemplo la inicializacion de nuevos objetos
 */

class empresa{
  /**Inicializamos los valores por defecto en una clase*/
  nombre:string ='diverzu'
  vigencia:string = '20 años'
  publica:boolean = false
  privada:boolean = true
}

/**instanciamos la clase */
let Diverzu = new empresa()
console.log(Diverzu)

class empleados{
  constructor(public nombre:string, public apellido:string,
    public estadocivil:boolean){
  }
}

let Alexis = new empleados('alexis', 'lopez', true);

console.log('el nuevo empleado es ');
console.log(Alexis)
