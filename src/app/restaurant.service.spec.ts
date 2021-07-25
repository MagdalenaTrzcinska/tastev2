import {TestBed} from '@angular/core/testing';
import {RestaurantService} from './restaurant.service';
import {HttpClientModule} from '@angular/common/http';
import {Delivery} from './restaurant.model';

describe('RestaurantsService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected restaurants', (done: DoneFn) => {
    const names = [{name: 'ee'}, {name: 'food-fed'}, {name: 'pizzaorzo'}];

    service.gettingANameOfRestaurants('Warsaw').subscribe(v => {
      expect(v).toEqual(names);
      done();
    });
  });

  it('should return expected information of delivery', (done: DoneFn) => {
    // @ts-ignore
    const names: Delivery = {amount: '2 EUR', time: 30};

    service.gettingTheRestaurant('food-fed').subscribe(v => {
      expect(v).toEqual(names);
      done();
    });
  });
});
