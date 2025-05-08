import { Component } from '@angular/core';
import { FormularioService } from '../services/formulario.service';  // Importa el servicio FormularioService
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {
  formData: any = {
    nombre: '',
    correo: '',
    edad: null,
    fechaActividad: '',
    tipoActividad: '',
    duracionHoras: null,
    actividadGrupo: false,
    satisfaccion: null,
    materialesSeleccionados: "",
    comentarios: ''
  };

  materiales = ['pesas', 'libros', 'laptop', 'otro'];

  constructor(private formularioService: FormularioService) {}  // Usamos FormularioService

  async submitForm() {
    const dataToSave = {
      ...this.formData,
      materiales: [this.formData.materialesSeleccionados]  // lo metemos en array por consistencia
    };
    

    // Llamamos al servicio para guardar los datos
    await this.formularioService.guardarFormulario(dataToSave);

    console.log('Formulario guardado correctamente');
  }
}
