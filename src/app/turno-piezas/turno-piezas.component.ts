import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-turno-piezas',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './turno-piezas.component.html',
  styleUrl: './turno-piezas.component.scss'
})
export class TurnoPiezasComponent implements OnInit {

  @Input() casilla: string = ""
  @Input() jugadores: any = []

  constructor() {
  }
  ngOnInit(): void {

  }


}
