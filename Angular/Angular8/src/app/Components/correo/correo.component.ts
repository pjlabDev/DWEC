import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      title: 'Titulo del email',
      cuerpo: 'Cuerpo del correo, Cuerpo del correo, Cuerpo del correo,Cuerpo del correo,Cuerpo del correo',
      emisor: 'openwebinars@gmail.com',
      destinatario: 'pedraso@gmail.com'
    };
  }

  ngOnInit() {
  }

}
