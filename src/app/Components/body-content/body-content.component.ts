import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.scss']
})
export class BodyContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  estado:boolean = false;
  libros:any[] = [{
    id:1,
    title:'El arte del engaño',
    autor:'Daniel Tobau'
  },
  {
    id:2,
    title:'Psicología Oscura',
    autor:'Steven Thunder'
  },
  {
    id:3,
    title:'Codigo Limpio',
    autor:'Roberth C Martin'
  }
]

}
