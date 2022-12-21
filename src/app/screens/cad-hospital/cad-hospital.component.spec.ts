import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadHospitalComponent } from './cad-hospital.component';

describe('CadHospitalComponent', () => {
  let Component: CadHospitalComponent;
  let fixture: ComponentFixture<CadHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadHospitalComponent);
    Component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(Component).toBeTruthy();
  });
});
