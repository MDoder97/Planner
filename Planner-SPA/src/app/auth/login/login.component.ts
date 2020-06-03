import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../core/services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router, private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertifyService.success('Logged in!');
        this.router.navigate(['workspace']);
      },
      error => {
        this.alertifyService.error(error);
      }
    );
  }

}
