import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEmProgressoComponent } from './pedidos-em-progresso.component';

describe('PedidosEmProgressoComponent', () => {
  let component: PedidosEmProgressoComponent;
  let fixture: ComponentFixture<PedidosEmProgressoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosEmProgressoComponent]
    });
    fixture = TestBed.createComponent(PedidosEmProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
