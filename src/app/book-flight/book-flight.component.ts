import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bookFlight() {
    alert('Flight Booked Successfully!');
    this.router.navigate(['/success']);
  }

}
