import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { NavbarComponent } from './navbar/navbar.component';

import { appRoutes } from './routes/routes';
import { FooterComponent } from './footer/footer.component';
import { CienciasBasicasComponent } from './ciencias-basicas/ciencias-basicas.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AsesoriasComponent,
    NavbarComponent,
    FooterComponent,
    CienciasBasicasComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
