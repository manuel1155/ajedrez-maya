import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasPosicionService {

  filas = [
    {
      id: 16,
      nombre: 'A',
      limite: 1
    }, {
      id: 15,
      nombre: 'B',
      limite: 3
    }, {
      id: 14,
      nombre: 'C',
      limite: 5
    }, {
      id: 13,
      nombre: 'D',
      limite: 7
    }, {
      id: 12,
      nombre: 'E',
      limite: 9
    }, {
      id: 11,
      nombre: 'F',
      limite: 11
    }, {
      id: 10,
      nombre: 'G',
      limite: 13
    }, {
      id: 9,
      nombre: 'H',
      limite: 15
    }, {
      id: 8,
      nombre: 'I',
      limite: 15
    }, {
      id: 7,
      nombre: 'J',
      limite: 13
    }, {
      id: 6,
      nombre: 'K',
      limite: 11
    }, {
      id: 5,
      nombre: 'L',
      limite: 9
    }, {
      id: 4,
      nombre: 'M',
      limite: 7
    }, {
      id: 3,
      nombre: 'N',
      limite: 5
    }, {
      id: 2,
      nombre: 'O',
      limite: 3
    }
    , {
      id: 1,
      nombre: 'P',
      limite: 1
    }
  ]

  constructor() { }

  public calculaCasillasLider(casilla: string, orientacion: string, turno: number) {
    let fila = casilla.substring(0, 1)
    let columna = +casilla.substring(1)

    if (casilla == 'A01') return ['B02']
    if (casilla == 'P01') return ['O02']

    let casillasPosibles = [];

    let dataFila = this.filas.filter(f => f.nombre == fila)[0];

    if (columna > 1) {
      let latAnterior = columna - 1
      let antString = latAnterior <= 9 ? fila + '0' + latAnterior.toString() : fila + latAnterior.toString()
      casillasPosibles.push(antString)
    }
    if (columna < dataFila.limite) {
      let latPosterior = columna + 1
      let postString = latPosterior <= 9 ? fila + '0' + latPosterior.toString() : fila + latPosterior.toString()
      casillasPosibles.push(postString)
    }

    let dataFilaAnt = null;
    let colAnt = 0
    if (orientacion == 's') {
      dataFilaAnt = this.filas.filter(f => f.id == dataFila.id - 1)[0]
      if (dataFila.id == 9) colAnt = columna
      else if (dataFila.id > 8) colAnt = columna + 1
      else colAnt = columna - 1
    } else {
      dataFilaAnt = this.filas.filter(f => f.id == dataFila.id + 1)[0]
      if (dataFila.id == 8) colAnt = columna
      else if (dataFila.id <= 7) colAnt = columna + 1
      else colAnt = columna - 1
    }
    let antString = colAnt <= 9 ? dataFilaAnt.nombre + '0' + colAnt.toString() : dataFilaAnt.nombre + colAnt.toString()
    casillasPosibles.push(antString);

    return casillasPosibles;
  }

  public calculaCasillasDefensa(casillas?: string[], orientacionCasilla?: string, orientacionPieza?: string, caraPza?: string, turno?: number) {

    let casillasPosibles = [];

    if (!casillas) casillas = ['M02']
    if (!orientacionCasilla) orientacionCasilla = 's'
    if (!orientacionPieza) orientacionPieza = 's'
    if (!caraPza) caraPza = 'A'

    if (casillas.length == 1 && orientacionCasilla == 's' && orientacionPieza == 's') {
      let casilla = casillas[0]
      let fila = casilla.substring(0, 1)
      let columna = +casilla.substring(1)

      let dataFila = this.filas.filter(f => f.nombre == fila)[0];
      let filaActual = fila
      let columnaActual = columna

      let filaAnterior = this.filas.filter(f => f.id == dataFila.id - 1)[0]

      casillasPosibles.push(filaAnterior.nombre +  ((columnaActual - 1) <= 9 ? '0' + (columnaActual - 1) : (columnaActual - 1)))

      for (let i = 0; i < 2; i++) {
        if (i == 0) {
          if (columna == 1) casillasPosibles.push(filaActual + (columnaActual + 1));
          else if (columna == dataFila.limite) casillasPosibles.push(filaActual + ((columnaActual - 1) <= 9 ? '0' + (columnaActual - 1) : (columnaActual - 1)));

          else if (columna > 1) {
            casillasPosibles.push(filaActual +  ((columnaActual - 1) <= 9 ? '0' + (columnaActual - 1) : (columnaActual - 1)))
            casillasPosibles.push(filaActual +  ((columnaActual + 1) <= 9 ? '0' + (columnaActual + 1) : (columnaActual + 1)))
          }
        } else if (i == 1) {
          let dataFila2 = this.filas.filter(f => f.id == dataFila.id + 1)[0];
          filaActual = dataFila2.nombre
          columnaActual = columna + 1
          if (columna == 1) {
            casillasPosibles.push(filaActual + '01');
            casillasPosibles.push(filaActual + '02');
          }
          else if (columna == dataFila.limite) {
            casillasPosibles.push(filaActual + ((dataFila2.limite) <= 9 ? '0' + dataFila2.limite : dataFila2.limite));
            casillasPosibles.push(filaActual + ((dataFila2.limite - 1) <= 9 ? '0' + (dataFila2.limite - 1) : (dataFila2.limite - 1)));
          }
          else if (columna > 1) {
            casillasPosibles.push(filaActual + ((columnaActual + 1) <= 9 ? '0' + (columnaActual + 1) : (columnaActual + 1)))
            casillasPosibles.push(filaActual + ((columnaActual + 2) <= 9 ? '0' + (columnaActual + 2) : (columnaActual + 2)))
            casillasPosibles.push(filaActual +  ((columnaActual - 1) <= 9 ? '0' + (columnaActual - 1) : (columnaActual - 1)))
            casillasPosibles.push(filaActual +  ((columnaActual - 2) <= 9 ? '0' + (columnaActual - 2) : (columnaActual - 2)))
          }
        }
      }
    } else if (casillas.length == 1 && orientacionCasilla == 'n' && orientacionPieza == 'n') {
      console.log('no yet implemented')
    }
    return casillasPosibles;
  }
}
