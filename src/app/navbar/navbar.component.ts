import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	//De esta variable depende si se muestra o no la seccioón de comentarios
	//Crear función que genere true si es que está loggeado
	private isLoggedIn: Boolean = false;

	constructor() { }

	ngOnInit() {
	}

}
