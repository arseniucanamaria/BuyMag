import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { Users } from 'src/app/databases/users-db';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = Users;
  constructor() { }

  login(username: string, password: string): Observable<User>{
    const index = this.users.findIndex((user: User) =>  user.username === username && user.password === password);
    if(index !== -1) {
      return of(this.users[index]);
    }
    throw new Error("Wrong username or pass");  
  }
}
