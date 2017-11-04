import { RouterModule, Router, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AsesoriasComponent } from '../asesorias/asesorias.component';


export const appRoutes: Routes = [

	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'AsesoriasComponent',
		component: AsesoriasComponent
	}
	//Continuar comn las rutas, y actualizar la webapp con las rutas nuevas...

]