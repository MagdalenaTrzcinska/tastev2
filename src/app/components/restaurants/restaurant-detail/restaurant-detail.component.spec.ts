import {ComponentFixture, TestBed} from '@angular/core/testing';


import {RouterTestingModule} from '@angular/router/testing';

import {HttpClientModule} from '@angular/common/http';
import {RestaurantDetailComponent} from './restaurant-detail.component';
import {routes} from '../../../app-routing.module';
import {By} from '@angular/platform-browser';



describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [RestaurantDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should restaurant class has a correct value', () => {
    const span = fixture.debugElement.query(By.css('.restaurant')).nativeElement;
    expect(span.textContent).toContain('Restaurant');
  });

  it('should name of restaurant has a correct value', () => {
    const span = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(span.textContent).toBe('');
  });
});
