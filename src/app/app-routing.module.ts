import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchPageComponent} from './components/search-page/search-page.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant-detail/restaurant-detail.component';
import {NoSelectedComponent} from './components/restaurants/no-selected/no-selected.component';

export const routes: Routes = [
  {path: '', component: SearchPageComponent, pathMatch: 'full'},
  {path: 'restaurants/:city', component: RestaurantsComponent, children: [
      {path: '', component: NoSelectedComponent},
      {path: ':name', component: RestaurantDetailComponent},
    ]}
  /*
  {path: 'restaurants', component: RestaurantsComponent, children: [
      {path: '', component: NoSelectedRestaurantComponent, pathMatch: 'full'},
      {path: ':name', component: RestaurantInfoComponent},
    ]},
  {path: 'panel', component: PanelComponent, canActivate: [LoginToPanelGuard], children: [
      {path: 'add-restaurant', component: AddRestaurantComponent},
      {path: ':name', component: PanelRestaurantComponent},
    ]},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent},
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
