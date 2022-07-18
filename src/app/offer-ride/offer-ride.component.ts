import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  offerRideForm!:FormGroup
  title = 'fromValidation';
  submitted=false;

  get firstName() {
    return this.offerRideForm.controls['firstName']
  }
  get startLoc() {
    return this.offerRideForm.controls['startLoc']
  }
  get destination() {
    return this.offerRideForm.controls['destination']
  }
  get car() {
    return this.offerRideForm.controls['car']
  }
  get seat() {
    return this.offerRideForm.controls['seat']
  }

  constructor(private formBuilder:FormBuilder, 
              private router: Router, 
              private restService: RestServiceService){}
  ngOnInit(){
    this.offerRideForm=this.formBuilder.group({
      firstName:['',Validators.required],
      startLoc:['',Validators.required],
      destination:['',Validators.required],
      car:['',Validators.required],
      seat:['',Validators.required]
      });

  }

  onSubmit(){
    this.submitted=true
    if(this.offerRideForm.invalid){
      return
    }
    alert("Success");
  }

  backBtn() {
    this.router.navigate(['/book-ride'])
  }
}
