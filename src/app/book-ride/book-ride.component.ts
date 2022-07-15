import { Component, OnInit, ViewChild } from '@angular/core';
import { HoverDirectiveDirective } from '../hover-directive.directive';
import { WriteDetailsComponent } from '../write-details/write-details.component';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  public rides = [
    {id:'1', name:'Raj', car:'BMW', startPoint:"Kalyan", endPoint:"Infosys", seatsAvailable:"2"},
    {id:'2', name:'Akash', car:'Audi',startPoint:"Infosys", endPoint:"Dadar", seatsAvailable:"4"},
    {id:'3', name:'Om', car:'Porsche',startPoint:"Vashi", endPoint:"Thane", seatsAvailable:"3"},
    {id:'4', name:'Adi', car:'Lamborgini',startPoint:"Infosys", endPoint:"Nariman Point", seatsAvailable:"5"}
  ]

  public carDetails : any = {id:'3', name:'Om', car:'Porsche',startPoint:"Vashi", endPoint:"Thane", seatsAvailable:"3"}

  myMessage=""
  public filterName! : string
  public showAllRides:boolean = false

  public childCompo : boolean = false

  @ViewChild(WriteDetailsComponent) writeDetailsComponent! : WriteDetailsComponent

  public showAllRidesBtn() {
    this.showAllRides = this.showAllRides ? false : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
