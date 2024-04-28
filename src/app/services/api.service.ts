import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://api.escuelajs.co/api/v1/products"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(URL);
  }
}
