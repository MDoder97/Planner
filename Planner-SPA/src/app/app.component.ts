import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Planner-SPA';
  jwtHelper = new JwtHelperService();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      this.router.navigate(['workspace']);
    }
  }

}
