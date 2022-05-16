import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { posts } from '../models/posts.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy{
  delObj:any;

  constructor(private fsObj:FakedataService,private router:Router) { }
  myPosts:posts[]=[];
  ngOnInit(): void {
    this.delObj= this.fsObj.getPosts().subscribe(
      (data:posts[])=>{
        this.myPosts=data;
      },
      (err:any)=>{console.log('err in getting post data'+err)}
    )
  }
  ngOnDestroy(): void {
      this.delObj.unsubscribe();
  }

  onSelectIdButton(id:number){ 
      this.router.navigateByUrl('admin/'+id);
  } 

}
