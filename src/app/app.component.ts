import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prograweb';
  people = [];

  constructor(private api: ApiService){}

  ngOnInit(){
    this.api.getAllCharacters().subscribe((characters: any) => {
      this.people = characters.results;
    });
  }
}
