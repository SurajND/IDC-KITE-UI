import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  projectUrl =`${environment.baseUrl}/Projects`;

  constructor(private http: HttpClient) { }

  postProjects(opco): Observable<Project> {
    return this.http.post<Project>(`${this.projectUrl}`, opco);
   }

   getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${this.projectUrl}`);
  }

  updateProject(id,data): Observable<Project>{
    return this.http.put<Project>(`${this.projectUrl}/${id}`, data);
  }

  deleteProject(id): Observable<Project>{
    return this.http.delete<Project>(`${this.projectUrl}/${id}`);
  }
}
