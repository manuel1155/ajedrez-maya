import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { TurnoPiezasComponent } from '../turno-piezas/turno-piezas.component';
import { TableroComponent } from '../tablero/tablero.component';
import { Jugador } from '../core/models/Jugador';
import { Pieza } from '../core/models/pieza';
import { PiezasService } from '../core/services/piezas.service';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [TurnoPiezasComponent, TableroComponent],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.scss',
})
export class JuegoComponent implements OnInit, AfterContentInit {
  @ViewChild(TableroComponent) tablero!: TableroComponent;
  @ViewChild(TurnoPiezasComponent) turnoPza!: TurnoPiezasComponent;

  jugadores: Jugador[] = [];

  jugador_a: Jugador;

  jugador_b: Jugador;

  casilla_seleccionada = '';

  piezasJuego: Pieza[] = [];

  casillasBloqueadas: string[] = [];

  constructor(pzasSevice: PiezasService) {
    let pzas = pzasSevice.getPiezasLista();

    for (let pza of pzas) {
      this.piezasJuego.push(new Pieza(pza.id, pza.nombre, 'b'));
      this.piezasJuego.push(new Pieza(pza.id, pza.nombre, 'n'));
    }

    this.jugador_a = new Jugador(
      1,
      'Jugadora A',
      'n',
      true,
      0,
      ['J07', 'P01'],
      './assets/mujer.png'
    );
    this.jugadores.push(this.jugador_a);
    this.jugador_b = new Jugador(
      2,
      'Jugador B',
      'b',
      false,
      0,
      ['G07', 'A01'],
      './assets/hombre.png'
    );
    this.jugadores.push(this.jugador_b);
    this.actualizarCasillasBloqueadas();

  }
  ngAfterContentInit(): void {}
  ngOnInit(): void {}

  actualizarPosiciones() {
    /* console.log(this.piezasJuego)
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
 */

    return {};
  }

  postDataPosicionesPiezas() {
    //this.posicionesPiezas = this.actualizarPosiciones();
  }

  getDataClicTablero(casilla: string) {
    this.casilla_seleccionada = casilla;
    let findPza = this.piezasJuego.filter(
      (pza) => pza.id_html == this.casilla_seleccionada
    );

    if (findPza.length > 0) {
      this.piezasJuego.map((pza) => (pza._activo = false));
      findPza[0]._activo = true;
      this.actualizarPosiciones();
    }
  }

  actualizarCasillasBloqueadas() {
    this.casillasBloqueadas = [];
    for (let pza of this.piezasJuego) {
      if (pza.posicion.length == 3) this.casillasBloqueadas.push(pza.posicion);
      else if (pza.posicion.length == 6) {
        this.casillasBloqueadas.push(pza.posicion.substring(0, 3));
        this.casillasBloqueadas.push(pza.posicion.substring(3));
      } else if (pza.posicion.length == 9) {
        this.casillasBloqueadas.push(pza.posicion.substring(0, 3));
        this.casillasBloqueadas.push(pza.posicion.substring(3, 6));
        this.casillasBloqueadas.push(pza.posicion.substring(6));
      }
    }
  }

  async getNewPosicion(nuevaCasilla: string) {
    console.log(nuevaCasilla);

    let findPza = this.piezasJuego.filter((pza) => pza.activa)[0];

    let casillaMov: any = await findPza.setPosicionPza(nuevaCasilla.substring(2));

    const sombras = document.getElementsByClassName('sombra');

    for (let i = 0; i < sombras.length; i++) {
      sombras[i].classList.remove('pza-inactiva')
      sombras[i].classList.remove('pza-activa')
      sombras[i].classList.add('pza-inactiva')
    }


    this.actualizarCasillasBloqueadas();

    this.tablero.casillasBloqueadas = this.casillasBloqueadas;
    let jugadorActivo = this.jugadores.filter((jugador) => jugador.activo)[0];

    if (jugadorActivo.turno == 2) {
      let jugadorInactivo = this.jugadores.filter((jugador) => !jugador.activo)[0];
      jugadorInactivo.setActivo(true);
      jugadorInactivo.setTurno(0);
      console.log('----- COLOR:',jugadorInactivo.color)
      this.tablero.colorTurno = jugadorInactivo.color;

      jugadorActivo.setActivo(false);
      jugadorActivo.setTurno(0);
    } else {
      jugadorActivo.setTurno(jugadorActivo.turno + 1);
      jugadorActivo.AgregarMovimientoTurno(findPza.id_pza, casillaMov.data.casilla);
    }
    this.turnoPza.jugadores = this.jugadores;
    
    this.tablero.resetTablero();
  }
}
