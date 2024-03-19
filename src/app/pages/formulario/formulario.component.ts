import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogServices } from '../../services/blog.service';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  onClick(url: string) {
  this.router.navigateByUrl(url);;
  }

   formulario: FormGroup = new FormGroup({

    titulo: new FormControl(null,[
      Validators.required,
    ]),

    texto: new FormControl(null, [
      Validators.required,
      Validators.minLength(30),
    ]),

    autor: new FormControl(null, [
      Validators.required,
    ]),

    imagen: new FormControl(null, [
      Validators.required,
    ]),

    fecha: new FormControl(null, [
      Validators.required,
    ]),

    categoria: new FormControl(null, [
      Validators.required,
    ]),

  })

    checkError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)!.hasError(errorName) &&
    this.formulario.get(controlName)!.touched;
  }


  
  blogService = inject(BlogServices);
  router = inject(Router);
  



  onSubmit() {
    if (this.formulario.valid) {
      const nuevoPost: Post = this.formulario.value;
      this.blogService.create(nuevoPost);
      this.formulario.reset();
      this.router.navigateByUrl('/BlogList');
    }
  }

}



