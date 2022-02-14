import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input("curso1") curso1C2:any;

  @Input("contador") contadorC2:any;
  constructor() { }

  ngOnInit(): void {
  }

}
