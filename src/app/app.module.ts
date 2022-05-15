import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IphonesComponent } from './iphones/iphones.component';
import { SamsungComponent } from './samsung/samsung.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    IphonesComponent,
    SamsungComponent,
    XiaomiComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
