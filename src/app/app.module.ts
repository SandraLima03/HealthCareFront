import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './screens/home/home.component';
import { CadBeneficiarioComponent } from './screens/cad-beneficiario/cad-beneficiario.component'
import { CommonModule } from '@angular/common';
import { CadMedicoComponent } from './screens/cad-medico/cad-medico.component';
import { TextComponent } from './component/input/text/text.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HeaderScreenComponent } from './component/header-screen/header-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadHospitalComponent } from './screens/cad-hospital/cad-hospital.component';
import { CadEspecialidadeComponent } from './screens/cad-especialidade/cad-especialidade.component';
import { AgendamentoConsultaComponent } from './screens/agendamento-consulta/agendamento-consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { CadBeneficiarioService } from './service/cad-beneficiario.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidebarComponent,
    HomeComponent,
    CadBeneficiarioComponent,
    CadMedicoComponent,
    TextComponent,
    HeaderScreenComponent,
    CadHospitalComponent,
    CadEspecialidadeComponent,
    AgendamentoConsultaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, CadBeneficiarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
