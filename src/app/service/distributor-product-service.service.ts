import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DistributorProductServiceService {

  baseUrl='http://localhost:9090';
  
  constructor(private http:HttpClient) { }

  getOneDistributor(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/distributors/getDistributor/${id}`);
  }

  getOneProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/getproduct/${id}`);
  }

  // getDistributor(email:string):Observable<any>{
  //   return this.http.get(`${this.baseUrl}/suppliers/getemail/${email}`);
  // }

  addProduct(products: Object): Observable<Object> {
    console.log(products);
    return this.http.post(`${this.baseUrl}/products/saveProduct`, products); 
  }

  getAllProduct():any
  {
    return this.http.get(`${this.baseUrl}/products/getAllProduct`);
  }

  getAllDistributor():any
  {
    return this.http.get(`${this.baseUrl}/distributors/getAllDistributor`);
  }

  addDistributor(dist: Object): Observable<Object> {
    console.log(dist);
    return this.http.post(`${this.baseUrl}/distributors/saveDistributor`, dist);
  }

  updateProduct(products:object){
    return this.http.put(`${this.baseUrl}/products/updateProduct`,products);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/deleteProductbyid/${id}`, { responseType: 'text' });
  }


}
