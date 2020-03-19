import { Component, OnInit } from '@angular/core';
import { User } from '../_Model/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  user: User = new User();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post('http://localhost:5000/api/auth/register', this.user).subscribe();
  }
}
