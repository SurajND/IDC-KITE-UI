import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getProjectKeyIndicatorByAllOpcoForAYear(year): Observable<any>{
    let params = new HttpParams();
    params = params.append('year', year);
    
    return this.http.get(`${this.apiUrl}/ProjectKeyIndicatorByAllOpcoForAYear`, {params: params});
   }

   getProjectKeyIndicatorForAnOpcoForAYear(opco, year): Observable<any>{
    let params = new HttpParams();
    params = params.append('year', year);
    params = params.append('opco', opco);
    return this.http.get(`${this.apiUrl}/ProjectKeyIndicatorForAnOpcoForAYear`, {params: params});
   }
}
