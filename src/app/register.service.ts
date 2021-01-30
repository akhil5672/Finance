import { Injectable } from '@angular/core';
import {Reg} from './reg';
import { HttpClient, HttpErrorResponse, HttpHeaders } from"@angular/common/http";
import {  Observable, throwError } from'rxjs';
import { catchError } from'rxjs/operators';
import {Product} from './product';
import { Logincredentials } from './logincredentials';
import {Customer} from './customer';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServer = "http://localhost:50556/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/productsMasters')    
  }
  register(Reg): Observable<number> {
    return this.httpClient.post<number>(this.apiServer + '/customers/', JSON.stringify(Reg), this.httpOptions)   
  }

  //  UserLogin(Logincredentials): Observable<string> {​​​​​
  //     return this.httpClient.get<string>(this.apiServer + '/Logincustomer?user_name=' +Logincredentials.user_name+'&?user_password='+Logincredentials.user_password );
  //   }​​​​​ 

   UserLogin(logincredentials): Observable<number> {​​​​​
      return this.httpClient.post<number>(this.apiServer + '/user/',JSON.stringify(logincredentials),this.httpOptions);
       }​​​​​ 
   

    AdminLogin(logincredentials): Observable<number> {​​​​​
      return this.httpClient.post<number>(this.apiServer + '/admin/',JSON.stringify(logincredentials),this.httpOptions);
     }​​​​​ 
     
     GetAllCustomers(): Observable<Customer[]> {
      return this.httpClient.get<Customer[]>(this.apiServer + '/customers') 
     }
     GetByCustomerId(id):Observable<Customer>{ 
       return this.httpClient.get<Customer>(this.apiServer + '/Customers?id=' + id)
     }

     UpdateCustomer(id, customer): Observable<number> {
       debugger;
      return this.httpClient.put<number>(this.apiServer + '/Customers/' + id, JSON.stringify(customer), this.httpOptions)
    }
    DeleteCustomer(id){
      return this.httpClient.delete<Customer>(this.apiServer + '/Customers/' + id, this.httpOptions)    
    }
    GetByProductId(id):Observable<Product>{ 
      return this.httpClient.get<Product>(this.apiServer + '/productsMasters?id=' + id)
    }



    // GetProduct(): Observable<Product[]>{
    //   return this.httpClient.get<Product[]>(this.apiServer + '/productsMasters')
    // }


}
