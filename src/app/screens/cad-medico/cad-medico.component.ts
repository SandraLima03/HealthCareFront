import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CadMedicoService } from 'src/app/service/cad-medico.service';
import { MedicoInput } from 'src/app/service/input/medico.input';
import { MedicoModel } from 'src/app/service/model/medico.model';

@Component({
  selector: 'app-cad-medico',
  templateUrl: './cad-medico.component.html',
  styleUrls: ['./cad-medico.component.css']
})
export class CadMedicoComponent {
  medicoModel: MedicoModel[] = [];
  medicoInput = {} as MedicoInput;

  medicoNome: string = '';

  @ViewChild("medico") inputNomeMedico!: ElementRef;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private cadMedicoService: CadMedicoService) {}

  ngOnInit() {
    this.listarMedico();
  }

  listarMedico(){
    this.cadMedicoService.consultar()
      .subscribe(
        response => {
            this.medicoModel = response;
        }

      )
  }

  cadastrar() {
    this.cadMedicoService.cadastra(this.medicoInput)
      .subscribe(
        (response) => {
          alert("Cadastrado com sucesso")
        }
      )

  }

  excluir(medicoId: number) {
    this.cadMedicoService.excluir(medicoId)
      .subscribe(
        (response) => {
          alert("Excluido com sucesso")
        }
      )
  }
}








  /*onSubmit($event: any): void {
    $event.preventDefault()
    console.log(
      [
        $event.target.inputName.value,
        $event.target.inputCPF.value,
        $event.target.inputTel.value,
        $event.target.inputEndereco.value,
        $event.target.inputCarteira.value
      ]
    );
  }*/

