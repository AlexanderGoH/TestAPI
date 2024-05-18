import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private router: Router, private api: ApiService) { }

  @Input()

  producto?: any;

  editar(){
    this.router.navigate(['editar', this.producto.id]);
  }

  eliminar(id:any){
    this.api.deleteProduct(id).subscribe(data => {
      console.log(data);
      alert('Producto eliminado exitosamente');
      location.reload();
    });
  }
}
