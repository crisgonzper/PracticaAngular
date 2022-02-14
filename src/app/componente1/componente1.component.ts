import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  curso1:any={nombre:"Beca Angular", total_dias:9, descripcion:"Curso sobre Angualr y Typescript"};
  curso2:any={nombre:"Beca Java", total_dias:10, descripcion:"formación sobre Java"};
  contador:number=0;
  auxN:any;
  auxD:any;

  constructor() {
    console.log("Creación componente 1");
   }

  ngOnInit(): void {
  }

  intercambiarAngular():void
  {

    
    this.contador=this.contador+1;
    this.auxN=this.curso1.nombre;
    this.auxD=this.curso1.descripcion;
    this.curso1.nombre=this.curso2.nombre;
    this.curso1.descripcion=this.curso2.descripcion;
    this.curso2.nombre=this.auxN;
    this.curso2.descripcion=this.auxD;
  }

}
