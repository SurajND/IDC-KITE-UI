import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  constructor(private http: HttpClient) { }

  authenticateUser(body): Observable<any>{
    return this.http.post(`${environment.baseUrl}/users/authenticate`, body);
  }
}
