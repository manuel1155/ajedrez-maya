import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasPosicionService {

  cooredenadas = [
    {
      "pieza": "l",
      "casilla": "F01",
      "orientacion": "s",
      "x": "120",
      "y": "1000"
    },
    {
      "pieza": "l",
      "casilla": "F02",
      "orientacion": "n",
      "x": "170",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "F03",
      "orientacion": "s",
      "x": "220",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "F04",
      "orientacion": "n",
      "x": "270",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "F05",
      "orientacion": "s",
      "x": "320",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "F06",
      "orientacion": "n",
      "x": "370",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "F07",
      "orientacion": "s",
      "x": "420",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "F08",
      "orientacion": "n",
      "x": "470",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "F09",
      "orientacion": "s",
      "x": "520",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "F10",
      "orientacion": "n",
      "x": "570",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "F11",
      "orientacion": "s",
      "x": "620",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "E01",
      "orientacion": "s",
      "x": "170",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "E02",
      "orientacion": "n",
      "x": "220",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "E03",
      "orientacion": "s",
      "x": "270",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "E04",
      "orientacion": "n",
      "x": "320",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "E05",
      "orientacion": "s",
      "x": "370",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "E06",
      "orientacion": "n",
      "x": "420",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "E07",
      "orientacion": "s",
      "x": "470",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "E08",
      "orientacion": "n",
      "x": "520",
      "y": "1135"
    },
    {
      "pieza": "l",
      "casilla": "E09",
      "orientacion": "s",
      "x": "570",
      "y": "1100"
    },
    {
      "pieza": "l",
      "casilla": "D01",
      "orientacion": "s",
      "x": "220",
      "y": "1200"
    },
    {
      "pieza": "l",
      "casilla": "D02",
      "orientacion": "n",
      "x": "270",
      "y": "1235"
    },
    {
      "pieza": "l",
      "casilla": "D03",
      "orientacion": "s",
      "x": "320",
      "y": "1200"
    },
    {
      "pieza": "l",
      "casilla": "D04",
      "orientacion": "n",
      "x": "370",
      "y": "1235"
    },
    {
      "pieza": "l",
      "casilla": "D05",
      "orientacion": "s",
      "x": "420",
      "y": "1200"
    },
    {
      "pieza": "l",
      "casilla": "D06",
      "orientacion": "n",
      "x": "470",
      "y": "1235"
    },
    {
      "pieza": "l",
      "casilla": "D07",
      "orientacion": "s",
      "x": "520",
      "y": "1200"
    },
    {
      "pieza": "l",
      "casilla": "C01",
      "orientacion": "s",
      "x": "270",
      "y": "1300"
    },
    {
      "pieza": "l",
      "casilla": "C02",
      "orientacion": "n",
      "x": "320",
      "y": "1335"
    },
    {
      "pieza": "l",
      "casilla": "C03",
      "orientacion": "s",
      "x": "370",
      "y": "1300"
    },
    {
      "pieza": "l",
      "casilla": "C04",
      "orientacion": "n",
      "x": "420",
      "y": "1335"
    },
    {
      "pieza": "l",
      "casilla": "C05",
      "orientacion": "s",
      "x": "470",
      "y": "1300"
    },
    {
      "pieza": "l",
      "casilla": "B01",
      "orientacion": "s",
      "x": "320",
      "y": "1400"
    },
    {
      "pieza": "l",
      "casilla": "B02",
      "orientacion": "n",
      "x": "370",
      "y": "1435"
    },
    {
      "pieza": "l",
      "casilla": "B03",
      "orientacion": "s",
      "x": "420",
      "y": "1400"
    },
    {
      "pieza": "l",
      "casilla": "A01",
      "orientacion": "s",
      "x": "370",
      "y": "1500"
    },
    {
      "pieza": "l",
      "casilla": "G01",
      "orientacion": "s",
      "x": "70",
      "y": "900"
    },
    {
      "pieza": "l",
      "casilla": "G02",
      "orientacion": "n",
      "x": "120",
      "y": "935"
    },
    {
      "pieza": "l",
      "casilla": "G03",
      "orientacion": "s",
      "x": "170",
      "y": "900"
    },
    {
      "pieza": "l",
      "casilla": "G04",
      "orientacion": "n",
      "x": "220",
      "y": "935"
    },
    {
      "pieza": "l",
      "casilla": "G05",
      "orientacion": "s",
      "x": "270",
      "y": "900"
    },
    {
      "pieza": "l",
      "casilla": "G06",
      "orientacion": "n",
      "x": "320",
      "y": "935"
    },
    {
      "pieza": "l",
      "casilla": "G07",
      "orientacion": "s",
      "x": "370",
      "y": "900"
    },
    {
      "pieza": "l",
      "casilla": "G08",
      "orientacion": "n",
      "x": "420",
      "y": "935"
    },
    {
      "pieza": "l",
      "casilla": "G09",
      "orientacion": "s",
      "x": "470",
      "y": "900"
    },
    {
      "pieza": "l",
      "casilla": "G10",
      "orientacion": "n",
      "x": "520",
      "y": "935"
    },
    {
      "pieza": "l",
      "casilla": "G11",
      "orientacion": "s",
      "x": "570",
      "y": "900"
    },
    {
      "pieza": "l",
      "casilla": "G12",
      "orientacion": "n",
      "x": "620",
      "y": "935"
    },
    {
      "pieza": "l",
      "casilla": "G13",
      "orientacion": "s",
      "x": "670",
      "y": "900"
    }
  ]

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

  getCoordenadas(casilla: string) {
    return this.cooredenadas.filter(c => c.casilla == casilla);
  }

  public calculaCasillasLider(casilla: string, orientacion: string) {
    let fila = casilla.substring(0, 1)
    let columna = +casilla.substring(1)
    console.log('columna', columna)

    if (casilla == 'A01') return ['B02']

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
    console.log(dataFilaAnt)
    let antString = colAnt <= 9 ? dataFilaAnt.nombre + '0' + colAnt.toString() : dataFilaAnt.nombre + colAnt.toString()
    console.log('anterior', antString)
    casillasPosibles.push(antString);

    return casillasPosibles;
  }
}
