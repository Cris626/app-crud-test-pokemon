import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { EventEmitter } from 'protractor';
import { users } from '../../../../helpers/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() authentication = new EventEmitter;
  formCreated = new FormGroup({});
  values: object | boolean;

  constructor(){
    this.values = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formCreated = new FormGroup({
      user: new FormControl('admin', Validators.required),
      password: new FormControl('admin123', Validators.required)
    })
  }

  loginUser(){
    let data = users;
    if(this.formCreated.valid){
      this.values = data.map(value=>{
        if(value.user===this.formCreated.value.user){
          if(value.password===this.formCreated.value.password){
            localStorage.setItem("name", value.name)
            return value;
          }else{
            return false;
          }
        }else{
          return false;
        }
      })
    }
    this.authentication.emit(this.values)
  }

}
