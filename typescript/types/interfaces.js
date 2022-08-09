"use strict";
/**las interfaces son formas de especificar a typescript que usemos ciertas
 * caracteristicas dentro de la declaración de algo
 */
(() => {
    /**Nota: las interfaces no se veran reflejadas en la transpilacion a js*/
    const EntrevistarCandidatos = (candidato) => {
        console.log(`el candidato a entrevistar es
      ${candidato.nombre} ${candidato.apellido}`);
    };
    let candidato1 = {
        nombre: 'Alexis',
        apellido: 'Lopez'
    };
    EntrevistarCandidatos(candidato1);
})();
