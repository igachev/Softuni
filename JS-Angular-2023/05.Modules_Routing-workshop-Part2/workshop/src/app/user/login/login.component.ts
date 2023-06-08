import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

icons = {
  faEnvelope,
  faLock
}

constructor(private userService: UserService,
  private router: Router,
  private activatedRoute: ActivatedRoute) {

}

login(email: string, password: string): void {
this.userService.login(email,password);
const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
    this.router.navigate([redirectUrl]);
}

}
