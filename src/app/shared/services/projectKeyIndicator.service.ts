import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectKeyIndicatorService {
  
  apiUrl = `${environment.baseUrl}/ProjectKeyIndicators`;

  constructor(private http: HttpClient) { }

  postProjectKeyIndicator(opco): Observable<any> {
    return this.http.post(`${this.apiUrl}`, opco);
   }

   getProjectKeyIndicatorsByYear(year): Observable<any>{
    return this.http.get(`${this.apiUrl}/byYear/${year}`);
  }

  updateProjectKeyIndicator(id,data): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteProjectKeyIndicator(id){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
