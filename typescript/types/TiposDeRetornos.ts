/**En typescript debemos especificar el tipo de retoinro que le damos  */

/**Ejemplo: si tenemos una función que retorna un valor de un proceso, esta debe de ser especificada */

/**Separaremos un texto en un array */
const SepararArray =(texto:string)=>{

    let TextoArray:string[] = texto.split(' ');
    return TextoArray


}
let TextoConvertir = 'ALEXIS RICARDO LOPEZ MERO'
let nuevotexto = SepararArray(TextoConvertir);
console.log(nuevotexto)
