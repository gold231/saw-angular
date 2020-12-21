import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'saw-universal';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        gtag('config', 'UA-154456238-1',
                   {
                     page_path: event.urlAfterRedirects
                   }
        );
      }
    });
  }
}
