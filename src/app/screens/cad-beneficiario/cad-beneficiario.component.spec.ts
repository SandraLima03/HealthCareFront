import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadBeneficiarioComponent } from './cad-beneficiario.component';

describe('CadBeneficiarioComponent', () => {
  let component: CadBeneficiarioComponent;
  let fixture: ComponentFixture<CadBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
