/**Opciones obligatorios y no obligatorias en typescript**/

(()=>{

    /**en esta funcion todos los campos son obligatorios */
    function registro(cedula:number, nombre:string, telefono:number) {
        let user = [cedula, nombre, telefono]
        let usercreated = user.find(user=> user == nombre);
        return {
          message:'encontramos al usuario',
          user:usercreated
        }
    }

    let usercreated = registro(1315652, 'Alexis', 098675373);
    console.log(usercreated);

    /**Funcion para filtrar datos */

    function LugarDeNacimiento(nombre:string, cedula:number, nacionalidad:string ) {

      let datosUsuarios = [];
      /**Se pasan todos los elementos como si fueran 1 por 1 */
      datosUsuarios.push(...arguments);
      /**Se añade el usuario a una lista de datos */
      let filtrodatos = datosUsuarios.filter(datos=> datos == 'Ricardo');
      return {Usuario:filtrodatos}
    }
    let usuariodefecto:any = 'Linux';
    let usuariosNuevos = [{Usuario:usuariodefecto}];
    let listaUsuarios = LugarDeNacimiento("Ricardo", 2345, 'Ecuatoriana');
    usuariosNuevos.push(listaUsuarios);
    console.log(usuariosNuevos)

    /**Funcion para colocar valores por defecto en funciones */

    function ValoresPorDefecto(nombre:string  ='Alexandro') {
      if (nombre) {
        console.log(`her name is ${nombre}`)
      }else{
        console.log("usted" +nombre+ "no eligio el nombre por defecto")
      }
    }
    ValoresPorDefecto('linux');
})()
