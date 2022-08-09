/**las interfaces son formas de especificar a typescript que usemos ciertas
 * caracteristicas dentro de la declaración de algo
 */

(()=>{

  /**estas son las especificaciones que tendra nuestros objetos que creemos*/
  interface Personas{
    nombre:string,
    apellido:string,
    trabajo?:boolean
  }
  /**Nota: las interfaces no se veran reflejadas en la transpilacion a js*/

  const EntrevistarCandidatos =(candidato:Personas)=>{
    console.log(`el candidato a entrevistar es
      ${candidato.nombre} ${candidato.apellido}`);
  }

  let candidato1:Personas = {
    nombre:'Alexis',
    apellido:'Lopez'
  }

  EntrevistarCandidatos(candidato1)

})()

