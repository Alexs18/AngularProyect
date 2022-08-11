/**Definimos el Decorador*/
/**es como si apuntaramos a imprimir la clase como tal
 */
function Decorador(Data:Function):void {
  console.warn('este es el decorador')
  console.log(`Bienvenidas: ${Data.name} del mundo`)
}
/**Definimos una clase a la cual le añadiremos un decorador */
/**Los decoradores son aquellos suplementos que pasamos a una clase antes de su definicion */
@Decorador
class Especies{
  constructor(
    public nombre:string,
    public raza:string,
    public edad:number
  ){

  }

  ShowEspecie(){
    console.log(`nombre: ${this.nombre} raza: ${this.raza}`)
  }
}

let Perro = new Especies('Toby', 'Perro', 22);
Perro.ShowEspecie();
