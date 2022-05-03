import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'asp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHome = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(!(event instanceof NavigationEnd)) {
        return;
      }
      this.isHome = event.url === '' || event.url === '/';
    });
  }

}
