import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { 
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  }



 login(body): Observable<any>{
//   let headers = new HttpHeaders();
// headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   return this.http.post('http://localhost:3000/api/v1/users', body, {
    headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})});
 }
}
