import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = {
    username: '',
    password: ''
  };
  constructor(private router: Router, private commService: CommunicationService) { }

  ngOnInit() {
    console.log('Login Component!');
    if (this.model.username) {
      this.router.navigate(['/home/' + this.model.username]);
    }
  }

  login() {
    if (this.model.username) {
      this.commService.emitLogin(this.model.username);
      this.router.navigate(['/home/' + this.model.username]);
    } else {
      alert('Please enter the details!');
    }
  }
}
