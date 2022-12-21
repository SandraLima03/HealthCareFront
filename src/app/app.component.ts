import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoangular';

  // formulario!: FormGroup;

  // constructor(private formBuilder: FormBuilder) {}

  //   ngOnInit(): void {
  //     this.formulario = this.formBuilder.group({
  //       name: ['', Validators.required, Validators.minLength(2)],
  //       CPF: [''],
  //       tel: [''],
  //       endereco: [''],
  //       carteira: ['']
  //     })
  //   }
}

