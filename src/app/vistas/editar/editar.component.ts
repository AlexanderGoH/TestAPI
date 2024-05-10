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

  datosProducto = {id: "", title: "", price: "0", description: "", categoryId:"", images: []};

  editarForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
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
        });
        console.log(data);
      });
    } else {
      console.error("No se ha encontrado el id en la URL");
    }
  }

  postForm(form:any){
    this.api.putProduct(form).subscribe((data: any) => {
      console.log(data);
      alert("Producto editado exitosamente");
      this.router.navigate([''])
    });
  }
}
