import { Component, OnInit } from '@angular/core';
import { User } from '../_Model/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  user: User = new User();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post('http://localhost:5000/api/auth/login', this.user).subscribe();
  }

}
