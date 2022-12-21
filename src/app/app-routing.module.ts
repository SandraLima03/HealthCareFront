import { CadHospitalComponent } from './screens/cad-hospital/cad-hospital.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadBeneficiarioComponent} from './screens/cad-beneficiario/cad-beneficiario.component';
import {HomeComponent} from './screens/home/home.component'

const routes: Routes = [
  {path: 'cadastro-beneficiario', component:CadBeneficiarioComponent},
  {path: '', component:HomeComponent},
  {path: 'cadastro-hospital', component:CadHospitalComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
