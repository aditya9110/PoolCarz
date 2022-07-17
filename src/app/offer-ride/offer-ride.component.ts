import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  registerForm!:FormGroup
  title = 'fromValidation';
  submitted=false;

  constructor(private formBuilder:FormBuilder){}
    ngOnInit(){
      //validations
      this.registerForm=this.formBuilder.group({
        firstName:['',Validators.required],
        strtloc:['',Validators.required],
        destination:['',Validators.required],
        car:['',Validators.required],
        seat:['',Validators.required]
       });
      
      }
      onSubmit(){
        this.submitted=true
        if(this.registerForm.invalid){
          return
        }
        alert("Success");
      }
}
