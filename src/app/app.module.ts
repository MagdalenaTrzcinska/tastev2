import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoSelectedComponent } from './restaurants/no-selected/no-selected.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {RestaurantService} from './restaurant.service';
import {LoaderInterceptor} from './loader.service';
import {Location} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    NoSelectedComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [RestaurantService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
