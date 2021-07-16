import {ComponentFixture, fakeAsync, getTestBed, inject, TestBed, tick} from '@angular/core/testing';


import {RouterTestingModule} from '@angular/router/testing';

import {RestaurantsComponent} from './restaurants.component';
import {HttpClientModule} from '@angular/common/http';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [RestaurantsComponent]
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
});
