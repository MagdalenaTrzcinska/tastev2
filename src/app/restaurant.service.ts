import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Delivery, Menu, Opinion, Restaurant} from './restaurant.model';
import {catchError, filter, map} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  visibleNavOfRestaurants: boolean;

  constructor(private http: HttpClient) {
  }

  gettingANameOfRestaurants(city: string): any {
    return this.http.get<Restaurant>(`${environment.API}.json`)
      .pipe(
        map(responseData => {
          const names = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key) && responseData[key].location === city) {
              names.push({name: key});
            }
          }
          return names;
        })
      );
  }

  gettingTheRestaurant(name: string): Observable<Delivery> {
    return this.http.get<Delivery>(`${environment.API}/${name}/delivery.json`);
  }

  gettingTheMenu(name: string): Observable<Menu[]> {
    return this.http.get<Menu>(`${environment.API}/${name}/menu.json`)
      .pipe(
        map(responseData => {
          const menu = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              menu.push({...responseData[key], name: key});
            }
          }
          return menu;
        })
      );
  }

  gettingTheOpinions(name: string): Observable<Opinion[]> {
    return this.http.get<Opinion>(`${environment.API}/${name}/opinions.json`)
      .pipe(
        map(responseData => {
          const opinions = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              opinions.push({...responseData[key]});
            }
          }
          return opinions;
        })
      );
  }

}
