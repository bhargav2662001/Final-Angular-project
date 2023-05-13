import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // httpOptions(arg0: string, httpOptions: any): Observable<any> {
  //   throw new Error('Method not implemented.');
  // }

  httpOptions:any;




  addProduct(data: any): Observable<any> {

    return this.http.post("http://localhost:4300/products", data);

  }

  updateProduct(id: number, data: any): Observable<any> {

    return this.http.put(`http://localhost:4300/products/${id}`, data);

  }

  getProduct(): Observable<any> {

    return this.http.get("http://localhost:4300/products")

  }

  deleteProduct(id: number): Observable<any> {

    return this.http.delete(`http://localhost:4300/products/${id}`);

  }
    
  
  usertype: any;
  username: any;
  token: any;
  login(_email: string, _password: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) 
  { this.httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',

      'Authorization': "Bearer " + sessionStorage.getItem("token")

    })
  }

}

getProducts(): Observable < any > {
  return this.http.get("http://localhost:4300/products")
}
postProducts(product: any): Observable < any > {
  return this.http.post("http://localhost:4300/products", product)
}
getdetails(id: number): Observable < any > {
  return this.http.get("http://localhost:4300/products/" + id)

    .pipe(map((res: any) => {
      return res;
    }))
}


// function getProducts() {
//   throw new Error('Function not implemented.');
// }

}

