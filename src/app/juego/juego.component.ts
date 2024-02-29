import { Component } from '@angular/core';
import { TurnoPiezasComponent } from '../turno-piezas/turno-piezas.component';
import { TableroComponent } from '../tablero/tablero.component';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [TurnoPiezasComponent,TableroComponent],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.scss'
})



export class JuegoComponent {

  casilla_seleccionada = '';

  getData(casilla: string){
    this.casilla_seleccionada = casilla;
    console.log(' - getData: ',this.casilla_seleccionada);
  }

}
