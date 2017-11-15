import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.component.html',
  styleUrls: ['./electronica.component.css']
})
export class ElectronicaComponent implements OnInit {

	//De esta variable depende si se muestra o no la seccioón de comentarios
	//Crear función que genere true si es que está loggeado
	private isLoggedIn: Boolean = false;

	constructor() { }

	ngOnInit() {
	}


	//Alerta de asesoría
	alertaAsesoria() {
		alert("Tu asesoría comenzará pronto");
	}

}
