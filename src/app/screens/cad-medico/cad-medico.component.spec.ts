import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMedicoComponent } from './cad-medico.component';

describe('CadMedicoComponent', () => {
  let component: CadMedicoComponent;
  let fixture: ComponentFixture<CadMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
