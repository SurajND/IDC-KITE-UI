import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyIndicator } from '../models/keyIndicator.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeyIndicatorService {

apiUrl = `${environment.baseUrl}/KeyIndicators`;

  constructor(private http: HttpClient) { }

  getKeyIndicators(): Observable<KeyIndicator[]>{
    return this.http.get<KeyIndicator[]>(`${this.apiUrl}`);
  }

  postKeyIndicator(data): Observable<KeyIndicator>{
    return this.http.post<KeyIndicator>(`${this.apiUrl}`, data);
  }

  updateKeyIndicator(id, data): Observable<KeyIndicator>{
    return this.http.put<KeyIndicator>(`${this.apiUrl}/${id}`, data);
  }

  deleteKeyIndicator(id): Observable<KeyIndicator>{
    return this.http.delete<KeyIndicator>(`${this.apiUrl}/${id}`);
  }
}
