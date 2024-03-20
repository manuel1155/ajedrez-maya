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
}
