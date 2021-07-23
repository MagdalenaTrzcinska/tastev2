import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {RestaurantService} from '../../restaurant.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-no-selected',
  templateUrl: './no-selected.component.html',
  styleUrls: ['./no-selected.component.scss']
})
export class NoSelectedComponent implements OnInit {
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

  onOpenRestaurantInfo(): void {
    this.service.visibleNavOfRestaurants = true;
  }
}
