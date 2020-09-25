import { Component, OnInit } from '@angular/core';
import {ServiceV2Service} from '../service-v2.service';

//Carga de la logica de negocios
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

//CLASE PRINCIPAL DE COMPONENTE DE LA LOGICA DEL NEGOCIO
//exportar recursos
export class LandingPageComponent implements OnInit {

  products = [];

  constructor(private serviceV2Service: ServiceV2Service) { }

  ngOnInit(): void {

    this.serviceV2Service.getProduct("products/").subscribe((data : any []) =>{

      console.log(data);
      this.products = data;
    });
  }

}
