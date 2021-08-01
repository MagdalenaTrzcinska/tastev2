import {ComponentFixture, fakeAsync, getTestBed, inject, TestBed, tick} from '@angular/core/testing';


import {RouterTestingModule} from '@angular/router/testing';
import {SearchPageComponent} from './search-page.component';
import {By} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SearchPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
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

  it('should button of Panel has a correct value', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Panel');
  });

  it('should header h3 has a correct value', () => {
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3).toBeTruthy();
    expect(h3.textContent).toContain('Enter a city');
  });

  it('should dropdown has a correct change event', () => {
    const select = fixture.debugElement.query(By.css('.dropdown')).nativeElement;
    expect(select[0].textContent).toContain('Warsaw');
    expect(select[1].textContent).toContain('Cracow');
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  });

  it('should button of search has a correct value', () => {
    const button = fixture.debugElement.query(By.css('.box button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Search');
  });

  /*
  it('navigates to the list of restaurants route when clicked the Search', () => {
    const router = TestBed.get(Router);
    const location = TestBed.get(Location);

    router.navigate(['restaurants/Warsaw']).then(() => {
      expect(location.path()).toBe('restaurants/Warsaw');
    });
  });

   */

});
