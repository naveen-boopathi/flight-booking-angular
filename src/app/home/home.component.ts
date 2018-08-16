import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  gotIt() {
    this.router.navigate(['/bookFlight']);
  }

}
