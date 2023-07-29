import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarionovoComponent } from './usuarionovo.component';

describe('UsuarionovoComponent', () => {
  let component: UsuarionovoComponent;
  let fixture: ComponentFixture<UsuarionovoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarionovoComponent]
    });
    fixture = TestBed.createComponent(UsuarionovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
