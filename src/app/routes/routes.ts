import { RouterModule, Router, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component'
import { HomeComponent } from '../home/home.component';
import { AsesoriasComponent } from '../asesorias/asesorias.component';
import { CienciasBasicasComponent } from '../ciencias-basicas/ciencias-basicas.component';
import { ProgramacionComponent } from '../programacion/programacion.component';
import { ElectronicaComponent } from '../electronica/electronica.component';
import { CienciasHumanidadesComponent } from '../ciencias-humanidades/ciencias-humanidades.component';


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
	},
	{
		path: 'programacion',
		component: ProgramacionComponent
	},
	{
		path: 'electronica',
		component: ElectronicaComponent
	},
	{
		path: 'ciencias-humanidades',
		component: CienciasHumanidadesComponent
	}
	//Continuar comn las rutas, y actualizar la webapp con las rutas nuevas...

]