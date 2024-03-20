import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoordenadasPosicionService } from '../core/service/coordenadas-posicion/coordenadas-posicion.service';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent implements OnInit {

  @Output() casillaSeleccionada = new EventEmitter<string>();
  @Output() moverPza = new EventEmitter<string>();
  @Input() posicionesPiezas: any = null;
  @Input() colorTurno: string = 'w'
  @Input() casillasBloqueadas: string[] = [];
  ngOnInit(): void {
  }

  constructor(public cpService: CoordenadasPosicionService) {

  }

  postData(e: any) {
    console.log(e.target.id)
    if ((e.target.id == 'p-l-b' || e.target.id == 'p-l-w') && e.target.id.charAt(e.target.id.length - 1) == this.colorTurno) {
      this.casillaSeleccionada.emit(e.target.id)
      this.resetTablero();
      const casillaPosicion = document.getElementById(this.posicionesPiezas[e.target.id]['casilla'])

      let clases = casillaPosicion?.classList
      let orientacion = 'n'
      if (clases) {
        if (clases.contains('c-sur')) orientacion = 's'
        let casillasPosibles = this.cpService.calculaCasillasLider(this.posicionesPiezas[e.target.id]['casilla'].substring(2), orientacion, 0)
        console.log('casillas posibles: ' + casillasPosibles)
        console.log('casillas ocupadas: ' + this.casillasBloqueadas);
        let editCasillasPosibles =[];
        for (let casilla of casillasPosibles) {
          if (!this.casillasBloqueadas.includes(casilla)) editCasillasPosibles.push(casilla) 
        }
        console.log('casillas posibles edit: ' + editCasillasPosibles);

        for (let casilla of editCasillasPosibles) {
          const element = document.getElementById('c-' + casilla);

          element?.classList.remove('c-viable');
          element?.classList.add('c-viable');
        }

      }
    }
    else if (e.target.classList.contains('c-viable')) {
      this.casillaSeleccionada.emit(e.target.id)
      this.moverPza.emit(e.target.id);
    }
  }

  /* tableroMoviminetos(piezaId: string){
    if ((piezaId == 'p-l-b' || piezaId == 'p-l-w') && piezaId.charAt(piezaId.length - 1) == this.colorTurno) {
      this.casillaSeleccionada.emit(piezaId)
      this.resetTablero();
      const casillaPosicion = document.getElementById(this.posicionesPiezas[piezaId]['casilla'])

      let clases = casillaPosicion?.classList
      let orientacion = 'n'
      if (clases) {
        if (clases.contains('c-sur')) orientacion = 's'
        let casillasPosibles = this.cpService.calculaCasillasLider(this.posicionesPiezas[piezaId]['casilla'].substring(2), orientacion, 0)
        console.log('casillas posibles: ' + casillasPosibles)
        console.log('casillas ocupadas: ' + this.casillasBloqueadas);
        let editCasillasPosibles =[];
        for (let casilla of casillasPosibles) {
          if (!this.casillasBloqueadas.includes(casilla)) editCasillasPosibles.push(casilla) 
        }
        console.log('casillas posibles edit: ' + editCasillasPosibles);

        for (let casilla of editCasillasPosibles) {
          const element = document.getElementById('c-' + casilla);

          element?.classList.remove('c-viable');
          element?.classList.add('c-viable');
        }

      }
    }
    else if (e.target.classList.contains('c-viable')) {
      this.casillaSeleccionada.emit(e.target.id)
      this.moverPza.emit(e.target.id);
    }
  } */


  resetTablero() {
    const casillasNorte = document.getElementsByClassName('c-norte');
    const casillasSur = document.getElementsByClassName('c-sur');

    for (let i = 0; i < casillasNorte.length; i++) casillasNorte[i].classList.remove('c-viable')
    for (let i = 0; i < casillasSur.length; i++) casillasSur[i].classList.remove('c-viable')

  }

}
