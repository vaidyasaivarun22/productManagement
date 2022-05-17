import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { IphonesComponent } from './iphones/iphones.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SamsungComponent } from './samsung/samsung.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent,
  children:[
    {path:'iphones',component:IphonesComponent},
    {path:'iphones/:id',component:DescriptionComponent},
    {path:'samsung',component:SamsungComponent},
    {path:'samsung/:id',component:DescriptionComponent},
    {path:'xiaomi',component:XiaomiComponent},
    {path:'xiaomi/:id',component:DescriptionComponent},
    {path:'',redirectTo:'/products/iphones',pathMatch:'full'},
          ]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
