import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent{

  anio:number;
  constructor() {
    this.anio = new Date().getFullYear();
   }

}
