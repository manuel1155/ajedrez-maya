import { Injectable } from '@angular/core';

import piezas from './../../../assets/lib/piezas.json';
import posiciones from './../../../assets/lib/posiciones.json';
import opciones from './../../../assets/lib/opciones_movimiento.json';
import { Pieza } from '../models/pieza';

@Injectable({
  providedIn: 'root',
})

export class PiezasService {
  constructor() {}

  getPiezasLista() {
    return piezas.filter((pza) => pza.activo);
  }

  getPosicionInicial(id: string, color: string) {
    let posicion = posiciones.filter(
      (p) => p.id_pza === id && p.inicial === color
    )[0];

    return posicion;
  }

  getInfoPosicion(
    id: string,
    posicion: string,
    base: string,
    orientacion: string
  ) {
    let posicionNueva: any = posiciones.filter(
      (p) =>
        p.id_pza == id &&
        p.posicion == posicion &&
        p.base == base &&
        p.orientacion == orientacion
    )[0];
    console.log(posicionNueva);
    return posicionNueva;
  }

  getOpcionesMovimiento(pza: Pieza) {
    let idPza = pza.id_pza;
    if (idPza == 'L' || idPza == 'C' || idPza == 'G') idPza = 'LCG';
   
    return opciones.filter(
      (o) =>
        o.id_pza == idPza &&
        o.posicion_origen == pza.posicion &&
        o.base_origen == pza.base &&
        o.orientacion_origen == pza.orientacion
    );
  }

  checkTerminarJuego(casilla: string, color: string) {
    new Promise((resolve, reject) => {
      let casillasGanarBlancas = ['P01', 'J07'];
      let casillasGanarNegras = ['G07', 'A01'];

      if (casillasGanarBlancas.includes(casilla) && color == 'b') resolve(true);
      if (casillasGanarNegras.includes(casilla) && color == 'n') resolve(true);

      resolve(false);
    });
  }
}