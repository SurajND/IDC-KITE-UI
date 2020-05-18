import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusUpdateService {

  constructor(private http: HttpClient) { }
  getUserProjects(userId): Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/projects/getUserProjects?userId='+userId);
  }
  getProjectInfo(p1,p2,p3): Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/projects/projectinfo?project='+p1+'&month='+p2+'&year='+p3);
  }
  postProjectDetails(data): Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/projects/updateprojectstatus', data);
  }
}
