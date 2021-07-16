import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  nameOfRestaurants;

  constructor(public service: RestaurantService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     const city = params.city;
     this.service.gettingANameOfRestaurants(city).subscribe(posts => {
        this.nameOfRestaurants = posts;
      });
    });
  }
}
