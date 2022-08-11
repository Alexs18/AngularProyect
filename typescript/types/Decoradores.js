"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**Definimos el Decorador*/
/**es como si apuntaramos a imprimir la clase como tal
 */
function Decorador(Data) {
    console.warn('este es el decorador');
    console.log(`Bienvenidas: ${Data.name} del mundo`);
}
/**Definimos una clase a la cual le añadiremos un decorador */
/**Los decoradores son aquellos suplementos que pasamos a una clase antes de su definicion */
let Especies = class Especies {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    ShowEspecie() {
        console.log(`nombre: ${this.nombre} raza: ${this.raza}`);
    }
};
Especies = __decorate([
    Decorador
], Especies);
let Perro = new Especies('Toby', 'Perro', 22);
Perro.ShowEspecie();
