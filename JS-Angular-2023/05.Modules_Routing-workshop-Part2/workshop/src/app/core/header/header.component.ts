import { Component } from '@angular/core';
import {UserService} from '../../user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent  {

 get isLogged(): boolean {
   return this.userService.isLogged;
 }

 get firstName(): string {
  return this.userService.user?.firstName || '';
 }

  constructor(private userService: UserService,
    private router: Router) {

  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/'])
  }

}
