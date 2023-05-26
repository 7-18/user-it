import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/types/User';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userList: User[] = [];
  public loginEvent: EventEmitter<void> = new EventEmitter<void>();
  public logoutEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private api: ApiService) {
    this.getData();
  }

  // Retrieves data from the API endpoint and maps (only the principal data) it to the userList property.
  getData(): void {
    this.api.getUsers().subscribe(
      data => {
        this.userList = data.users.map((user: User) => {
          return { email: user.email, password: user.password, firstName: user.firstName, lastName: user.lastName, image: user.image };
        });
      }
    );
  }

  // Log an user given an email and password. It searches the userList for a match,
  // and if one is found, it stores the user's information in sessionStorage and emits a login event.
  login(email: string, password: string): boolean {
    const userExists = this.userList.find(user => user.email === email && user.password === password);
    if (userExists) {
      sessionStorage.setItem('user', JSON.stringify({ firstName: userExists.firstName, lastName: userExists.lastName, image: userExists.image, email: userExists.email }));
      this.loginEvent.emit();
      return true;
    }
    return false;
  }

  // Returns the currently logged-in user's information.
  getCurrentUser(): { firstName: string, lastName: string, image: string, email: string } | null {
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null;
  }

  // Log-out the user.
  logout(): void {
    this.logoutEvent.emit();
    sessionStorage.removeItem('user');
  }

  // Returns a boolean indicating if the user is authenticated.
  isAuthenticated(): boolean {
    return sessionStorage.getItem('user') !== null;
  }
}
