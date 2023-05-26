import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private getAllApiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  // Retrieves all users.
  public getUsers() {
    return this.http.get<any>(this.getAllApiUrl);
  }

  // Retrieves one user by id.
  public getOneUser(id: string | null) {
    return this.http.get<any>(`${this.getAllApiUrl}/${id}`);
  }
}
