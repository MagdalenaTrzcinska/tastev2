import {async, ComponentFixture, fakeAsync, getTestBed, inject, TestBed, tick} from '@angular/core/testing';

import {Location} from '@angular/common';

import {RouterTestingModule} from '@angular/router/testing';

import {RestaurantsComponent} from './restaurants.component';
import {HttpClientModule} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {routes} from '../../app-routing.module';


describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [RestaurantsComponent, RestaurantDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should header h2 has a correct value', () => {
    const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2).toBeTruthy();
    expect(h2.textContent).toContain('TASTE');
  });

  it('should names of restaurant be undefined', () => {
    const names = component.nameOfRestaurants;
    expect(names).toBeUndefined();
  });

  it('should go to search-page',
    async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.detectChanges();

      fixture.debugElement.query(By.css('.navbar-brand')).nativeElement.click();

      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/');
      });
    })));
});
