import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = ''
  public password = ''
  public auth:boolean = false
  public isSubmit:boolean = false

  public validate() {
    this.isSubmit = true
    if(this.username=='aditya' && this.password=='pass') {
      this.auth = true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
