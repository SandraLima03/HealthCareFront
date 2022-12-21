import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-medico',
  templateUrl: './cad-medico.component.html',
  styleUrls: ['./cad-medico.component.css']
})
export class CadMedicoComponent {
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
