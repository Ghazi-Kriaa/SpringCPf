import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from './components/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  private url = "http://localhost:8080/api/produit";

  constructor(private http: HttpClient) { }

  // Add Product - Create
  addProduit(id:any,product: Product){
    return this.http.post<Product>(`${this.url}/add/`+id, product)
  }

  // Get Products - Read
  getProducts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`)
  }
  getProductsByCategory(categoryId: number) {
    return this.http.get<Product[]>(`${this.url}/categorie/${categoryId}`);
  }
  // Get Product by Id - Read
  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  // Update Product - Update
  updateProduct(id?: number ,product?: any ,idCat?:number): Observable<any>{
    return this.http.put<any>(`${this.url}/update/${id}/${idCat}`, product)
  }

  // Delete Product - Delete
  deleteProduct(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

}
