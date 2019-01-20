import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }
  }
}
