import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading: Subject<boolean> = this.service.isLoading;
  constructor(private service: RestaurantService) {
  }

  ngOnInit(): void {
  }

}
