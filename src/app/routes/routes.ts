import { RouterModule, Router, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component'
import { HomeComponent } from '../home/home.component';
import { AsesoriasComponent } from '../asesorias/asesorias.component';
import { CienciasBasicasComponent } from '../ciencias-basicas/ciencias-basicas.component';


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
		path: 'registro',
		component: RegistroComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'AsesoriasComponent',
		component: AsesoriasComponent
	},
	{
		path: 'ciencias-basicas',
		component: CienciasBasicasComponent
	}
	//Continuar comn las rutas, y actualizar la webapp con las rutas nuevas...

]