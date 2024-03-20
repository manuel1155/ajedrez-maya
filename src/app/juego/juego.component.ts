import { AfterContentInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TurnoPiezasComponent } from '../turno-piezas/turno-piezas.component';
import { TableroComponent } from '../tablero/tablero.component';
import { Pieza } from '../core/models/Pieza';
import { Jugador } from '../core/models/Jugador';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [TurnoPiezasComponent, TableroComponent],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.scss'
})



export class JuegoComponent implements OnInit, AfterContentInit {

  @ViewChild(TableroComponent) tablero!: TableroComponent;
  @ViewChild(TurnoPiezasComponent) turnoPza!: TurnoPiezasComponent;

  posicionesPiezas = {
    "p-l-w": {
      x: -100,
      y: -100,
      img: ''
    },
    "p-l-b": {
      x: -100,
      y: -100,
      img: ''
    }
  };

  jugadores: Jugador[] = [];

  jugador_a: Jugador

  jugador_b: Jugador

  casilla_seleccionada = '';
  leadreWithe: Pieza
  leadreBlack: Pieza

  piezasJuego: Pieza[] = [];

  casillasBloqueadas: string[] = []

  constructor() {
    this.leadreWithe = new Pieza('p-l-w', 'Leader', 'white','./assets/white_leader.png')
    this.piezasJuego.push(this.leadreWithe)
    this.leadreBlack = new Pieza('p-l-b', 'Leader', 'black','./assets/black_leader.png')
    this.piezasJuego.push(this.leadreBlack)
   /*  this.leadreWithe = new Pieza('p-c-w', 'Capitan', 'white',)
    this.piezasJuego.push(this.leadreWithe)
    this.leadreBlack = new Pieza('p-c-b', 'Capitan', 'black',)
    this.piezasJuego.push(this.leadreBlack) */

    this.postDataPosicionesPiezas()

    this.jugador_a = new Jugador(1, 'Jugadora A', 'w', true, 0, ['J07', 'P01'],'./assets/mujer.png')
    this.jugadores.push(this.jugador_a)
    this.jugador_b = new Jugador(2, 'Jugador B', 'b', false, 0, ['G07', 'A01'],'./assets/hombre.png')
    this.jugadores.push(this.jugador_b)

    this.actualizarCasillasBloqueadas('')
  }
  ngAfterContentInit(): void {
  }
  ngOnInit(): void {
    
  }

  actualizarPosiciones() {
    console.log(this.piezasJuego)
    console.log(this.piezasJuego.filter(pza=>pza.id=='p-l-w')[0])
    return {
      "p-l-w": {
        x: this.piezasJuego.filter(pza=>pza.id=='p-l-w')[0].posicion.x,
        y: this.piezasJuego.filter(pza=>pza.id=='p-l-w')[0].posicion.y,
        img: this.piezasJuego.filter(pza=>pza.id=='p-l-w')[0].imagen,
        casilla: 'c-' + this.piezasJuego.filter(pza=>pza.id=='p-l-w')[0].posicion.casilla,
        activa: this.piezasJuego.filter(pza=>pza.id=='p-l-w')[0].activa
      },
      "p-l-b": {
        x: this.piezasJuego.filter(pza=>pza.id=='p-l-b')[0].posicion.x,
        y: this.piezasJuego.filter(pza=>pza.id=='p-l-b')[0].posicion.y,
        img: this.piezasJuego.filter(pza=>pza.id=='p-l-b')[0].imagen,
        casilla: 'c-' + this.piezasJuego.filter(pza=>pza.id=='p-l-b')[0].posicion.casilla,
        activa: this.piezasJuego.filter(pza=>pza.id=='p-l-b')[0].activa
      }
    }

  }

  postDataPosicionesPiezas() {
    this.posicionesPiezas = this.actualizarPosiciones();
  }

  getDataClicTablero(casilla: string) {
    this.casilla_seleccionada = casilla;
    let findPza = this.piezasJuego.filter(pza => pza.id == this.casilla_seleccionada)

    if (findPza.length > 0) {
      this.piezasJuego.map(pza => pza._activo = false);
      findPza[0]._activo = true;
      this.actualizarPosiciones();
    }
    console.log(this.piezasJuego);
  }

  actualizarCasillasBloqueadas(casilla: string) {
    this.casillasBloqueadas = []
    if (casilla != '') this.casillasBloqueadas.push(casilla)
    for (let posision of this.piezasJuego) {
      this.casillasBloqueadas.push(
        posision.posicion.casilla
      )
    }
  }

  getNewPosicion(nuevaCasilla: string) {
    let origenPza = this.piezasJuego.filter(pza => pza.activa)[0].posicion.casilla

    let findPza = this.piezasJuego.filter(pza => pza.activa)[0];

    findPza.setPosicionPza(nuevaCasilla.substring(2));

    this.tablero.posicionesPiezas = this.actualizarPosiciones();
    this.actualizarCasillasBloqueadas(origenPza);

    this.tablero.casillasBloqueadas = this.casillasBloqueadas
    let jugadorActivo = this.jugadores.filter(jugador => jugador.activo)[0]

    if (jugadorActivo.turno == 2) {

      let jugadorInactivo = this.jugadores.filter(jugador => !jugador.activo)[0]
      jugadorInactivo.setActivo(true)
      jugadorInactivo.setTurno(0)
      this.tablero.colorTurno = jugadorInactivo.color

      jugadorActivo.setActivo(false)
      jugadorActivo.setTurno(0)
    } else {
      jugadorActivo.setTurno(jugadorActivo.turno + 1)
      jugadorActivo.setCasillasTurno(nuevaCasilla)
    }
    this.turnoPza.jugadores = this.jugadores;
    this.tablero.resetTablero();
  }

}
