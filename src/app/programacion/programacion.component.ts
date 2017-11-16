import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

	//De esta variable depende si se muestra o no la seccioón de comentarios
	//Crear función que genere true si es que está loggeado
	private isLoggedIn: Boolean = true;

	constructor() { }

	ngOnInit() {
	}

	//Alerta de asesoría
	alertaAsesoria() {
		alert("Tu asesoría comenzará pronto");
	}

}
