import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://rickandmortyapi.com/api/character"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get(URL);
  }
}
