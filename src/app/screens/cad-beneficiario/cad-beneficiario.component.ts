import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-beneficiario',
  templateUrl: './cad-beneficiario.component.html',
  styleUrls: ['./cad-beneficiario.component.css']
})
export class CadBeneficiarioComponent {
  onSubmit($event: any): void {
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
  }
}
