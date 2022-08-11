/**Ejercicio 1 */
// Uso de Let y Const
    var nombre = "Ricardo Tapia";
    var edad = 23;
    var PERSONAJE = {
      nombre: nombre,
      edad: edad
    };

    const nombreB:string = "Alexis Lopez";
    const edadB:number = 23;
    const Estudiante = {
      nombre:nombreB,
      edad:edadB
    }

    /**Ejercicio 2 */
    // Cree una interfaz que sirva para validar el siguiente objeto
    interface SuperHero{
      nombre:string,
      skills:string[]
    }
    var batman:SuperHero = {
      nombre: "Bruno Díaz",
      skills: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
    }

/**Ejercicio 3 */
    // Convertir esta funcion a una funcion de flecha
    // function resultadoDoble( a, b ){
    //   return (a + b) * 2
    // }

    const DoubleResult=(a:number, b:number)=>{
      return (a+b) *2
    }



    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    // function getAvenger( nombre, poder, arma ){
    //   var mensaje;
    //   if( poder ){
    //      mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    //   }else{
    //      mensaje = nombre + " tiene un " + poder
    //   }
    // };
    function Vengadores(nombre:string, poder?:string, arma:string = 'Arco') {
      var mensaje;
      if( poder ){
         mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
      }else{
         mensaje = nombre + " tiene un " + poder
      }
    }


    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

    class rectangulo {
      constructor(public base:number, public altura:number){

      }
      Calcular():number{
        return this.base * this.altura
      }
    }
