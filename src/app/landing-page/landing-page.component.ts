/*LOGICA DE NEGOCIO LANDING PAGE*/
import { Component, OnInit } from '@angular/core';
import {ServiceV2Service} from '../service-v2.service';

//Carga de la logica de negocios
//decoradores
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
//selector -> componente/carpeta que corresponde
//templateurl -> html del componente
//styleurl -> css del componente 

//CLASE PRINCIPAL DE COMPONENTE DE LA LOGICA DEL NEGOCIO
//exportar recursos
export class LandingPageComponent implements OnInit {
  status: Boolean = false;
  products = [];
  info = "No hay datos";

  constructor(private serviceV2Service: ServiceV2Service) { }

  ngOnInit(): void {
    this.serviceV2Service.getProduct("products/").subscribe((data : any []) =>{
      console.log(data);
      this.products = data;
    });
  }

  /*
  sendService(){
    this.serviceV2Service.getProduct("products/").subscribe((data: any[]) =>{
      console.log(data);
      this.products = data;
    })
    this.info = 'Si hay datos';
  }

  cleanService(){
    this.products = [];
  }
*/
/*
  showHide(){
    this.status = !this.status; //toggle
    if (this.status) {
      this.nameButton ='OCULTAR';
    }
    else{
      this.nameButton = 'MOSTRAR';
    }
  }
  */
}
