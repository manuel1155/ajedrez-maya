import { Component, OnInit, Input } from '@angular/core';
import { pieza } from '../core/models/pieza';

@Component({
  selector: 'app-turno-piezas',
  standalone: true,
  imports: [],
  templateUrl: './turno-piezas.component.html',
  styleUrl: './turno-piezas.component.scss'
})
export class TurnoPiezasComponent implements OnInit {

  @Input() casilla: string =""; 

  LB: pieza;



  constructor(){
    this.LB=new pieza('l','w','c-A01')
  }
  ngOnInit(): void {

  }


  

}
