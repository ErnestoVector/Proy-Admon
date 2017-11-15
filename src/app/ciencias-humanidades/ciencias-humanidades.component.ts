import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciencias-humanidades',
  templateUrl: './ciencias-humanidades.component.html',
  styleUrls: ['./ciencias-humanidades.component.css']
})
export class CienciasHumanidadesComponent implements OnInit {

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
