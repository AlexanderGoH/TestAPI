import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../card/card.component';

import { RouterOutlet } from '@angular/router';
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

  constructor(private api: ApiService){}

  ngOnInit(){
    this.api.getAllProducts().subscribe((products: any) => {
      this.productos = products;
    });
  }
}
