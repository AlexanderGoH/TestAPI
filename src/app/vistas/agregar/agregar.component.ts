import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  constructor(private api: ApiService, private router: Router) { }

  agregarForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(),
    image: new FormControl([])
  });

  postForm(form: any) {
    if (form.valid) {
      this.api.addProduct(form).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.error('Error al agregar producto:', error);
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  salir() {
    this.router.navigate(['']);
  }
}
