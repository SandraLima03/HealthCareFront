import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-hospital',
  templateUrl: './cad-hospital.component.html',
  styleUrls: ['./cad-hospital.component.css']
})
export class CadHospitalComponent {
  onSubmit($event: any): void {
    $event.preventDefault()
  }
}
