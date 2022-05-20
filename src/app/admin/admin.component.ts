import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(userobj:any)
  {
      let userLoginObj = userobj.value;
      if(userLoginObj.username == 'admin' && userLoginObj.password == 'admin')
      {
          this.router.navigateByUrl('/administrator');
      }
      else
      {
          alert("Inavlid credentials!!!");
      }
  }
}
