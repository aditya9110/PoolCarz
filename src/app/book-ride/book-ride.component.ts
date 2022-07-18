import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';
import { RideDetailsComponent } from '../ride-details/ride-details.component';


@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  public rides! : any
  public carDetails : any = [{id:'3', name:'Om', car:'Porsche',startPoint:"Vashi", endPoint:"Thane", seatsAvailable:"3"}]

  myMessage=""
  public filterName! : string
  public showAllRides:boolean = false

  public childCompo : boolean = false

  @ViewChild(RideDetailsComponent) rideDetailsComponent! : RideDetailsComponent

  public showAllRidesBtn() {
    this.showAllRides = !this.showAllRides
  }

  public offerRideBtn() {
    this.router.navigate(['/offer-ride'])
  }

  constructor(private router: Router,
              private restService: RestServiceService) { }

  ngOnInit(): void {
    this.restService.getRideData().subscribe(data => this.rides = data)
  }

  getRideClone(ridedata:any[]) {
    ridedata.forEach(data=> this.rides.push(data))
  }
  
}
