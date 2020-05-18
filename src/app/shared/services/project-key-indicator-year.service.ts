import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectKeyIndicatorYearService {

  apiUrl = `${environment.baseUrl}/ProjectKeyIndicatorYears`;

  constructor(private http: HttpClient) { }

  getProjectKeyIndicatorYearByYear(year): Observable<any>{
   return this.http.get(`${this.apiUrl}/byYear/${year}`);
  }
}
