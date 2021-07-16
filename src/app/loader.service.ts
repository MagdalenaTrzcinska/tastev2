import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {RestaurantService} from './restaurant.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: RestaurantService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          this.loaderService.hide();
        }, 800);
      })
    );
  }
}
