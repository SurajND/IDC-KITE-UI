import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

userUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.userUrl}`);
  }

  postUser(data): Observable<User>{
    return this.http.post<User>(`${this.userUrl}`, data);
  }

  getUserById(id): Observable<User>{
   return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  updateUser(id,data): Observable<User>{
    return this.http.put<User>(`${this.userUrl}/${id}`, data);
  }
  
}
