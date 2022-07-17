import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  @Input() public details:any

  public booked : boolean = false

  

  constructor() { }

  ngOnInit(): void {
  }

}
