import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private commService: CommunicationService) { }

  ngOnInit() {
  }

  login() {
    this.commService.emitLogin('');
    this.router.navigate(['/login']);
  }
}
