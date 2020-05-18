import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) {
      //   let headers = new HttpHeaders();
  // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   }

 validatePassword(body): Observable<any>{

     return this.http.post('http://localhost:3000/api/v1/users/vlidate/pass', body, {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})});
   }

   changePassword(body): Observable<any>{
       return this.http.post('http://localhost:3000/api/v1/users/change/pass', body, {
        headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})});
     }
}
