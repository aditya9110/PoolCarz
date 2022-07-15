import { Component, OnInit } from '@angular/core';
import { HoverDirectiveDirective } from '../hover-directive.directive';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  public rides = [
    {startPoint:"Kalyan", endPoint:"Office", seatsAvailable:"2"},
    {startPoint:"Office", endPoint:"Dadar", seatsAvailable:"4"},
    {startPoint:"Vashi", endPoint:"Thane", seatsAvailable:"3"},
    {startPoint:"Office", endPoint:"Nariman Point", seatsAvailable:"5"}
  ]
  myMessage=""
  public showAllRides:boolean = false

  public showAllRidesBtn() {
    this.showAllRides = this.showAllRides ? false : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
