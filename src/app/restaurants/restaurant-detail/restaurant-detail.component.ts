import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../restaurant.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Delivery, Menu, Opinion} from '../../restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})

export class RestaurantDetailComponent implements OnInit {
  detail: Delivery;
  name: string;
  menu: Menu[];
  opinions: Opinion[];

  constructor(public service: RestaurantService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.name = params.name;
        this.service.gettingTheRestaurant(this.name).subscribe(posts => {
          this.detail = posts;
        });

        this.service.gettingTheMenu(this.name).subscribe(posts => {
            this.menu = posts;
        });

        this.service.gettingTheOpinions(this.name).subscribe(posts => {
          this.opinions = posts;
        });
    });
  }

  getMinimumCost(): number {
    const prizes = this.menu.map(dish => dish.price);
    return Math.min(...prizes);
  }
}


