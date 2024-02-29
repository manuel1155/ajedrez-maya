import { TestBed } from '@angular/core/testing';

import { CoordenadasPosicionService } from './coordenadas-posicion.service';

describe('CoordenadasPosicionService', () => {
  let service: CoordenadasPosicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordenadasPosicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
