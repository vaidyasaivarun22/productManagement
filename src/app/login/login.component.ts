import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onLogin(userobj:any){
  let userLoginObj = userobj.value;
  if(userLoginObj.username == 'admin' && userLoginObj.password == 'admin')
  {
      alert("Admin Login has a seperate portal");
      this.router.navigateByUrl('/admin');
  }
  else
  {
    alert("Seems to be a new User.Complete registration first!!!");
    this.router.navigateByUrl('/register');
  }
}

}
