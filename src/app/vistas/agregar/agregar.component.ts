import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  constructor(private api: ApiService, private router: Router) { }

  nuevoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required),
  });

  postForm(form: any){
    if(this.nuevoForm.valid){
      const newProduct: any = {
        title: form.title,
        price: form.price,
        description: form.description,
        categoryId: form.categoryId,
        images: [form.images]
      };

      // console.log(newProduct);
      this.api.postProduct(newProduct).subscribe(
        (data: any) => {
          this.router.navigate(['']);
          console.log('Producto creado exitosamente:', data);
        }, 
        (error: any) => {
          console.error('Error al crear el producto:', error);
          console.log(newProduct);
        }
      );
    } else {
      console.error('Formulario inválido. Por favor completa todos los campos');
    }
  }

  salir() {
    this.router.navigate(['']);
  }
}
