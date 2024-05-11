import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PiezasService } from '../core/services/piezas.service';
import { Pieza } from '../core/models/pieza';
import { NgFor, NgIf } from '@angular/common';
import Jugada, { Jugador } from '../core/models/Jugador';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent implements OnInit {

  @Output() casillaSeleccionada = new EventEmitter<string>();
  @Output() moverPza = new EventEmitter<string>();
  @Input() piezasJuego: any = null;
  @Input() colorTurno: string = 'n'
  @Input() casillasBloqueadas: string[] = [];
  @Input() jugadores: Jugador[] = [];
  ngOnInit(): void {

    console.log(this.piezasJuego)

  }

  constructor(public pzasService: PiezasService) {

  }

  activarPieza(piezaSeleccionada: Pieza){
    const sombras = document.getElementsByClassName('sombra');

    for (let i = 0; i < sombras.length; i++) {
      sombras[i].classList.remove('pza-inactiva')
      sombras[i].classList.remove('pza-activa')
      sombras[i].classList.add('pza-inactiva')
    }

    const sombraActiva = document.getElementById(piezaSeleccionada.id_html+'-a-s');

    sombraActiva?.classList.remove('pza-inactiva')
    sombraActiva?.classList.add('pza-activa')

    this.piezasJuego.map((pza: Pieza) => {
      let activo=false
      if(pza.id_html === piezaSeleccionada.id_html) activo=true  
      pza.activa = activo
    })

  }

  postData(e: any) {
    this.casillaSeleccionada.emit(e.target.id)
    let id_html = e.target.id
    id_html = id_html.replace('-aux','')
    console.log(id_html)

    if(!(id_html.includes(this.colorTurno)) && id_html.includes('p-')){
      let color = this.colorTurno == 'b' ? 'blancas' : 'negras'
      Swal.fire({
        title: 'Pieza inactiva',
        text: 'Es turno de las piezas ' + color,
        icon: 'info',
        confirmButtonText: 'Ok'
      }) }
    

    let pza: Pieza = this.piezasJuego.filter( (pza:any) => pza.id_html === id_html && pza.color == this.colorTurno)[0]
    if(pza){
      console.log('pza encontrada')
      this.activarPieza(pza);

      let opciones: any = this.pzasService.getOpcionesMovimiento(pza)

      let dataViables:any = []

      let ultimaJugada: Jugada = this.jugadores.filter( j=> j.activo)[0].getUltimoMovimiento();

      if(ultimaJugada.pzaId == pza.id_pza && !(this.casillasBloqueadas.includes(ultimaJugada.posicion))){
        if(ultimaJugada.posicion.length == 9){
          this.casillasBloqueadas.push(ultimaJugada.posicion.substring(0,3))
          this.casillasBloqueadas.push(ultimaJugada.posicion.substring(3,6))
          this.casillasBloqueadas.push(ultimaJugada.posicion.substring(6))
        }else if(ultimaJugada.posicion.length == 6){
          this.casillasBloqueadas.push(ultimaJugada.posicion.substring(0,3))
          this.casillasBloqueadas.push(ultimaJugada.posicion.substring(3))
        }
        else this.casillasBloqueadas.push(ultimaJugada.posicion)
      }

      for (let opcion of opciones) {
        if(opcion.posicion_destino.length == 9){
          if(
            !this.casillasBloqueadas.includes(opcion.posicion_destino.substring(0,3)) &&
            !this.casillasBloqueadas.includes(opcion.posicion_destino.substring(3,6)) &&
            !this.casillasBloqueadas.includes(opcion.posicion_destino.substring(6))){
              dataViables.push(opcion.posicion_destino.substring(0,3))
              dataViables.push(opcion.posicion_destino.substring(3,6))
              dataViables.push(opcion.posicion_destino.substring(6))
          }
        }
        if(opcion.posicion_destino.length == 6){
          if(
            !this.casillasBloqueadas.includes(opcion.posicion_destino.substring(0,3)) &&
            !this.casillasBloqueadas.includes(opcion.posicion_destino.substring(3,6)) &&
            !this.casillasBloqueadas.includes(opcion.posicion_destino.substring(6))){
              dataViables.push(opcion.posicion_destino.substring(0,3))
              dataViables.push(opcion.posicion_destino.substring(3))
          }
        }
        else if(opcion.posicion_destino.length == 3)
          if (!this.casillasBloqueadas.includes(opcion.posicion_destino)) dataViables.push(opcion.posicion_destino)
      }

      pza.setOpcionesMov(opciones);
      this.pintarPosibles(dataViables)

    }else if(e.target.classList.contains('c-viable')){
      console.log('Soy casilla posible');
      this.moverPza.emit(e.target.id);
    }else{
      console.log('pza NO encontrada ni casilla posible')
    }
  }

  pintarPosibles(casillasPosibles: string[]) {
    this.resetTablero();

    for (let casilla of casillasPosibles) {
      const element = document.getElementById('c-' + casilla);
      element?.classList.remove('c-viable');
      element?.classList.add('c-viable');
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
