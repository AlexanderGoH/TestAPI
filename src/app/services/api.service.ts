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

  addProduct(form: any){
    return this.http.post('https://platzi-ecommerce-api.herokuapp.com/products', form);
  }

  deleteProduct(id: number){
    return this.http.delete(`URL+/${id}`)
  }
}
