import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadBeneficiarioComponent} from './screens/cad-beneficiario/cad-beneficiario.component';
import { CadMedicoComponent } from './screens/cad-medico/cad-medico.component';
import {HomeComponent} from './screens/home/home.component'
import { CadHospitalComponent } from './screens/cad-hospital/cad-hospital.component';
import { CadEspecialidadeComponent } from './screens/cad-especialidade/cad-especialidade.component';

const routes: Routes = [
  {path: 'cadastro-beneficiario', component:CadBeneficiarioComponent},
  {path: '', component:HomeComponent},
  {path: 'painel/cadastro-medico', component:CadMedicoComponent},
  {path: 'cadastro-hospital', component:CadHospitalComponent},
  {path: '', component:HomeComponent},
  {path: 'cadastro-especialidade', component:CadEspecialidadeComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
