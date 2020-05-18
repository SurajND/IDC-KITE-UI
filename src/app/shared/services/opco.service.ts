import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Opco } from '../models/opco.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpcoService {

  opcoUrl =`${environment.baseUrl}/OperationalCompanies`;

  constructor(private http: HttpClient) {}

  //getAllOpcos$ = this.http.get<Opco[]>(`${this.opcoUrl}`);

  getOpcos(): Observable<Opco[]>{
   return this.http.get<Opco[]>(`${this.opcoUrl}`);
  }

  postOpco(opco): Observable<Opco> {
   return this.http.post<Opco>(`${this.opcoUrl}`, opco);
  }
  deleteOpco(id): Observable<Opco>{
    return this.http.delete<Opco>(`${this.opcoUrl}/${id}`);
  }
  updateOpco(id,data){
    return this.http.put(`${this.opcoUrl}/${id}`, data);
  }
  
}
