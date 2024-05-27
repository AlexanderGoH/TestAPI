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
    categoryId: new FormControl(''),
    image: new FormControl(''),
  });

  ngOnInit(){
    let productoId = this.route.snapshot.paramMap.get('id');
    if(productoId !== null){
      this.api.getSingleProduct(productoId).subscribe((data: any) => {
        this.editarForm.setValue({
          id: data.results[0].id,
          title: data.results[0].title,
          price: data.results[0].price,
          description: data.results[0].description,
          categoryId: data.results[0].categoryId,
          image: data.results[0].image,
        });
        console.log(data.results[0]);
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
      categoryId: form.categoryId,
      image: form.image,
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
