import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AlertifyService } from '../../core/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model).subscribe(
      (next) => {
        this.alertifyService.success('Registered Successfully!');
      },
      (error) => {
        this.alertifyService.error(error);
      }
    );
  }
}
