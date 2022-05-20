import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onRegistration(userRegisterObj:User)
  {
      localStorage.setItem("username",userRegisterObj.username);
      localStorage.setItem("password",userRegisterObj.password);
      localStorage.setItem("email",userRegisterObj.email);
      alert('Registration successfull !!!');
      this.router.navigateByUrl('products/iphones');
  }
}
