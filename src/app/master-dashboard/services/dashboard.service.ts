import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  
  getProjectKeyIndicatorByYear(): Observable<any>{
    return this.http.get('https://localhost:44356/api/ProjectKeyIndicatorYears');
  }

  
}
