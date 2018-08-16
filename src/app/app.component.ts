import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private commService: CommunicationService) { }
  isUser = false;
  userName: string;
  navURL: string;
  ngOnInit() {
    console.log('App component!');
    this.commService.loginEmitted$.subscribe((username) => {
      console.log(username);
      if (username) {
        this.isUser = true;
        this.userName = username;
        this.navURL = `/home/${this.userName}`;
        console.log(`Login Success - ${this.isUser} and Username - ${this.userName}`);
      } else if (username === '') {
        this.isUser = false;
        this.navURL = '/';
        console.log('else if');
      }
    });
  }
}
