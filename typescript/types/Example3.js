"use strict";
(() => {
    /**Destructuración  de datos desde los parametros de una función */
    /**Desestructuracion normal dentro de un arreglo y un objeto */
    /**Destructuración de los objetos */
    let Carreras = {
        octavo: 'Aplicaciones Moviles',
        noveno: 'Gestion de proyectos',
        decimo: 'tesis'
    };
    const { octavo, noveno } = Carreras;
    console.log(`Las materias faltantes son ${octavo}, y en 9no son ${noveno}`);
    /**Destructuración de arreglos*/
    let MateriasDecimo = ['Informatica Forense', 'Tesis', 'Seminario'];
    const [uno, , tres] = MateriasDecimo;
    console.log(`Las materias especificas de 10mo son: ${uno}, ${tres}`);
    /**Funciones pasando parametros desestructurados */
    /**Debemos desestructurarlo dependiendo de lo que le pasemos, en este caso
     * estamos pasando el dato de un objeto
     */
    const FuncionObject = ({ octavo }) => {
        console.log('mostrando las materias del objeto en el nivel: ' + octavo);
    };
    FuncionObject(Carreras);
    /**Creamos un nuevo Array con las propiedades de typescript*/
    let Ocupaciones = ['Arquitecto', 'Ingeniero', 'Plomero'];
    /**Al igual que la función anterior, vamos a desestructurarla desde una función */
    const FuncionArray = ([Profesion1, Profesion2]) => {
        console.log(Profesion1.length);
        console.log('sus profesiones son: ' + Profesion1 + ' Y ' + Profesion2);
    };
    FuncionArray(Ocupaciones);
})();
