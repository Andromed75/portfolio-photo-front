import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  readonly isMobile$ = this.breakpointObserver
    .observe('(max-width: 768px)')
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  readonly isDesktop$ = this.isMobile$.pipe(
    map(isMobile => !isMobile)
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
