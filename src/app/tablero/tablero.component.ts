import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoordenadasPosicionService } from '../core/service/coordenadas-posicion/coordenadas-posicion.service';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(public cpService: CoordenadasPosicionService) {

  }

  @Output() casillaSeleccionada = new EventEmitter<string>();

  postData(e: any) {
    console.log(' - postData: ', e.target.classList);
    this.resetTablero();
    this.casillaSeleccionada.emit(e.target.id)

    if(e.target.id =='p-l-b' || e.target.id =='p-l-w'){
      
    }

    let clases = e.target.classList
    let orientacion = 'n'
    if (clases.contains('c-sur')) orientacion = 's'

    let casillasPosibles = this.cpService.calculaCasillasLider(e.target.id.substring(2), orientacion)

    for (let casilla of casillasPosibles) {
      const element = document.getElementById('c-'+casilla);

      element?.classList.remove('c-viable');
      element?.classList.add('c-viable');
    }

  }

  resetTablero(){
    const casillasNorte = document.getElementsByClassName('c-norte');
    const casillasSur = document.getElementsByClassName('c-sur');

    for (let i = 0; i < casillasNorte.length; i++) casillasNorte[i].classList.remove('c-viable')
    for (let i = 0; i < casillasSur.length; i++) casillasSur[i].classList.remove('c-viable')
    
  }

}
