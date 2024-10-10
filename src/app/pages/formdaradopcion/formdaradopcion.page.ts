import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdaradopcion',
  templateUrl: './formdaradopcion.page.html',
  styleUrls: ['./formdaradopcion.page.scss'],
})
export class FormdaradopcionPage {
  formularioAdopcion: FormGroup;
  mostrarVacunas = false;
  mostrarCondicionSalud = false;

  constructor(private formBuilder: FormBuilder) {
    // Inicializar el formulario con validaciones
    this.formularioAdopcion = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      especie: ['', Validators.required],
      genero: ['', Validators.required],
      tieneVacunas: ['', Validators.required],
      vacunas: [''],
      tieneCondicionSalud: ['', Validators.required],
      condicionSalud: [''],
      historia: ['']
    });
  }

  // Método para cambiar el estado de mostrarVacunas
  cambioVacunas(event: any) {
    this.mostrarVacunas = event.detail.value === 'si';
    if (!this.mostrarVacunas) {
      this.formularioAdopcion.patchValue({ vacunas: '' });
    }
  }

  // Método para cambiar el estado de mostrarCondicionSalud
  cambioCondicionSalud(event: any) {
    this.mostrarCondicionSalud = event.detail.value === 'si';
    if (!this.mostrarCondicionSalud) {
      this.formularioAdopcion.patchValue({ condicionSalud: '' });
    }
  }

  // Método para enviar el formulario
  enviarFormulario() {
    if (this.formularioAdopcion.valid) {
      console.log(this.formularioAdopcion.value);
      alert('Formulario enviado con éxito');
    } else {
      alert('Por favor, complete todos los campos requeridos');
    }
  }

  // Método para resetear el formulario
  resetearFormulario() {
    this.formularioAdopcion.reset();
    this.mostrarVacunas = false;
    this.mostrarCondicionSalud = false;
  }
}
