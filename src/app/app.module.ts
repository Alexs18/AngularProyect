import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header-Content/Header.component';
import { BodyContentComponent } from './Components/body-content/body-content.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
