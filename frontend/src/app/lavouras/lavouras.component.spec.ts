import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavourasComponent } from './lavouras.component';

describe('LavourasComponent', () => {
  let component: LavourasComponent;
  let fixture: ComponentFixture<LavourasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavourasComponent]
    });
    fixture = TestBed.createComponent(LavourasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
