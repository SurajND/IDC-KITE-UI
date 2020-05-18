import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Level2Service {

  constructor(private http: HttpClient) { }

  getTireTwo(): Observable<any>{

    return this.http.get('http://localhost:3000/api/v1/status/tiretwo');
  }
}
