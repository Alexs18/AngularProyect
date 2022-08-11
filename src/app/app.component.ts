import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  Calcular(number:number){
    return {
      number:number+10,
      message:'welcome'
    }
  }
}
