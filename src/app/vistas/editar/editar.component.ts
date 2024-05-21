import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  editarForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    images: new FormControl(''),
  });

  ngOnInit(){
    let productoId = this.route.snapshot.paramMap.get('id');
    if(productoId !== null){
      this.api.getSingleProduct(productoId).subscribe((data: any) => {
        this.editarForm.setValue({
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          images: data.images[0],
        });
        console.log(data);
      });
    } else {
      console.error("No se ha encontrado el id en la URL");
    }
  }

  postForm(form:any){
    const producto = {
      id: this.editarForm.value.id,
      title: form.title,
      price: form.price,
      description: form.description,
      images: [form.images],
    };

    this.api.putProduct(producto).subscribe((data: any) => {
      console.log(data);
      this.salir();
    });
  }

  salir(){
    this.router.navigate(['']);
  }
}
