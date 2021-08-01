import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HttpClientModule} from '@angular/common/http';
import { RestaurantDetailComponent } from './components/restaurants/restaurant-detail/restaurant-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoSelectedComponent } from './components/restaurants/no-selected/no-selected.component';
import { MenuComponent } from './components/restaurants/restaurant-detail/menu/menu.component';

import {RestaurantService} from './services/restaurant.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    NoSelectedComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
