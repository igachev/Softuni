import { Inject, Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { LocalStorage } from '../core/injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try {
      const localStorage = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorage)
    } catch (error) {
      this.user = undefined
    }
   }

  login(email:string,password:string) {
   
      this.user = {
        email,
        firstName:'John',
        lastName:'Doe'
      }
    
      this.localStorage.setItem('<USER>',JSON.stringify(this.user))
  }

  logout(): void {
    
      this.user = undefined;
      this.localStorage.removeItem('<USER>')
  }

}
