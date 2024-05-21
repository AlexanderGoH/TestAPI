import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../card/card.component';

import { Router, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgFor, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'prograweb';
  productos = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getAllProducts().subscribe((data: any) => {

      data.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string


        let imageNoGarbage = imageStringify


          .substring(2, imageStringify.length - 2)


          .replaceAll('\\', ' ')


          .replaceAll('""', '"')


          .replaceAll('" "', '"')


          .replaceAll(' ', '');


        try {


          item.images = JSON.parse(imageNoGarbage);


          item.imagesActual = item.images[0];


        } catch (e) { }


      });
      this.productos = data;
    });

  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }
}
