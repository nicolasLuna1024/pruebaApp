import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private firestore: Firestore) {}

  // Método para guardar datos del formulario en Firebase
  async guardarFormulario(data: any) {
    const formRef = collection(this.firestore, 'formularios');
    try {
      await addDoc(formRef, data);
      console.log('Formulario guardado correctamente');
    } catch (error) {
      console.error('Error al guardar el formulario', error);
    }
  }
}
