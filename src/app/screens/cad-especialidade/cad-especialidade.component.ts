import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-especialidade',
  templateUrl: './cad-especialidade.component.html',
  styleUrls: ['./cad-especialidade.component.css']
})
export class CadEspecialidadeComponent {
  onSubmit($event: any): void {
    $event.preventDefault()
  }
}
