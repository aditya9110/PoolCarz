import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-details',
  templateUrl: './write-details.component.html',
  styleUrls: ['./write-details.component.css']
})
export class WriteDetailsComponent implements OnInit {

  @Input() public details:any

  public booked : boolean = false

  

  constructor() { }

  ngOnInit(): void {
  }

}
