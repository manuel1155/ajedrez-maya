import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoPiezasComponent } from './turno-piezas.component';

describe('TurnoPiezasComponent', () => {
  let component: TurnoPiezasComponent;
  let fixture: ComponentFixture<TurnoPiezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnoPiezasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurnoPiezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
